import React from "react";
import "./CheckOut.css";
import Cart from "../Cart/Cart";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMenu } from "../../Context";

const CheckOut = () => {
    const Menu = useMenu();
    const { register, handleSubmit, errors, reset } = useForm();
    const [deliveryInfo, setDeliveryInfo] = useState(null);
    const onSubmit = (data) => {
        setDeliveryInfo(data);
        reset();
    };
    return (
        <div>
            {Menu.cart.length === 0 ? (
                <div>
                    <h1 className="p-5">
                        Your Cart is empty. Please Add Food to your Cart
                    </h1>
                </div>
            ) : (
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-5">
                            <h3>Edit Delivery Details</h3>
                            <hr />

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    name="deliver to door"
                                    className="form-control"
                                    defaultValue="Deliver to door"
                                    ref={register}
                                />
                                <br />
                                <input
                                    name="107 Rd no 8"
                                    className="form-control"
                                    defaultValue="107 Rd no 8"
                                    ref={register}
                                />
                                <br />
                                <input
                                    name="flat"
                                    className="form-control"
                                    placeholder="Flat, suite or floor"
                                    ref={register({
                                        required: true,
                                        maxLength: 10,
                                    })}
                                />
                                {errors.flat && (
                                    <p style={{ color: "red" }}>
                                        This field is required
                                    </p>
                                )}
                                <br />
                                <input
                                    name="business"
                                    className="form-control"
                                    placeholder="Business Name"
                                    ref={register({
                                        required: true,
                                        maxLength: 10,
                                    })}
                                />
                                {errors.business && (
                                    <p style={{ color: "red" }}>
                                        This field is required
                                    </p>
                                )}
                                <br />
                                <input
                                    name="instruction"
                                    className="form-control"
                                    placeholder="Add delivery instruction"
                                    ref={register({
                                        required: true,
                                        maxLength: 10,
                                    })}
                                />
                                {errors.instruction && (
                                    <p style={{ color: "red" }}>
                                        This field is required
                                    </p>
                                )}
                                <br />

                                <input
                                    type="submit"
                                    className="form-control save-address"
                                />
                            </form>
                        </div>
                        {deliveryInfo && (
                            <div className="offset-md-2 col-md-5">
                                <Cart deliveryInfo={deliveryInfo} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckOut;
