import React, { useState } from 'react';
import { X, Calendar, Users, User, Mail } from 'lucide-react';
import { useHotel } from '../../context/HotelContext';
import { useToast } from '../../context/ToastContext';

const BookingModal = ({ room, onClose }) => {
    const { addBooking } = useHotel();
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking({
            roomId: room.id,
            roomName: room.name,
            price: room.price,
            ...formData,
            totalPrice: calculateTotal(formData.checkIn, formData.checkOut, room.price)
        });
        showToast('Booking Confirmed! Thank you for choosing Luxe Stay.', 'success');
        onClose();
    };

    const calculateTotal = (start, end, price) => {
        if (!start || !end) return 0;
        const startDate = new Date(start);
        const endDate = new Date(end);
        const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        return nights > 0 ? nights * price : 0;
    };

    const total = calculateTotal(formData.checkIn, formData.checkOut, room.price);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-fadeIn">
                <div className="bg-primary p-4 flex justify-between items-center text-white">
                    <h3 className="text-xl font-serif font-bold">Book {room.name}</h3>
                    <button onClick={onClose} className="hover:bg-primary-light rounded-full p-1 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                            <div className="relative">
                                <Calendar size={16} className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="date"
                                    name="checkIn"
                                    required
                                    className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-primary focus:border-primary"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                            <div className="relative">
                                <Calendar size={16} className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="date"
                                    name="checkOut"
                                    required
                                    className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-primary focus:border-primary"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                        <div className="relative">
                            <Users size={16} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="number"
                                name="guests"
                                min="1"
                                max={room.maxGuests}
                                value={formData.guests}
                                onChange={handleChange}
                                className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-primary focus:border-primary"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                            <User size={16} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-primary focus:border-primary"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail size={16} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-primary focus:border-primary"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md flex justify-between items-center">
                        <span className="font-medium text-gray-700">Total Price:</span>
                        <span className="text-2xl font-bold text-primary">${total}</span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-secondary text-primary font-bold py-3 rounded-md hover:bg-yellow-600 transition-colors shadow-md"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
