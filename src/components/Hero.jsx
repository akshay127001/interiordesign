
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                    alt="Modern Interior"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                >
                    Elevate Your Living Space with
                    <span className="block text-blue-400 mt-2">Modern Design</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
                >
                    Transforming houses into dream homes with innovative interior solutions tailored to your lifestyle.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Get a Quote <ArrowRight size={20} />
                    </a>
                    <a
                        href="#showcase"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg transition-all"
                    >
                        View Our Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
