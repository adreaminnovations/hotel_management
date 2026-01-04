import React, { createContext, useContext, useState, useEffect } from 'react';

const HotelContext = createContext();

export const useHotel = () => {
    return useContext(HotelContext);
};

export const HotelProvider = ({ children }) => {
    const [bookings, setBookings] = useState(() => {
        const saved = localStorage.getItem('hotel_bookings');
        return saved ? JSON.parse(saved) : [];
    });

    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('hotel_cart');
        return saved ? JSON.parse(saved) : [];
    });

    const [orders, setOrders] = useState(() => {
        const saved = localStorage.getItem('hotel_orders');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('hotel_bookings', JSON.stringify(bookings));
    }, [bookings]);

    useEffect(() => {
        localStorage.setItem('hotel_cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('hotel_orders', JSON.stringify(orders));
    }, [orders]);

    const addBooking = (booking) => {
        setBookings([...bookings, { ...booking, id: Date.now(), status: 'Confirmed' }]);
    };

    const addToCart = (item) => {
        setCart([...cart, { ...item, cartId: Date.now() }]);
    };

    const removeFromCart = (cartId) => {
        setCart(cart.filter(item => item.cartId !== cartId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const placeOrder = (customerDetails) => {
        const newOrder = {
            id: Date.now(),
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price, 0),
            date: new Date().toISOString(),
            status: 'Pending',
            ...customerDetails
        };
        setOrders([...orders, newOrder]);
        clearCart();
    };

    const clearAllData = () => {
        setBookings([]);
        setCart([]);
        setOrders([]);
        localStorage.removeItem('hotel_bookings');
        localStorage.removeItem('hotel_cart');
        localStorage.removeItem('hotel_orders');
    };

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('hotel_is_authenticated') === 'true';
    });

    const login = (email, password) => {
        // Mock authentication
        if (email === 'admin@luxestay.com' && password === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('hotel_is_authenticated', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('hotel_is_authenticated');
    };

    return (
        <HotelContext.Provider value={{
            bookings,
            addBooking,
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            orders,
            placeOrder,
            clearAllData,
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </HotelContext.Provider>
    );
};
