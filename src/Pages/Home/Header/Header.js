//imported file
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
//header component
const Header = () => {
  const { firebaseContext } = useAuth();
  //destructuring
  const { user, logOut } = firebaseContext;

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Your Watch</Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {user?.email ? (
            <>
              <Link to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </Link>{" "}
              <Button color="inherit">{user?.displayName}</Button>
              <Button onClick={logOut} color="inherit">
                logOut
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>

              <Link to="/signup">
                <Button color="inherit">SignUp</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
