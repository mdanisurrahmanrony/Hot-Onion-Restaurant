import React from "react";
import { MenuConsumer } from "../../Context";
import Menu from "./Menu";
import "./MenuList.css";
import { useAuth } from "../SignUp/Auth";
import { Link } from "react-router-dom";

const MenuList = () => {
    const auth = useAuth();
    return (
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-md-12 text-center">
                    <MenuConsumer>
                        {value => {
                            return (
                                <div className="btn-group">
                                    <button
                                        onClick={() => {
                                            value.handleCategory("breakfast");
                                        }}
                                        className="mx-2 filter-btn"
                                    >
                                        Breakfast
                                    </button>
                                    <button
                                        className="mx-2 filter-btn"
                                        onClick={() => {
                                            value.handleCategory("lunch");
                                        }}
                                    >
                                        Lunch
                                    </button>
                                    <button
                                        className="mx-2 filter-btn"
                                        onClick={() => {
                                            value.handleCategory("dinner");
                                        }}
                                    >
                                        Dinner
                                    </button>
                                </div>
                            );
                        }}
                    </MenuConsumer>
                </div>
            </div>
            <div className="row">
                <MenuConsumer>
                    {value =>
                        value.filterd.map(item => (
                            <Menu key={item.key} menu={item} />
                        ))
                    }
                </MenuConsumer>
            </div>
            <div className="row pt-5">
                <div className="col-md-12 text-center">
                    {auth.user ? (
                        <MenuConsumer>
                            {value =>
                                value.cart.length ? (
                                    <Link to="/checkout">
                                        <button
                                            style={{ backgroundColor: "red" }}
                                            className="menulist-checkout"
                                        >
                                            Checkout your food
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        className="menulist-checkout"
                                        disabled
                                    >
                                        Checkout your food
                                    </button>
                                )
                            }
                        </MenuConsumer>
                    ) : (
                        <MenuConsumer>
                            {value =>
                                value.cart.length ? (
                                    <Link to="/signin">
                                        <button
                                            style={{ backgroundColor: "red" }}
                                            className="menulist-checkout"
                                        >
                                            Checkout your food
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        className="menulist-checkout"
                                        disabled
                                    >
                                        Checkout your food
                                    </button>
                                )
                            }
                        </MenuConsumer>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuList;
