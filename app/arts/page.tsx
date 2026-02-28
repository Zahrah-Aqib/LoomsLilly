'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { artsProducts } from '@/lib/mockData';

export default function ArtsPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Paintings', 'Drawings', 'Sketches', 'Digital Art', 'Abstract'];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 px-4 bg-pastel-pink/30">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-vibrant-purple mb-6">Arts Section</h1>
                        <p className="text-lg text-slate-600 font-medium">
                            Discover unique paintings, sketches, and digital art from Pakistan's most talented artists.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Toolbar */}
            <section className="py-8 px-4 sticky top-[72px] z-40 bg-background/80 backdrop-blur-md border-b border-pastel-pink">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Filters */}
                    <div className="flex space-x-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeFilter === filter
                                        ? 'bg-vibrant-purple text-white shadow-md'
                                        : 'bg-white text-vibrant-purple border border-pastel-pink hover:bg-pastel-pink'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Search & Sort */}
                    <div className="flex items-center space-x-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <input
                                type="text"
                                placeholder="Search art..."
                                className="w-full bg-white border border-pastel-pink rounded-full py-2 px-10 text-sm focus:ring-2 focus:ring-vibrant-purple outline-none"
                            />
                            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                        </div>
                        <button className="p-3 bg-white border border-pastel-pink rounded-full text-vibrant-purple hover:bg-pastel-pink transition-colors">
                            <SlidersHorizontal size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {artsProducts.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-20 text-center">
                        <button className="px-12 py-4 bg-white text-vibrant-purple border-2 border-vibrant-purple rounded-full font-extrabold text-lg hover:bg-pastel-pink transition-colors">
                            Load More Masterpieces
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
