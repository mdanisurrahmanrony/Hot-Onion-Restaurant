import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer pt-5" style={{ backgroundColor: "black" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img src={logo} alt="" style={{ height: "50px" }} />
                    </div>
                    <div className="col-md-3 col-6">
                        <li>
                            <Link to="">About Online Food</Link>
                        </li>
                        <li>
                            <Link to="">Read our blog</Link>
                        </li>
                        <li>
                            <Link to="">Sign up to deliver</Link>
                        </li>
                        <li>
                            <Link to="">Add your restaurant</Link>
                        </li>
                    </div>
                    <div className="col-md-3 col-6">
                        <li>
                            <Link to="">Get Help</Link>
                        </li>
                        <li>
                            <Link to="">Read FAQs</Link>
                        </li>
                        <li>
                            <Link to="">View all cities</Link>
                        </li>
                        <li>
                            <Link to="">Restaurnt near me</Link>
                        </li>
                    </div>
                </div>
                <div className="row pt-5 pb-3">
                    <div className="col-md-12">
                        <div className="clear-fix">
                            <div className="float-left">
                                <p className="text-muted">
                                    copyright &copy; 2020 online food
                                </p>
                            </div>
                            <div className="float-right">
                                <Link to="" className="footer-link ">
                                    Privacy Policy
                                </Link>
                                <Link to="" className="footer-link ">
                                    Terms of use
                                </Link>
                                <Link to="" className="footer-link ">
                                    Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
