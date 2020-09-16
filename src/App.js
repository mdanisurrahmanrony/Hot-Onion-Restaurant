import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Details from "./component/Details/Details";
import Cart from "./component/Cart/Cart";
import SignUp from "./component/SignUp/SignUp";
import SignIn from "./component/SignUp/SignIn";
import CheckOut from "./component/CheckOut/CheckOut";
import { AuthContextProvider } from "./component/SignUp/Auth";
import OrderPlaced from "./component/OrderPlaced/OrderPlaced";

function App() {
    return (
        <React.Fragment>
            <AuthContextProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/details/:key" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/checkout" component={CheckOut} />
                    <Route path="/orderPlaced" component={OrderPlaced} />
                </Switch>
            </AuthContextProvider>
        </React.Fragment>
    );
}

export default App;
