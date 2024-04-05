import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLInks = <>
        <Link to="/">News</Link>
        <Link to="/">Destination</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>

    </>

    return (
        <div className="navbar text-base flex justify-between lg:px-24">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLInks}
                    </ul>
                </div>
                <Link to="/" className="w-28">
                    <img src="/logo.png" alt="" />
                </Link>
            </div>

            <div className=" text-white  lg:gap-12">
                <label className="input rounded-lg border border-white text-white bg-[#FFFFFF33] flex items-center gap-2">
                    <input type="text" className="grow " placeholder="Search your Destination..." />

                </label>
                <ul className="menu menu-horizontal  lg:gap-12 px-1">
                    {navLInks}
                </ul>
                <Link className="btn px-7 border-none rounded-lg bg-[#F9A51A] text-black">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;