import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Utensils, Sparkles } from 'lucide-react';
import RoomCard from '../components/features/RoomCard';
import roomsData from '../data/rooms.json';

const Home = () => {
    const featuredRooms = roomsData.slice(0, 3);

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
                        alt="Luxury Hotel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-secondary animate-slideUp drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
                        Experience Luxury <br /> Like Never Before
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light animate-slideUp" style={{ animationDelay: '0.3s' }}>
                        Your sanctuary of elegance and tranquility in the heart of paradise.
                    </p>
                    <Link
                        to="/rooms"
                        className="inline-block bg-secondary text-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-white transition-colors duration-300 shadow-lg animate-slideUp"
                        style={{ animationDelay: '0.5s' }}
                    >
                        Book Your Stay
                    </Link>
                </div>
            </section>

            {/* Overview Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Welcome to Luxe Stay</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover a world of refined luxury, where every detail is crafted for your comfort.
                        From our exquisite dining to our world-class spa, we offer an unforgettable escape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="inline-block p-4 bg-primary/5 rounded-full mb-6">
                            <Star size={32} className="text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Luxury Rooms</h3>
                        <p className="text-gray-600 mb-6">
                            Elegant accommodations with breathtaking views and premium amenities.
                        </p>
                        <Link to="/rooms" className="text-secondary font-medium hover:text-primary transition-colors flex items-center justify-center space-x-1">
                            <span>View Rooms</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="inline-block p-4 bg-primary/5 rounded-full mb-6">
                            <Utensils size={32} className="text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Fine Dining</h3>
                        <p className="text-gray-600 mb-6">
                            Savor culinary masterpieces crafted by our award-winning chefs.
                        </p>
                        <Link to="/restaurant" className="text-secondary font-medium hover:text-primary transition-colors flex items-center justify-center space-x-1">
                            <span>View Menu</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="inline-block p-4 bg-primary/5 rounded-full mb-6">
                            <Sparkles size={32} className="text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Wellness & Spa</h3>
                        <p className="text-gray-600 mb-6">
                            Rejuvenate your body and soul with our exclusive spa treatments.
                        </p>
                        <Link to="/services" className="text-secondary font-medium hover:text-primary transition-colors flex items-center justify-center space-x-1">
                            <span>Explore Services</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Rooms */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Featured Accommodations</h2>
                            <div className="w-24 h-1 bg-secondary" />
                        </div>
                        <Link to="/rooms" className="hidden md:flex items-center space-x-2 text-primary font-medium hover:text-secondary transition-colors">
                            <span>View All Rooms</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredRooms.map((room) => (
                            <RoomCard key={room.id} room={room} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/rooms" className="inline-flex items-center space-x-2 text-primary font-medium hover:text-secondary transition-colors">
                            <span>View All Rooms</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
