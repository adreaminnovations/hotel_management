import React from 'react';
import { Navigate } from 'react-router-dom';
import { useHotel } from '../../context/HotelContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useHotel();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
