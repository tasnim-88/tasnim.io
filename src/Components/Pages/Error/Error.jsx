import React from 'react';
// import { useRouteError } from 'react-router';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router';
import pageerror from '../../../assets/error-404.png'

const Error = () => {
    // const error=useRouteError()
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center m-10 space-y-4'>
                <div className='flex justify-center mb-10'><img src={pageerror} alt="" /></div>
                <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <Link to={'/'} className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">Go Back</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;