import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import useApps from '../Hooks/useApps';

const Root = () => {
    const { loading } = useApps()

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[80vh]">
                <h1 className='text-9xl'>L</h1>
                <img className="w-28 h-28 animate-spin" src="/src/assets/logo.png" alt="Loading" />
                <h1 className='text-9xl'>ADING</h1>
            </div>
        );
    }
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;