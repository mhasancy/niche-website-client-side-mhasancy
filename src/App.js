//imported file
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Home from "./Pages/Home/Home/Home";
import ReviewOrder from "./Pages/ReviewOrder/ReviewOrder";
import Login from "./Pages/UserAuthorize/Login/Login";
import PrivateRoute from "./Pages/UserAuthorize/PrivateRoute/PrivateRoute";
import SignUp from "./Pages/UserAuthorize/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/review-order/:orderId">
              <ReviewOrder></ReviewOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/my-bookings">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute exact path="/manage-bookings">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
