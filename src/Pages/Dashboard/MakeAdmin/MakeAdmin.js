import { Alert, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //use hook form and email SignIn with context
  const onSubmitData = (inputData) => {
    setSuccess(false);
    setError(false);

    const { email } = inputData;
    axios.put("http://localhost:5000/users/admin", { email }).then((res) => {
      console.log(res.data);
      if (res?.data?.modifiedCount > 0) {
        alert("ok");
        setSuccess(true);
      } else if (res?.data?.modifiedCount === 0) {
        window.alert("ono ok");
        setError(true);
      }
    });
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
        <Typography component="h1" variant="h5">
          Make an Admin
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmitData)}
          sx={{ mt: 3 }}
        >
          <TextField
            xs={12}
            {...register("email", { required: true })}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          {success && (
            <Alert severity="success">Admin Added Successfully!</Alert>
          )}
          {error && <Alert severity="error">Admin no Added!</Alert>}
        </Box>
      </Box>
    </Container>
  );
};

export default MakeAdmin;
