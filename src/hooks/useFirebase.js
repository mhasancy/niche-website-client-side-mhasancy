//imported file
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/UserAuthorize/Firebase/firebase.init";

//firebase initialization
initializeAuthentication();

//useFirebase hooks
const useFirebase = () => {
  const auth = getAuth();
  //states
  const [user, setUser] = useState({});
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [nameData, setNameData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  //googleSignIn
  const googleSignIn = (location, history) => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "put");
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //user creation with email
  const emailSignup = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((results) => {
        setError("");
        const userDataNew = { email, displayName: name };
        setUser(userDataNew);
        saveUser(email, name, "post");
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        history.replace("/");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError(
            "Email already used, please log in or try again with a new email."
          );
        } else {
          setError(error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    if (method === "post") {
      axios.post("http://localhost:5000/users", { email, displayName }).then();
    } else if (method === "put") {
      axios.put("http://localhost:5000/users", { email, displayName }).then();
    }
  };

  //email login
  const emailLogin = (email, password, location, history) => {
    setError("");
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong password, please try again or reset password.");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found, please check your email or signup.");
        } else {
          setError(error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };
  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  //set error handle empty
  const errorDataClear = () => {
    setError("");
  };
  //observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    emailData,
    nameData,
    passwordData,
    isLoading,
    user,
    error,
    setIsLoading,
    setEmailData,
    setPasswordData,
    setNameData,
    setUser,
    setError,
    googleSignIn,
    logOut,
    emailLogin,
    emailSignup,
    errorDataClear,
  };
};
export default useFirebase;
