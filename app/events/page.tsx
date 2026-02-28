'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Search, SlidersHorizontal, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { events } from '@/lib/mockData';

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Featured Events Hero */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="announcement-font text-vibrant-purple text-sm mb-2 block">Official Announcements</span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">Upcoming Events & Workshops</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors">
                                <SlidersHorizontal size={18} />
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden group shadow-xl"
                        >
                            <img src={events[0].image} alt={events[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
                            <div className="absolute bottom-0 left-0 p-10 text-white">
                                <span className="announcement-font bg-hot-pink text-[10px] px-3 py-1 rounded-full mb-4 inline-block tracking-tighter">Featured Event</span>
                                <h2 className="text-4xl font-extrabold mb-4 announcement-font">{events[0].title}</h2>
                                <div className="flex flex-wrap gap-6 mb-8 opacity-90 announcement-font text-sm">
                                    <span className="flex items-center"><Calendar size={18} className="mr-2" /> {events[0].date}</span>
                                    <span className="flex items-center"><MapPin size={18} className="mr-2" /> {events[0].city}</span>
                                </div>
                                <button className="px-8 py-4 bg-white text-[#0F172A] rounded-full font-bold shadow-lg hover:bg-vibrant-purple hover:text-white transition-all flex items-center group/btn">
                                    <span>Get Details</span>
                                    <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>

                        <div className="bg-vibrant-purple rounded-3xl p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Calendar size={150} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold mb-6 announcement-font">Submit Your Event</h3>
                                <p className="text-lg opacity-80 leading-relaxed announcement-font">Are you hosting a creative workshop or pop-up shop? List it on LoomLilly for free.</p>
                            </div>
                            <button className="w-full py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 rounded-full font-bold text-lg transition-all announcement-font">
                                Register Event
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {events.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-3 right-3 flex gap-2">
                                        <button className="p-2 bg-white/90 backdrop-blur rounded-full shadow-sm text-slate-400 hover:text-vibrant-purple transition-colors">
                                            <Share2 size={16} />
                                        </button>
                                        <button className="p-2 bg-white/90 backdrop-blur rounded-full shadow-sm text-slate-400 hover:text-hot-pink transition-colors">
                                            <Bookmark size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <span className="announcement-font text-[10px] text-vibrant-purple mb-2 block">{event.type}</span>
                                    <h3 className="announcement-font text-xl text-[#0F172A] mb-6 leading-tight flex-1">{event.title}</h3>

                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center text-sm text-slate-500 announcement-font">
                                            <Calendar size={16} className="text-slate-300 mr-3" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-500 announcement-font">
                                            <MapPin size={16} className="text-slate-300 mr-3" />
                                            <span>{event.city}, Pakistan</span>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 bg-slate-50 text-slate-800 border border-slate-200 rounded-xl font-bold text-sm hover:bg-vibrant-purple hover:text-white hover:border-vibrant-purple transition-all announcement-font">
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
