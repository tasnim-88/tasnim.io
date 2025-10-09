import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { NavLink } from 'react-router'; 
import logo from '../../assets/logo.png';

const Navbar = () => {

    const activeClass =
        "m-2 font-semibold link link-hover text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]";
    const normalClass =
        "m-2 font-semibold link link-hover text-gray-600 hover:text-[#632EE3] transition-colors";

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeClass : normalClass)}
            >
                Home
            </NavLink>
            <NavLink
                to="/allCards"
                className={({ isActive }) => (isActive ? activeClass : normalClass)}
            >
                Apps
            </NavLink>
            <NavLink
                to="/installed"
                className={({ isActive }) => (isActive ? activeClass : normalClass)}
            >
                Installation
            </NavLink>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>

                
                <NavLink to="/" className="flex justify-center items-center">
                    <img className="h-[40px] w-[40px]" src={logo} alt="logo.png" />
                    <h1
                        className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-2xl ml-1"
                        style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Tasnim.io
                    </h1>
                </NavLink>
            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            
            <div className="navbar-end gap-2">
                <a
                    href="https://github.com/tasnim-88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-1"
                >
                    <DiGithubBadge className="h-[25px] w-[25px]" />
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;
