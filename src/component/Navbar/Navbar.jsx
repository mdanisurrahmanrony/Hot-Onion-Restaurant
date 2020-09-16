import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { MenuConsumer } from "../../Context";
import { useAuth } from "../SignUp/Auth";

const Navbar = () => {
    const auth = useAuth();
    // const name = auth.user[0].displayName;
    // console.log(name);
    //console.log(auth.user.email);

    //To add data in the mongo db database ==>

    // const addItemHandler = () => {
    //     const products = FakeData;
    //     fetch("https://evening-scrubland-22711.herokuapp.com/addUser", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //         },
    //         body: JSON.stringify(products),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => console.log("post successfull", data));
    // };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <Link to="/">
                <img src={logo} style={{ height: "50px" }} alt="" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ml-3">
                        {auth.user ? (
                            <MenuConsumer>
                                {(value) => (
                                    <Link className="nav-link" to="/checkout">
                                        <FontAwesomeIcon icon={faCartPlus} />{" "}
                                        <span> {value.cart.length} </span>
                                    </Link>
                                )}
                            </MenuConsumer>
                        ) : (
                            <MenuConsumer>
                                {(value) => (
                                    <Link className="nav-link" to="/signin">
                                        <FontAwesomeIcon icon={faCartPlus} />{" "}
                                        <span> {value.cart.length} </span>
                                    </Link>
                                )}
                            </MenuConsumer>
                        )}
                    </li>
                    <li className="nav-item ml-3">
                        {auth.user ? (
                            <Link
                                onClick={auth.signout}
                                className="nav-link"
                                to="/"
                            >
                                Logout
                            </Link>
                        ) : (
                            <Link className="nav-link" to="/signin">
                                Signin
                            </Link>
                        )}
                    </li>
                    <li className="nav-item ml-3">
                        {auth.user ? (
                            <p className="nav-link">{auth.user.name}</p>
                        ) : (
                            <p></p>
                        )}
                    </li>
                    <li className="nav-item ml-3">
                        <Link
                            className="nav-link"
                            style={{
                                background: "red",
                                borderRadius: "20px",
                                color: "white",
                                padding: "",
                            }}
                            to="/signup"
                        >
                            Sign Up
                        </Link>
                    </li>
                    {/* <li className="nav-item ml-3">
                        <button className="nav-link" onClick={addItemHandler}>
                            add item
                        </button>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
