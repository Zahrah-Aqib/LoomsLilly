'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { Play, Clock, BarChart, GraduationCap, Search, SlidersHorizontal, CheckCircle } from 'lucide-react';
import { tutorials } from '@/lib/mockData';
import Link from 'next/link';

export default function TutorialsHub() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 bg-teal/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-5">
                    <GraduationCap size={400} />
                </div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="bg-teal text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                            Learn from the Best
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-vibrant-purple mb-8">Master Your Craft</h1>
                        <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed">
                            Step-by-step video tutorials from Pakistan's most experienced artists and crafters. Start your creative journey today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1 max-w-md">
                                <input
                                    type="text"
                                    placeholder="What do you want to learn?"
                                    className="w-full bg-white border border-teal/20 rounded-full py-4 px-12 text-sm focus:ring-2 focus:ring-teal outline-none shadow-xl"
                                />
                                <Search className="absolute left-4 top-4 text-slate-400" size={20} />
                            </div>
                            <button className="px-10 py-4 bg-teal text-white rounded-full font-bold shadow-lg hover:bg-teal/90 transition-all">
                                Explore Courses
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Toolbar */}
            <section className="py-8 border-b border-teal/10 bg-white/50 backdrop-blur-md sticky top-[72px] z-40">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-8">
                        {['All Courses', 'Crochet', 'Painting', 'Embroidery', 'Pottery'].map((cat, idx) => (
                            <button key={cat} className={`text-sm font-bold ${idx === 0 ? 'text-teal border-b-2 border-teal' : 'text-slate-400 hover:text-teal'} pb-2 transition-all`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center text-slate-400 space-x-2 cursor-pointer hover:text-teal transition-colors">
                        <SlidersHorizontal size={18} />
                        <span className="text-sm font-bold">Filters</span>
                    </div>
                </div>
            </section>

            {/* Tutorial Grid */}
            <section className="py-24 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {tutorials.map((tut, idx) => (
                            <motion.div
                                key={tut.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-soft-purple border border-teal/10 group cursor-pointer"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img src={tut.thumbnail} alt={tut.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-teal shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <Play size={28} fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-teal text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {tut.level}
                                        </span>
                                        <span className="bg-white/90 text-vibrant-purple px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {tut.price}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-body mb-4 group-hover:text-teal transition-colors line-clamp-2">{tut.title}</h3>
                                    <div className="flex items-center space-x-3 mb-6">
                                        <img src={`https://i.pravatar.cc/100?u=${tut.seller}`} className="w-8 h-8 rounded-full" />
                                        <span className="text-sm font-medium text-slate-500">{tut.seller}</span>
                                        <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                        <div className="flex items-center text-teal">
                                            <CheckCircle size={14} className="mr-1" />
                                            <span className="text-[10px] font-bold uppercase">Master</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                        <div className="flex items-center text-slate-400 space-x-4">
                                            <span className="flex items-center text-xs font-bold"><Clock size={14} className="mr-1" /> {tut.duration}</span>
                                            <span className="flex items-center text-xs font-bold"><BarChart size={14} className="mr-1" /> All Levels</span>
                                        </div>
                                        <Link href={`/tutorials/${tut.id}`} className="p-3 bg-pastel-pink text-vibrant-purple rounded-xl hover:bg-vibrant-purple hover:text-white transition-all shadow-sm">
                                            <Play size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination/Load more placeholder */}
                    <div className="mt-20 flex justify-center">
                        <button className="px-10 py-4 border-2 border-teal text-teal rounded-full font-extrabold hover:bg-teal hover:text-white transition-all">
                            See More Tutorials
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
