import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Dashboard = () => {
    return (
        <>

            <Menu></Menu>

            <Outlet />

        </>
    );
};

export default Dashboard;