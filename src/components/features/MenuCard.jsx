import React from 'react';
import { Plus } from 'lucide-react';

const MenuCard = ({ item, onAdd }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-bold shadow-sm">
                    ${item.price}
                </div>
            </div>

            <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-serif font-bold text-gray-900">{item.name}</h3>
                </div>

                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>

                <button
                    onClick={() => onAdd(item)}
                    className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-primary text-primary py-2 rounded-md hover:bg-primary hover:text-white transition-colors font-medium group"
                >
                    <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    <span>Add to Order</span>
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
