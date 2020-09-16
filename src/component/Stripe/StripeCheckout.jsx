import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useAuth } from "../SignUp/Auth";
import logo from "../../logo3.png";
import { withRouter } from "react-router-dom";
import { useMenu } from "../../Context";

const StripeCheckoutPage = ({ total, history }) => {
    const Menu = useMenu();
    const auth = useAuth();
    const amount = total * 100;

    const onToken = (token) => {
        console.log(token);
        Menu.handlePaymentId(token.id);
        Menu.emptyCart();
        history.push("/orderPlaced");
    };
    return (
        <div>
            <h1> Pay Your Amount</h1>
            <StripeCheckout
                token={onToken}
                stripeKey="pk_test_08P7DtktxO4F59vXk0VnRMuF000lGkIgA7"
                name="Hot Onion Restaurant"
                email={auth.user.email}
                image={logo}
                description="Pay For Your Food"
                amount={amount}
            />
        </div>
    );
};

export default withRouter(StripeCheckoutPage);
