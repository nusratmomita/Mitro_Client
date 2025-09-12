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
            <main className="min-h-screen">
                <Outlet />
            </main>
            {
                location.pathname !== "*" && <Footer></Footer>
            }
        </div>
        
    );
};

export default Root;