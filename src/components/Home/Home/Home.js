import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Offerings from '../Offerings/Offerings';
import Partners from '../Partners/Partners';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Offerings></Offerings>
            <WhyUs></WhyUs>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;