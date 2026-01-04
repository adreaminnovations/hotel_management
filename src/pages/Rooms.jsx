import React, { useState } from 'react';
import RoomCard from '../components/features/RoomCard';
import BookingModal from '../components/features/BookingModal';
import roomsData from '../data/rooms.json';

const Rooms = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-primary mb-4">Our Accommodations</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from our selection of luxury rooms and suites, each designed to provide the ultimate comfort and relaxation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roomsData.map((room) => (
                        <div key={room.id} onClick={(e) => {
                            // Prevent opening modal if clicking on "View Details" link which might go to a separate page if I had one
                            // But here RoomCard has a Link to /rooms, which is this page.
                            // I should modify RoomCard to accept an onBook prop or handle the click.
                            // Actually, RoomCard has a Link to /rooms. I should change it to a button "Book Now" if I want to open modal.
                            // Or I can just wrap RoomCard in a div that handles click? No, the button inside RoomCard is a Link.
                            // I will modify RoomCard to accept `onBook` prop.
                        }}>
                            {/* 
                I need to modify RoomCard to support "Book Now" action. 
                I'll pass onBook to RoomCard.
              */}
                            <RoomCard room={room} onBook={() => setSelectedRoom(room)} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedRoom && (
                <BookingModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
            )}
        </div>
    );
};

export default Rooms;
