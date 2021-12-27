import React from 'react';
import AddArticle from '../AddArticle/AddArticle';
import AddCat from '../AddCat/AddCat';
import AddSubCat from '../AddSubCat/AddSubCat';

const Dashboard = () => {
    return (
        <>

            <div className="rounded-lg shadow bg-base-200 drawer h-52">
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
                                    <a className="rounded-btn" href='/'>Home</a>
                                </li>
                                <li>
                                    <a className="rounded-btn" href='/'>Add Catagory</a>
                                </li>
                                <li>
                                    <a className="rounded-btn" href='/'>Add Sub Catagory</a>
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
                                Menu Title
                            </span>
                        </li>
                        <li>
                            <a className="rounded-btn" href='/'>Home</a>
                        </li>
                        <li>
                            <a className="rounded-btn" href='/'>Add Catagory</a>
                        </li>
                        <li>
                            <a className="rounded-btn" href='/'>Add Sub Catagory</a>
                        </li>
                    </ul>
                </div>
            </div>
            <AddCat></AddCat>
            <AddSubCat></AddSubCat>
            <AddArticle></AddArticle>

        </>
    );
};

export default Dashboard;