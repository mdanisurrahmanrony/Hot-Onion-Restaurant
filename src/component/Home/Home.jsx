import React from "react";
import Banner from "../Banner/Banner";
import MenuList from "../Menu/MenuList";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <MenuList />
            <ChooseUs />
            <Footer />
        </React.Fragment>
    );
};

export default Home;
