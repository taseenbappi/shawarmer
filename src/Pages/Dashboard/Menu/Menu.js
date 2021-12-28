import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Menu = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="shadow bg-base-200 drawer h-52">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col drawer-content">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <span>
                            Dashboard
                        </span>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu horizontal">
                            <li>
                                <Link className="rounded-btn" to='/home'>Home</Link>
                            </li>
                            <li>
                                <Link className="rounded-btn" to='/dashboard/addCatagory'>Add Catagory</Link>
                            </li>
                            <li>
                                <Link className="rounded-btn" to='/dashboard/addSubCatagory'>Add Sub Catagory</Link>
                            </li>
                            <li>
                                <Link className="rounded-btn" to='/dashboard/addArticle'>Add Article</Link>
                            </li>
                            <li>
                                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={logOut}>Logout
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 ">
                    <li className="menu-title">
                        <span>
                            Menu
                        </span>
                    </li>
                    <li>
                        <Link className="rounded-btn" to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link className="rounded-btn" to='/dashboard/addCatagory'>Add Catagory</Link>
                    </li>
                    <li>
                        <Link className="rounded-btn" to='/dashboard/addSubCatagory'>Add Sub Catagory</Link>
                    </li>
                    <li>
                        <Link className="rounded-btn" to='/dashboard/addArticle'>Add Article</Link>
                    </li>
                    <li>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={logOut}>Logout
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;