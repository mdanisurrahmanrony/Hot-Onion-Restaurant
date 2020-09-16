import React, { useState } from "react";
import { MenuConsumer } from "../../Context";
import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Details = () => {
    const [count, setCount] = useState(1);
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleIncrement = () => {
        setCount(count + 1);
    };
    return (
        <MenuConsumer>
            {(value) => {
                const {
                    name,
                    longDescription,
                    img,
                    price,
                    key,
                    inCart,
                } = value.details;
                return (
                    <div className="container py-5">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1> {name} </h1>
                                <br />
                                <p className="text-justify text-muted">
                                    {longDescription}
                                </p>
                                <br />
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h2> ${price} </h2>
                                    </div>
                                    <div className="ml-3 detail-btn-border">
                                        <button
                                            className="detail-btn"
                                            onClick={() => handleDecrement()}
                                        >
                                            -
                                        </button>
                                        <button className="detail-btn">
                                            {count}
                                        </button>
                                        <button
                                            className="detail-btn"
                                            onClick={() => handleIncrement()}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <br />
                                {inCart ? (
                                    <button className="cart-btn" disabled>
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faCartPlus}
                                        />
                                        Added
                                    </button>
                                ) : (
                                    <Link to="/">
                                        <button
                                            className="cart-btn"
                                            onClick={() => {
                                                value.handleCart(key, count);
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                className="mr-2"
                                                icon={faCartPlus}
                                            />
                                            add to cart
                                        </button>
                                    </Link>
                                )}
                            </div>
                            <div className="col-md-6">
                                <img src={img} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                );
            }}
        </MenuConsumer>
    );
};

export default Details;
