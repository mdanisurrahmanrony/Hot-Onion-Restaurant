import React from "react";
import "./MenuList.css";
import { Link } from "react-router-dom";
import { MenuConsumer } from "../../Context";

const Menu = ({ menu }) => {
    const { img, name, shortDescription, price, key } = menu;
    return (
        <div className="col-md-4 my-2">
            <div className="card p-3 text-center">
                <div className="img-container px-5 py-3">
                    <img
                        src={img}
                        style={{ width: "200px", height: "200px" }}
                        alt=""
                    />
                </div>
                <div className="card-body p-0">
                    <MenuConsumer>
                        {value => (
                            <React.Fragment>
                                <Link
                                    className="title-link"
                                    to={"/details/" + key}
                                    onClick={() => value.handleDetails(key)}
                                >
                                    <h5> {name} </h5>
                                </Link>
                                <p className="text-muted">
                                    {" "}
                                    {shortDescription}{" "}
                                </p>
                                <h5 className="pb-0"> ${price} </h5>
                            </React.Fragment>
                        )}
                    </MenuConsumer>
                </div>
            </div>
        </div>
    );
};

export default Menu;
