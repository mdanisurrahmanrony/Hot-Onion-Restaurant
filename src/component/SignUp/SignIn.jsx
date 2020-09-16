import React from "react";
import logo from "../../logo2.png";
import { useAuth } from "./Auth";
import { useState } from "react";
import { Redirect, useHistory, withRouter } from "react-router-dom";

const SignIn = ({ history }) => {
    const auth = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    };

    const signinUser = (e) => {
        e.preventDefault();

        auth.signin(email, password)
            .then((res) => {
                if (res) {
                    if (res.user) {
                    }
                }
                history.push("/");
                setPassword("");
                setEmail("");
            })
            .catch((err) => {
                alert(err.message);
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
                        <form onSubmit={signinUser}>
                            <div className="form-group">
                                <br />
                                <input
                                    name="email"
                                    value={email}
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
                                <input
                                    className="signin-btn form-control"
                                    type="submit"
                                    value="Sign in"
                                />
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(SignIn);
