import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AddingProduct from "../AddingProduct/AddingProduct";
import AddingReview from "../AddingReview/AddingReview";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";

const drawerWidth = 230;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <Typography
          sx={{ fontSize: "1.2rem" }}
          variant="button"
          display="block"
          gutterBottom
        >
          Menu
        </Typography>
      </Toolbar>
      <Divider />

      <Link to="/">
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>Home</ListItem>
        </Button>
      </Link>
      <Link to={`${url}`}>
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>Dashboard</ListItem>
        </Button>
      </Link>
      <Link to={`${url}/make-admin`}>
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>Make Admin</ListItem>
        </Button>
      </Link>
      <Link to={`${url}/add-products`}>
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>Add Products</ListItem>
        </Button>
      </Link>
      <Link to={`${url}/manage-products`}>
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>Manage Products</ListItem>
        </Button>
      </Link>
      <Link to={`${url}/payment`}>
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>Payment</ListItem>
        </Button>
      </Link>
      <Link to={`${url}/my-orders`}>
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>My Orders</ListItem>
        </Button>
      </Link>
      <Link to={`${url}/all-orders`}>
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>Manage Orders</ListItem>
        </Button>
      </Link>
      <Link to={`${url}/add-reviews`}>
        <Button size="large" sx={{ width: "100%", height: "7%" }}>
          <ListItem>Add Reviews</ListItem>
        </Button>
      </Link>

      <Button size="large" sx={{ width: "100%", height: "7%" }}>
        <ListItem>Log Out</ListItem>
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ fontSize: "1.2rem" }}
            variant="button"
            noWrap
            component="div"
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <Route path={`${path}/make-admin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/add-products`}>
            <AddingProduct></AddingProduct>
          </Route>
          <Route path={`${path}/manage-products`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/all-orders`}>
            <ManageOrders></ManageOrders>
          </Route>
          <Route path={`${path}/add-reviews`}>
            <AddingReview></AddingReview>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
