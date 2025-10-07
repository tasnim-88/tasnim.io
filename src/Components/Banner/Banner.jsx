import React from 'react';

const Banner = () => {
    return (
        <div className='text-center mt-20 space-y-4'>
            <h1 className='text-5xl font-bold'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='text-[#627382]'>
                At Tasnim.io, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <button className='btn shadow-sm'><img src="/src/assets/googlePlay.png" alt="" />Google Play</button>
            <button className='btn shadow-sm ml-2'><img src="/src/assets/appStore.png" alt="" />App Store</button>
            <div className='flex justify-center items-center'>
                <img className='w-[600px]' src="/src/assets/hero.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;