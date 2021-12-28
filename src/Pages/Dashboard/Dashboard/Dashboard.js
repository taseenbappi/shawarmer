import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Dashboard = () => {
    return (
        <>

            <Menu></Menu>
            <h1 className='font-extrabold text-3xl	py-5'>Welcome to SHAWARMER</h1>
            <Outlet />

        </>
    );
};

export default Dashboard;