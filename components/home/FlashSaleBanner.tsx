'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlipUnit = ({ value, label }: { value: number; label: string }) => {
    const [current, setCurrent] = useState(value);
    const [prev, setPrev] = useState(value);

    useEffect(() => {
        if (value !== current) {
            setPrev(current);
            setCurrent(value);
        }
    }, [value, current]);

    const padValue = (val: number) => val.toString().padStart(2, '0');

    return (
        <div className="flex flex-col items-center mx-2">
            <div className="relative w-16 h-20 md:w-20 md:h-24 bg-white rounded-lg shadow-xl perspective-1000">
                {/* Top half */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-extrabold text-coral-red overflow-hidden">
                    {padValue(current)}
                </div>

                {/* Divider */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-coral-red/10 z-10" />
            </div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest mt-3 text-white/80">
                {label}
            </span>
        </div>
    );
};

export default function FlashSaleBanner() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 12,
        minutes: 45,
        seconds: 30
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-coral-red relative overflow-hidden py-12 px-4">
            {/* Decorative patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-32 h-32 border-[20px] border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-48 h-48 border-[20px] border-white rounded-full translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="announcement-font text-white bg-white/20 px-6 py-2 rounded-full mb-4 inline-block">
                        Flash Sale Ending Soon
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-4 drop-shadow-md">
                        Up to 60% OFF
                    </h2>
                </motion.div>

                <div className="flex items-center mb-10">
                    <FlipUnit value={timeLeft.hours} label="Hours" />
                    <div className="text-3xl font-bold text-white mb-6">:</div>
                    <FlipUnit value={timeLeft.minutes} label="Minutes" />
                    <div className="text-3xl font-bold text-white mb-6">:</div>
                    <FlipUnit value={timeLeft.seconds} label="Seconds" />
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-coral-red px-10 py-4 rounded-full font-extrabold text-lg shadow-2xl hover:bg-slate-50 transition-colors"
                >
                    Shop the Sale Now
                </motion.button>
            </div>
        </div>
    );
}
