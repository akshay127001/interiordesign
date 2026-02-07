
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Get in Touch with <span className="text-blue-600">Home Interior Design</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Check out our latest works on Instagram or contact us directly via WhatsApp for a consultation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-2xl mx-auto">
                            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-4">
                                    <Phone size={24} />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                                <a href="tel:+919995052890" className="text-gray-600 hover:text-blue-600">
                                    +91 999 505 2890
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-4">
                                    <Instagram size={24} />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
                                <a
                                    href="https://www.instagram.com/home_interior_design"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    @home_interior_design
                                </a>
                            </div>

                            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-4">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                                <p className="text-gray-600">
                                    Kerala, India
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="https://wa.me/919995052890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold leading-6 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 gap-2"
                            >
                                <Phone size={20} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
