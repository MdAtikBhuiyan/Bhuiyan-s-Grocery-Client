
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { createContext, useState } from "react";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from "./components/Orders/Orders";
import AdminNavbar from "./components/AdminNavBar/AdminNavBar";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminNavbar></AdminNavbar>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          
        </Switch>

      </Router>
    </UserContext.Provider>

  );
}

export default App;
