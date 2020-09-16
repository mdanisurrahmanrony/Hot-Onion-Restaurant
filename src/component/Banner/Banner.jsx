import React from "react";
import bg from "../../bannerbackground.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 text-center">
                        <h1>Best Food Waiting for Your Belly</h1>
                        <div className="col-md-6 mx-auto">
                            <form action="" className="form-banner">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inlineFormInputGroupUsername2"
                                        placeholder="Search food items"
                                    ></input>
                                    <div className="input-group-append">
                                        <div className="input-group-text btn">
                                            Search
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
