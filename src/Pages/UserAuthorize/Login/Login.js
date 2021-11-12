//imported file
import { getAuth } from "@firebase/auth";
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

//log in component
const Login = () => {
  //auth context
  const auth = getAuth();
  //destructuring
  const { firebaseContext } = useAuth();
  const {
    googleSignIn,
    setUser,
    setError,
    setIsLoading,
    emailLogin,
    error,
    errorDataClear,
  } = firebaseContext;
  //location redirectUrl
  const location = useLocation();
  const history = useHistory();
  //googleSignIn handle
  const handleGoogleLogin = () => {
    googleSignIn(location, history);
  };
  //use hook form
  const { register, handleSubmit } = useForm();

  //use hook form and email SignIn with context
  const onSubmitData = (inputData) => {
    const { email, password } = inputData;
    emailLogin(email, password, location, history);
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
          Sign in
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmitData)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
        <Button sx={{ mb: 2 }} variant="contained" onClick={handleGoogleLogin}>
          Login with Google
        </Button>
        <Grid container justifyContent="center">
          <Grid item sx={{ mb: 10 }}>
            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
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

export default Login;
