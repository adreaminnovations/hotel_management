import React, { useState } from 'react';
import MenuCard from '../components/features/MenuCard';
import Cart from '../components/features/Cart';
import { useHotel } from '../context/HotelContext';
import menuData from '../data/menu.json';

const Restaurant = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const { addToCart } = useHotel();

    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Drinks'];

    const filteredMenu = activeCategory === 'All'
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen py-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-primary mb-4">Fine Dining</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Indulge in a culinary journey with our exquisite menu, featuring locally sourced ingredients and international flavors.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-primary text-white shadow-md transform scale-105'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredMenu.map((item) => (
                        <MenuCard key={item.id} item={item} onAdd={addToCart} />
                    ))}
                </div>
            </div>

            <Cart />
        </div>
    );
};

export default Restaurant;
