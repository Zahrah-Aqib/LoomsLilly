'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-[#F5F0FF] flex flex-col items-center justify-center">
            <div className="relative w-64 h-32 flex items-center justify-center">
                {/* Simplified "Unrolling Yarn" Animation with Framer Motion */}
                <div className="relative flex items-center">
                    {/* Yarn Ball */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 bg-[#FFC1E3] rounded-full border-4 border-white shadow-lg relative z-10"
                    >
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 border border-white/30 rounded-full"
                                style={{ transform: `rotate(${i * 30}deg) scaleX(0.8)` }}
                            />
                        ))}
                    </motion.div>

                    {/* Unrolling Thread */}
                    <div className="h-2 bg-[#FFC1E3] rounded-full overflow-hidden ml-[-2px] relative" style={{ width: '200px' }}>
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white/40"
                        />
                    </div>
                </div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-8 text-vibrant-purple font-extrabold text-xl tracking-widest uppercase"
            >
                Weaving Magic...
            </motion.p>
        </div>
    );
}
