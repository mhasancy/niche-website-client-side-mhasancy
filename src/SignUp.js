//imported file
import { getAuth, updateProfile } from "@firebase/auth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

//signup component
const SignUp = () => {
  //destructuring
  const { firebaseContext } = useAuth();
  const {
    googleSignIn,
    setError,
    setUser,
    setIsLoading,
    emailSignup,
    error,
    errorDataClear,
  } = firebaseContext;
  //auth context
  const auth = getAuth();
  //location redirectUrl
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";
  //googleSignIn handle with context
  const handleGoogleLogin = () => {
    googleSignIn().then(() => {
      history.push(redirectUrl);
    });
  };
  //use hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //use hook form and emailSignup with context

  const onSubmitData = (inputData) => {
    const { name, email, password } = inputData;
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      emailSignup(auth, email, password)
        .then((results) => {
          setIsLoading(true);
          setError("");
          const userData = results.user;
          setUser(userData);
          setIsLoading(false);
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          history.push(redirectUrl);
          window.history.go(0);
        })
        .catch((error) => {
          if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            setError(
              "Email already used, please log in or try again with a new email."
            );
          } else {
            setError(error.message);
          }
        });
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmitData)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("name", { required: true })}
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("email", { required: true })}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register("password", { required: true })}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" to="/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
};

export default SignUp;
