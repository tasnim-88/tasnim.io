import React from 'react';
import logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <div>
            <footer className="bg-[#001931] text-white mt-20 p-10">
                <div className='max-w-[1200px] mx-auto md:flex justify-between mt-10 pb-5 border-b-2'>

                    <aside className='space-y-2'>
                        <div className='flex items-center'>
                            <img className='h-[40px] w-[40px]' src={logo} alt="" />
                            <h1 className='text-xl font-bold'>Tasnim.io</h1>
                        </div>
                        <p className='w-[200px]'>
                            At Tasnim.io, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                    </aside>
                    <nav className='mt-6 md:mt-0'>
                        <h6 className="footer-title">Comapany</h6>
                        <ul className='space-y-2.5'>
                            <li><a className="link link-hover">About Us</a></li>
                            <li><a className="link link-hover">Our Mission</a></li>
                            <li><a className="link link-hover">Contact Sales</a></li>
                        </ul>
                    </nav>
                    <nav className='mt-6 md:mt-0'>
                        <h6 className="footer-title">Services</h6>
                        <ul className='space-y-2.5'>
                            <li><a className="link link-hover">Products & Services</a></li>
                            <li><a className="link link-hover">Customer Stories</a></li>
                            <li><a className="link link-hover">Download Apps</a></li>
                        </ul>
                    </nav>
                    <nav className='mt-6 md:mt-0'>
                        <h6 className="footer-title">Information</h6>
                        <ul className='space-y-2.5'>
                            <li><a className="link link-hover">Privacy Policy</a></li>
                            <li><a className="link link-hover">Terms & Conditions</a></li>
                            <li><a className="link link-hover">Join Us</a></li>
                        </ul>
                    </nav>
                    <nav className='mt-6 md:mt-0'>
                        <h6 className="footer-title">Social Links</h6>
                        <ul className='space-y-2.5'>
                            <li><a className="link link-hover"><i className="fa-brands fa-x-twitter"></i>Twitter</a></li>
                            <li><a className="link link-hover"><i className="fa-brands fa-linkedin"></i>LinkedIn</a></li>
                            <li><a className="link link-hover"><i className="fa-brands fa-facebook"></i>Facebook</a></li>
                            <li><a className="link link-hover"><i className="fa-regular fa-envelope"></i>Gmail</a></li>
                        </ul>
                    </nav>
                </div>
                <footer className="footer sm:footer-horizontal footer-center mt-5 p-4">
                    <aside>
                        <p>© {new Date().getFullYear()} Tasnim.io All right reserved</p>
                    </aside>
                </footer>
            </footer>
        </div>
    );
};

export default Footer;