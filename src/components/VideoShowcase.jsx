
import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
    return (
        <section id="showcase" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        See Our Work in <span className="text-blue-600">Action</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-xl text-gray-600"
                    >
                        Experience the transformation of spaces through our lens.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
                >
                    {/* 
            TODO: Replace the source below with the actual video file provided by the user.
            For now, using a placeholder or we can use a local file if uploaded.
          */}
                    <iframe
                        src="https://drive.google.com/file/d/1P_iNaxuQtpPycncpQwt7YjErPwK94s5Q/preview"
                        width="100%"
                        height="100%"
                        className="w-full h-full object-cover"
                        allow="autoplay"
                    ></iframe>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                            {/* Play icon or overlay if needed, but native controls are fine */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoShowcase;
