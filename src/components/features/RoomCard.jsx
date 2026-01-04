import React from 'react';
import { Users, Maximize, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room, onBook }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-bold shadow-sm">
                    ${room.price} <span className="text-sm font-normal text-gray-600">/ night</span>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{room.name}</h3>

                <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                        <Maximize size={16} />
                        <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>Up to {room.maxGuests} Guests</span>
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{room.description}</p>

                <div className="space-y-2 mb-6">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-500">
                            <Check size={14} className="text-secondary" />
                            <span>{amenity}</span>
                        </div>
                    ))}
                </div>

                {onBook ? (
                    <button
                        onClick={() => onBook(room)}
                        className="block w-full text-center bg-primary text-white py-3 rounded-md hover:bg-primary-light transition-colors font-medium"
                    >
                        Book Now
                    </button>
                ) : (
                    <Link
                        to="/rooms"
                        className="block w-full text-center bg-primary text-white py-3 rounded-md hover:bg-primary-light transition-colors font-medium"
                    >
                        Book Now
                    </Link>
                )}
            </div>
        </div>
    );
};

export default RoomCard;
