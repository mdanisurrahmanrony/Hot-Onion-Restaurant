import React from "react";
import "./SignUp.css";
import logo from "../../logo2.png";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";
import { useState } from "react";

const SignUp = () => {
    const auth = useAuth();
    // console.log(auth.user);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onchangeHandler = e => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        }
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    };

    const registerUser = e => {
        e.preventDefault();

        auth.signup(email, password, name).then(res => {
            if (res) {
                console.log(auth.user);
                setName("");
                setEmail("");
                setPassword("");
            }
        });
    };
    return (
        <div className="signup-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={logo} alt="" style={{ height: "50px" }} />
                    </div>

                    <div className="col-md-4 offset-md-4">
                        <form onSubmit={registerUser}>
                            <div className="form-group">
                                <br />
                                <input
                                    name="name"
                                    value={name}
                                    onChange={onchangeHandler}
                                    type="text"
                                    placeholder="Name"
                                    className="form-control"
                                />
                                <br />
                                <input
                                    value={email}
                                    name="email"
                                    onChange={onchangeHandler}
                                    type="text"
                                    placeholder="Email"
                                    className="form-control"
                                />
                                <br />
                                <input
                                    value={password}
                                    name="password"
                                    onChange={onchangeHandler}
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <br />
                                {/* <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                />
                                <br /> */}

                                <input
                                    className="signin-btn form-control"
                                    type="submit"
                                    value="Signup"
                                />

                                <br />
                                <Link to="/signin">
                                    <p className="text-center">
                                        already have an account?
                                    </p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
