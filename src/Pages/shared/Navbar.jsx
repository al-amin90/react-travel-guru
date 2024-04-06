import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()
    const defBlack = location.pathname;

    const navLInks = <>
        <Link to="/">News</Link>
        <Link to="/placeDetails">Destination</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>

    </>

    return (
        <div className="navbar pt-8 text-base flex justify-between px-4 lg:px-24">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLInks}
                    </ul>
                </div>
                <Link to="/" >
                    {
                        defBlack === "/" ?
                            <img src="/logo.png" alt="" />
                            : <img src="/logob.png" alt="" />
                    }
                </Link>
            </div>

            <div className="lg:gap-12">
                {
                    defBlack === "/" ? <label className="input pr-24 rounded-lg border border-white  bg-[#FFFFFF33] flex items-center gap-2">
                        <CiSearch />
                        <input type="text" className="grow placeholder:text-white" placeholder="Search your Destination..." />
                    </label> : ""
                }
                <ul className="menu menu-horizontal  lg:gap-12 px-1">
                    {navLInks}
                </ul>
                <Link to="/login" className="btn px-7 border-none rounded-lg bg-[#F9A51A] text-black">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;