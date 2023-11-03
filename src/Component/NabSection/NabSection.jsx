import React from 'react';
import { Link } from 'react-router-dom';

const NabSection = () => {
    return (
        <div className=''>
            <div className="navbar fixed z-50 top-0 bg-base-100  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-xl font-serif dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/book">Book</Link></li>
                            <li><Link to="/featured">Featured Books</Link></li>
                            <li><Link to="/newsection">New Releases</Link></li>
                            <li><Link to="/author">Author</Link></li>
                            <li><Link to="/contact">Contact</Link></li>


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-serif">Bookshop</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-serif">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/book">Book</Link></li>
                        <li><Link to="/featured">Featured Books</Link></li>
                        <li><Link to="/newsection">New Releases</Link></li>
                        <li><Link to="/author">Author</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NabSection;