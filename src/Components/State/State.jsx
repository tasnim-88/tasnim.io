import React from 'react';

const State = () => {
    return (
        <div className='border-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white p-10 space-y-3'>
            <h1 className='text-center text-4xl font-bold'>Trusted By Millions, Built For You</h1>
            <div className='flex justify-center items-center gap-6'>
                <div className='text-center'>
                    <p>Total Downloads</p>
                    <h1 className='text-5xl font-bold'>29.6M</h1>
                    <p>21% More Than Last Month</p>
                </div>
                <div className='text-center'>
                    <p>Total Reviews</p>
                    <h1 className='text-5xl font-bold'>906K</h1>
                    <p>46% More Than Last Month</p>
                </div>
                <div className='text-center'>
                    <p>Active Apps</p>
                    <h1 className='text-5xl font-bold'>132+</h1>
                    <p>31 More Will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default State;