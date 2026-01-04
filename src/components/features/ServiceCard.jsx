import React from 'react';
import * as Icons from 'lucide-react';

const ServiceCard = ({ service }) => {
    const IconComponent = Icons[service.icon] || Icons.HelpCircle;

    return (
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <IconComponent size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{service.name}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
    );
};

export default ServiceCard;
