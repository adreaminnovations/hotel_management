import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hotel, Utensils, BedDouble, Sparkles, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/', icon: <Hotel size={20} /> },
        { name: 'Rooms', path: '/rooms', icon: <BedDouble size={20} /> },
        { name: 'Restaurant', path: '/restaurant', icon: <Utensils size={20} /> },
        { name: 'Services', path: '/services', icon: <Sparkles size={20} /> },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <Hotel size={32} className="text-secondary" />
                            <span className="font-serif text-2xl font-bold tracking-wider">LUXE STAY</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${isActive(item.path)
                                        ? 'bg-primary-dark text-secondary'
                                        : 'hover:bg-primary-light hover:text-secondary'
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                            <Link
                                to="/admin"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${isActive('/admin') || isActive('/login')
                                    ? 'bg-primary-dark text-secondary'
                                    : 'hover:bg-primary-light hover:text-secondary'
                                    }`}
                            >
                                <LayoutDashboard size={20} />
                                <span>Admin</span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-primary-dark">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${isActive(item.path)
                                    ? 'bg-gray-900 text-secondary'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                        <Link
                            to="/admin"
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${isActive('/admin') || isActive('/login')
                                ? 'bg-gray-900 text-secondary'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            <LayoutDashboard size={20} />
                            <span>Admin</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
