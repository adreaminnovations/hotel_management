import React, { useState } from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useHotel } from '../../context/HotelContext';
import { useToast } from '../../context/ToastContext';

const Cart = () => {
    const { cart, removeFromCart, placeOrder } = useHotel();
    const { showToast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [roomNumber, setRoomNumber] = useState('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleOrder = () => {
        if (!roomNumber) {
            showToast('Please enter your room number.', 'error');
            return;
        }
        if (!/^\d{3}$/.test(roomNumber)) {
            showToast('Please enter a valid 3-digit room number.', 'error');
            return;
        }
        placeOrder({ roomNumber });
        showToast('Order placed successfully! It will be delivered to your room shortly.', 'success');
        setIsOpen(false);
        setRoomNumber('');
    };

    if (cart.length === 0 && !isOpen) {
        return null;
    }

    return (
        <>
            {/* Floating Cart Button */}
            {!isOpen && cart.length > 0 && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-8 bg-secondary text-primary p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-40 animate-bounce"
                >
                    <div className="relative">
                        <ShoppingBag size={24} />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.length}
                        </span>
                    </div>
                </button>
            )}

            {/* Cart Sidebar */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

                    <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slideInRight">
                        <div className="bg-primary p-4 flex justify-between items-center text-white">
                            <div className="flex items-center space-x-2">
                                <ShoppingBag size={20} />
                                <h3 className="text-xl font-serif font-bold">Your Order</h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-primary-light rounded-full p-1 transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 space-y-4">
                            {cart.length === 0 ? (
                                <div className="text-center text-gray-500 mt-10">
                                    <p>Your cart is empty.</p>
                                    <button onClick={() => setIsOpen(false)} className="mt-4 text-secondary hover:underline">
                                        Browse Menu
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.cartId} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                                        <div className="flex items-center space-x-3">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                                            <div>
                                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                                <p className="text-sm text-gray-500">${item.price}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.cartId)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-4 border-t border-gray-200 bg-gray-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-medium text-gray-700">Total:</span>
                                    <span className="text-2xl font-bold text-primary">${total}</span>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Room Number</label>
                                    <input
                                        type="text"
                                        value={roomNumber}
                                        onChange={(e) => setRoomNumber(e.target.value)}
                                        placeholder="e.g. 101"
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-primary focus:border-primary"
                                    />
                                </div>

                                <button
                                    onClick={handleOrder}
                                    className="w-full bg-secondary text-primary font-bold py-3 rounded-md hover:bg-yellow-600 transition-colors shadow-md"
                                >
                                    Place Order
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
