import React, { createContext, useState, useEffect, useContext } from "react";
import {
    addToDatabaseCart,
    getDatabaseCart,
} from "./utilities/databaseManager";

const MenuContext = createContext();
const MenuProvider = (props) => {
    // const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

    const [allMenu, setAllMenu] = useState([]);
    const [menu, setMenu] = useState([]);
    const [filterd, setFiltered] = useState([]);
    const [details, setDetails] = useState([]);
    const [cartItem, setCartItems] = useState([]);
    const [orderId, setOrderId] = useState([]);
    const [paymentId, setPaymentId] = useState([]);

    const handleOrderId = (id) => {
        setOrderId(id);
    };
    const handlePaymentId = (id) => {
        setPaymentId(id);
    };

    useEffect(() => {
        fetch("https://evening-scrubland-22711.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => {
                setAllMenu(data);
            });
    }, []);

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cartItem));
    // }, [cartItem]);

    const getMenu = () => {
        const men = [...allMenu];
        return men;
    };

    // const setMenuItem = () => {
    //     let tempMenu = [];
    //     FakeData.map((item) => {
    //         const singleItem = { ...item };
    //         tempMenu = [...tempMenu, singleItem];
    //     });
    //     setMenu(tempMenu);
    // };

    // useEffect(() => {
    //     setMenuItem();
    // }, []);

    // setting up default menu lunch
    useEffect(() => {
        let temp = [];
        temp = allMenu.filter((item) => item.category === "lunch");
        setFiltered(temp);
    }, [allMenu]);

    // get cart from localStorage
    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     const menuKeys = Object.keys(savedCart);
    //     const cart = [];
    //     const count = menuKeys.map(key => {
    //         let menus = menu.find(item => item.key === key);
    //         // menus.count = savedCart[count];
    //         console.log(menus);

    //         return [...cart, menus];
    //     });
    //     setCartItems(count);
    // }, []);

    const handleCategory = (category) => {
        let temp = [];
        temp = allMenu.filter((item) => item.category === category);
        setFiltered(temp);
    };

    const handleDetails = (key) => {
        let temp = [];
        temp = allMenu.find((item) => item.key === key);
        setDetails(temp);
    };

    const handleCart = (key, count) => {
        let tempMenu = getMenu();
        let tempCart = tempMenu.find((item) => item.key === key);
        const index = tempMenu.indexOf(tempCart);
        const menu = tempMenu[index];
        menu.count = count;
        menu.inCart = true;
        let price = menu.price;
        menu.total = menu.count * price;
        let Cart = [...cartItem, menu];
        setCartItems(Cart);
        setMenu(tempMenu);

        //addToDatabaseCart(key, count);
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    const handleIncrement = (key) => {
        const cart = [...cartItem];
        const selected = cart.find((item) => item.key === key);
        const index = cart.indexOf(selected);
        const product = cart[index];
        console.log(product);
        //let counts = product.count;
        //counts = counts + 1;
        setCartItems(product);
    };

    // const addTotal = () => {
    //     let subTotal = 0;
    //     cartItem.map(item => (subTotal += item.total));
    //     const tempTax = subTotal * 0.1;
    //     const tax = parseFloat(tempTax.toFixed(2));
    //     const total = subTotal + tax;
    //     setCartSubTotal(subTotal);
    //     setCartTax(tax);
    //     setCartTotal(total);
    // };

    return (
        <MenuContext.Provider
            value={{
                Menu: menu,
                filterd: filterd,
                details: details,
                cart: cartItem,
                orderId,
                paymentId,
                handleOrderId,
                handlePaymentId,
                handleCategory: handleCategory,
                handleDetails: handleDetails,
                handleCart: handleCart,
                handleIncrement: handleIncrement,
                emptyCart: emptyCart,
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    return useContext(MenuContext);
};

const MenuConsumer = MenuContext.Consumer;
export { MenuProvider, MenuConsumer, MenuContext };
