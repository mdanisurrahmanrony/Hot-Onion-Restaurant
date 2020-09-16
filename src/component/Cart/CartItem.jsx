import React, { useContext } from "react";
import { MenuContext } from "../../Context";

const CartItem = ({ cart }) => {
    const Menu = useContext(MenuContext);
    const { img, price, name, count, key } = cart;
    console.log(key);
    return (
        <div
            className="d-flex align-items-center my-2 p-2 clear-fix"
            style={{ backgroundColor: "lightGray", borderRadius: "10px" }}
        >
            <img
                src={img}
                alt=""
                className="img-fluid"
                style={{ width: "100px" }}
            />
            <div className="ml-3">
                <p className="mb-0">
                    <strong>{name}</strong>
                </p>
                <p className="text-danger mb-0"> ${price} </p>
                <p className="mb-0 text-muted">Delivery free</p>
            </div>
            {/* <div className="ml-5">
                <button>-</button>
                <button> {count} </button>
                <button onClick={() => Menu.handleIncrement(key)}>+</button>
            </div> */}
        </div>
    );
};

export default CartItem;
