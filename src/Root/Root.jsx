import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Root = () => {
    const location = useLocation();
    // console.log(location,location.pathname)
    return (
        <div className='overflow-x-hidden'>
            {
                location.pathname !== "*" && <Header></Header>
            }
            <Outlet></Outlet>
            {
                location.pathname !== "*" && <Footer></Footer>
            }
        </div>
    );
};

export default Root;