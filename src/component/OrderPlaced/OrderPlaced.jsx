import React from "react";
import { useMenu } from "../../Context";

const OrderPlaced = () => {
    const Menu = useMenu();
    return (
        <div className="banner-bg" style={{ height: "95vh" }}>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 text-center">
                        <h1>Thanks . Your order has been placed</h1>
                        <h3> Order Id : {Menu.orderId} </h3>
                        <h3> Payment Id : {Menu.paymentId} </h3>
                        <h1> Keep these Id no for tracking your order </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPlaced;
