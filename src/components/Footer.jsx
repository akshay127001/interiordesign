
import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <span className="font-bold text-2xl tracking-tight block mb-4">
                            Home Interior <span className="text-blue-400">Designs</span>
                        </span>
                        <p className="text-gray-400 text-sm">
                            Creating beautiful spaces that inspire and delight. Your dream home is just a consultation away.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#showcase" className="hover:text-blue-400 transition-colors">Showcase</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.instagram.com/home_interior_design" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="https://wa.me/919995052890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                                <Phone size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Home Interior Designs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
