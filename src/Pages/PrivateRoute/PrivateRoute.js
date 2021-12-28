import React from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();

    let location = useLocation();

    if (isLoading) {
        return <button className="btn btn-sm btn-ghost loading">loading</button>
    }

    if (user.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;