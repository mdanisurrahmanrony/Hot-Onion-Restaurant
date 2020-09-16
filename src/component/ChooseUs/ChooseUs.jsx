import React from "react";
import img1 from "../../Image/adult-blur-blurred-background-687824.png";
import img2 from "../../Image/chef-cook-food-33614.png";
import img3 from "../../Image/architecture-building-city-2047397.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleRight,
    faTrain,
    faBell,
    faTruck
} from "@fortawesome/free-solid-svg-icons";
import "./ChooseUs.css";

const ChooseUs = () => {
    return (
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Why Choose Us</h2>
                    <p className="text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eligendi ab nemo ipsum autem neque! Fugit
                        excepturi eligendi labore esse obcaecati!
                    </p>
                </div>
            </div>
            <div className="card-deck pt-3">
                <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body d-flex">
                        <div className="mr-3">
                            <FontAwesomeIcon
                                className="card-body-icon"
                                icon={faTrain}
                            ></FontAwesomeIcon>
                        </div>
                        <div>
                            <h5 className="card-title">Fast Delivery</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                            <h6 className="card-text d-flex align-items-center">
                                <span
                                    className="mr-3"
                                    style={{ color: "blue", cursor: "pointer" }}
                                >
                                    see more
                                </span>
                                <FontAwesomeIcon
                                    style={{ color: "lime", fontSize: "25px" }}
                                    icon={faArrowAltCircleRight}
                                ></FontAwesomeIcon>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body d-flex">
                        <div className="mr-3">
                            <FontAwesomeIcon
                                className="card-body-icon"
                                icon={faBell}
                            ></FontAwesomeIcon>
                        </div>
                        <div>
                            <h5 className="card-title">
                                A Good Auto Responder
                            </h5>
                            <p className="card-text">
                                This card has supporting text below as a natural
                                lead-in to additional content.
                            </p>
                            <h6 className="card-text d-flex align-items-center">
                                <span
                                    className="mr-3"
                                    style={{ color: "blue", cursor: "pointer" }}
                                >
                                    see more
                                </span>
                                <FontAwesomeIcon
                                    style={{ color: "lime", fontSize: "25px" }}
                                    icon={faArrowAltCircleRight}
                                ></FontAwesomeIcon>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body d-flex">
                        <div className="mr-3">
                            <FontAwesomeIcon
                                className="card-body-icon"
                                icon={faTruck}
                            ></FontAwesomeIcon>
                        </div>
                        <div>
                            <h5 className="card-title">Home Delivery</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </p>
                            <h6 className="card-text d-flex align-items-center">
                                <span
                                    className="mr-3"
                                    style={{ color: "blue", cursor: "pointer" }}
                                >
                                    see more
                                </span>
                                <FontAwesomeIcon
                                    style={{ color: "lime", fontSize: "25px" }}
                                    icon={faArrowAltCircleRight}
                                ></FontAwesomeIcon>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
