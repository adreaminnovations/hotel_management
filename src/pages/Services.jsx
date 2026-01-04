import React from 'react';
import ServiceCard from '../components/features/ServiceCard';
import servicesData from '../data/services.json';

const Services = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold text-primary mb-4">Our Services</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We go above and beyond to ensure your stay is nothing short of perfection.
                        Explore the premium amenities and services available to our guests.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
