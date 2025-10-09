import React from 'react';
import { Link } from 'react-router';
import apperror from '../../../assets/App-Error.png'

const AppNotFound = () => {
    return (
        <div>
            <div className='text-center m-10 space-y-4'>
                <div className='flex justify-center mb-10'><img src={apperror} alt="appError" /></div>
                <h1 className='text-4xl font-bold'>Oops!! App not found!</h1>
                <p>The app you are requesting is not available on our system. Please try another apps.</p>
                <Link to={'/'} className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">Go Back!</Link>
            </div>
        </div>
    );
};

export default AppNotFound;