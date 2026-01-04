import React, { useState } from 'react';
import { useHotel } from '../context/HotelContext';
import { useNavigate } from 'react-router-dom';
import { Calendar, Utensils, LogOut } from 'lucide-react';

const Admin = () => {
    const { bookings, orders, logout } = useHotel();
    const [activeTab, setActiveTab] = useState('bookings');
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const StatsCard = ({ title, value, icon: Icon, color }) => (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className={`p-3 rounded-full ${color}`}>
                <Icon size={24} className="text-white" />
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
        </div>
    );

    const BookingCard = ({ booking }) => (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="font-bold text-gray-900">{booking.name}</h3>
                    <p className="text-sm text-gray-500">{booking.email}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {booking.status}
                </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{booking.checkIn} - {booking.checkOut}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-medium">Room:</span>
                    <span>{booking.roomName}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100 mt-2">
                    <span className="font-medium">Total:</span>
                    <span className="text-lg font-bold text-primary">${booking.totalPrice}</span>
                </div>
            </div>
        </div>
    );

    const OrderCard = ({ order }) => (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="font-bold text-gray-900">Room {order.roomNumber}</h3>
                    <p className="text-xs text-gray-500">{new Date(order.date).toLocaleString()}</p>
                </div>
                <span className="px-2 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-800">
                    {order.status}
                </span>
            </div>
            <div className="space-y-2">
                <ul className="text-sm text-gray-600 list-disc list-inside">
                    {order.items.map((item, idx) => (
                        <li key={idx}>{item.name}</li>
                    ))}
                </ul>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100 mt-2">
                    <span className="font-medium">Total:</span>
                    <span className="text-lg font-bold text-primary">${order.total}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                    <h1 className="text-2xl font-serif font-bold text-primary">Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatsCard
                        title="Total Bookings"
                        value={bookings.length}
                        icon={Calendar}
                        color="bg-blue-500"
                    />
                    <StatsCard
                        title="Total Orders"
                        value={orders.length}
                        icon={Utensils}
                        color="bg-orange-500"
                    />
                    <StatsCard
                        title="Revenue (Rooms)"
                        value={`$${bookings.reduce((sum, b) => sum + b.totalPrice, 0)}`}
                        icon={Calendar}
                        color="bg-green-500"
                    />
                    <StatsCard
                        title="Revenue (Dining)"
                        value={`$${orders.reduce((sum, o) => sum + o.total, 0)}`}
                        icon={Utensils}
                        color="bg-purple-500"
                    />
                </div>

                {/* Tabs */}
                <div className="flex space-x-4 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`pb-4 px-4 font-medium transition-colors relative ${activeTab === 'bookings' ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <div className="flex items-center space-x-2">
                            <Calendar size={18} />
                            <span>Bookings</span>
                        </div>
                        {activeTab === 'bookings' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`pb-4 px-4 font-medium transition-colors relative ${activeTab === 'orders' ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <div className="flex items-center space-x-2">
                            <Utensils size={18} />
                            <span>Orders</span>
                        </div>
                        {activeTab === 'orders' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                        )}
                    </button>
                </div>

                {/* Content */}
                <div>
                    {activeTab === 'bookings' && (
                        <>
                            {/* Mobile View */}
                            <div className="md:hidden">
                                {bookings.length === 0 ? (
                                    <p className="text-center text-gray-500 py-8">No bookings yet.</p>
                                ) : (
                                    bookings.map(booking => <BookingCard key={booking.id} booking={booking} />)
                                )}
                            </div>

                            {/* Desktop View */}
                            <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                {bookings.length === 0 ? (
                                    <div className="text-center text-gray-500 py-12">No bookings found.</div>
                                ) : (
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 border-b border-gray-100">
                                            <tr>
                                                <th className="p-4 font-medium text-gray-500">Guest</th>
                                                <th className="p-4 font-medium text-gray-500">Room</th>
                                                <th className="p-4 font-medium text-gray-500">Dates</th>
                                                <th className="p-4 font-medium text-gray-500">Total</th>
                                                <th className="p-4 font-medium text-gray-500">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {bookings.map((booking) => (
                                                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="p-4">
                                                        <div className="font-medium text-gray-900">{booking.name}</div>
                                                        <div className="text-sm text-gray-500">{booking.email}</div>
                                                    </td>
                                                    <td className="p-4 text-gray-700">{booking.roomName}</td>
                                                    <td className="p-4 text-gray-700 text-sm">
                                                        {booking.checkIn} - {booking.checkOut}
                                                    </td>
                                                    <td className="p-4 font-bold text-primary">${booking.totalPrice}</td>
                                                    <td className="p-4">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                                            }`}>
                                                            {booking.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </>
                    )}

                    {activeTab === 'orders' && (
                        <>
                            {/* Mobile View */}
                            <div className="md:hidden">
                                {orders.length === 0 ? (
                                    <p className="text-center text-gray-500 py-8">No orders yet.</p>
                                ) : (
                                    orders.map(order => <OrderCard key={order.id} order={order} />)
                                )}
                            </div>

                            {/* Desktop View */}
                            <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                {orders.length === 0 ? (
                                    <div className="text-center text-gray-500 py-12">No orders found.</div>
                                ) : (
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 border-b border-gray-100">
                                            <tr>
                                                <th className="p-4 font-medium text-gray-500">Room</th>
                                                <th className="p-4 font-medium text-gray-500">Items</th>
                                                <th className="p-4 font-medium text-gray-500">Time</th>
                                                <th className="p-4 font-medium text-gray-500">Total</th>
                                                <th className="p-4 font-medium text-gray-500">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {orders.map((order) => (
                                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="p-4 font-medium text-gray-900">Room {order.roomNumber}</td>
                                                    <td className="p-4 text-gray-700">
                                                        <ul className="list-disc list-inside text-sm">
                                                            {order.items.map((item, idx) => (
                                                                <li key={idx}>{item.name}</li>
                                                            ))}
                                                        </ul>
                                                    </td>
                                                    <td className="p-4 text-sm text-gray-500">
                                                        {new Date(order.date).toLocaleString()}
                                                    </td>
                                                    <td className="p-4 font-bold text-primary">${order.total}</td>
                                                    <td className="p-4">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
