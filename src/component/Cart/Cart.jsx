import React, { useContext, useState, useEffect } from "react";
import { MenuConsumer, MenuContext } from "../../Context";
import CartItem from "./CartItem";
import { useAuth } from "../SignUp/Auth";
import { Redirect, withRouter } from "react-router-dom";
import StripeCheckoutPage from "../Stripe/StripeCheckout";

const Cart = ({ history, deliveryInfo }) => {
    const [placeOrder, setPlaceOreder] = useState(null);
    const [subTotal, setSubTotal] = useState();
    const [tax, setTax] = useState(2);
    const [total, setTotal] = useState();
    const [totalAmount, setTotalAmount] = useState();

    const Menu = useContext(MenuContext);
    console.log(Menu);
    const auth = useAuth();

    const handleTotal = () => {
        let total = 0;
        let subTotal = 0;
        Menu.cart.map((item) => (total += item.total));
        Menu.cart.map((item) => (subTotal += item.count));
        setTotal(total.toFixed(2));
        setSubTotal(subTotal);
        const totalAmount = total + tax;
        setTotalAmount(totalAmount.toFixed(2));
    };
    useEffect(() => {
        handleTotal();
    }, []);

    const handleOrder = () => {
        const cartProducts = {
            email: auth.user.email,
            cartItems: Menu.cart,
            address: deliveryInfo,
        };
        fetch("https://evening-scrubland-22711.herokuapp.com/addCart", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(cartProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Your Order has been Placed with id: " + data._id);
                Menu.handleOrderId(data._id);
                setPlaceOreder(true);
            });
    };
    return (
        <div>
            {!placeOrder && (
                <div>
                    <p>
                        From <strong>Gulshan Plaza Restaurnt GPR</strong>
                    </p>
                    <p>Arriving in 20-30 min</p>
                    {Menu.cart.map((item) => (
                        <CartItem key={item.key} cart={item} />
                    ))}
                    <>
                        <div className="clearfix">
                            <div className="pl-2 float-left">
                                <p>Sub Total Item {subTotal} </p>
                                <p>Tax</p>
                                <p>Total</p>
                            </div>
                            <div className="pr-2 float-right">
                                <p> {total} </p>
                                <p> {tax} </p>
                                <p> {totalAmount} </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <button
                                className="form-control save-address"
                                style={{ margin: "0 auto" }}
                                onClick={handleOrder}
                            >
                                Place Order
                            </button>
                        </div>
                    </>
                </div>
            )}
            {placeOrder && <StripeCheckoutPage total={totalAmount} />}
        </div>
    );
};

export default withRouter(Cart);
