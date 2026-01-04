import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-secondary mb-4">LUXE STAY</h3>
                        <p className="text-gray-400 mb-4">
                            Experience the epitome of luxury and comfort. Your perfect getaway awaits.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-400">
                                <MapPin size={16} />
                                <span>123 Luxury Ave, Paradise City</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <Phone size={16} />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <Mail size={16} />
                                <span>info@luxestay.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to receive special offers and updates.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-secondary w-full"
                            />
                            <button className="bg-secondary text-primary px-4 py-2 rounded-r-md hover:bg-yellow-600 transition-colors font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Luxe Stay Hotel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
