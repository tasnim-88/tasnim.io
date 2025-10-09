import React from 'react';
import google from '../../assets/googlePlay.png'
import apple from '../../assets/appStore.png'
import banner from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='text-center mt-20 space-y-4'>
            <h1 className='text-5xl font-bold'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='text-[#627382]'>
                At Tasnim.io, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <a href='https://play.google.com/store/apps' target="_blank" className='btn shadow-sm'><img src={google} alt="" />Google Play</a>
            <a href='https://www.apple.com/app-store/' target="_blank" className='btn shadow-sm ml-2'><img src={apple} alt="" />App Store</a>
            <div className='flex justify-center items-center'>
                <img className='w-[600px]' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;