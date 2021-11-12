//imported file
import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
//header component
const Header = () => {
  const { firebaseContext } = useAuth();
  //destructuring
  const { user, logOut } = firebaseContext;

  return (
    <AppBar className=" sticky-top navbar navbar-expand-lg shadow navbar-white fw-bold">
      <Box className="container">
        <NavLink className="navbar-brand fs-1 fw-bold gradient-txt" to="/">
          <span style={{ fontFamily: "Merienda" }}>Green Watch</span>
        </NavLink>
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Box className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                aria-current="page"
                className="nav-link active"
                to="/products"
              >
                Products
              </NavLink>
            </li>

            {user?.email ? (
              <>
                <li className="nav-item">
                  <NavLink
                    aria-current="page"
                    className="nav-link active"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="" className="nav-link">
                    {user?.displayName}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={logOut}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Log in
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Box>
      </Box>
    </AppBar>

    // <Box sx={{ flexGrow: 1, mb: 10 }}>
    //   <AppBar position="fixed">
    //     <Toolbar>
    //       <Typography variant="h6">Your Watch</Typography>
    //       <Typography
    //         variant="h6"
    //         component="div"
    //         sx={{ flexGrow: 1 }}
    //       ></Typography>
    //       {user?.email ? (
    //         <>
    //           <Link to="/dashboard">
    //            <Button color="inherit">Dashboard</Button>
    //           </Link>{" "}
    //          <Button color="inherit">{user?.displayName}</Button>
    //          <Button onClick={logOut} color="inherit">
    //             logOut
    //           </Button>
    //         </>
    //       ) : (
    //         <>
    //           <Link to="/login">
    //            <Button color="inherit">Login</Button>
    //           </Link>

    //           <Link to="/signup">
    //            <Button color="inherit">SignUp</Button>
    //           </Link>
    //         </>
    //       )}
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};

export default Header;
