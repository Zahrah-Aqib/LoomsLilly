'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { craftsProducts } from '@/lib/mockData';

export default function CraftsPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Crochet', 'Embroidery', 'Pottery', 'Jewelry', 'Woodwork'];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 px-4 bg-teal/5">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-teal mb-6">Crafts Section</h1>
                        <p className="text-lg text-slate-600 font-medium">
                            Explore handmade treasures from crochet blankets to traditional pottery, all crafted with love.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Toolbar */}
            <section className="py-8 px-4 sticky top-[72px] z-40 bg-background/80 backdrop-blur-md border-b border-teal/10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Filters */}
                    <div className="flex space-x-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeFilter === filter
                                        ? 'bg-teal text-white shadow-md'
                                        : 'bg-white text-teal border border-teal/20 hover:bg-teal/5'
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
                                placeholder="Search crafts..."
                                className="w-full bg-white border border-teal/20 rounded-full py-2 px-10 text-sm focus:ring-2 focus:ring-teal outline-none"
                            />
                            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                        </div>
                        <button className="p-3 bg-white border border-teal/20 rounded-full text-teal hover:bg-teal/5 transition-colors">
                            <SlidersHorizontal size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {craftsProducts.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-20 text-center">
                        <button className="px-12 py-4 bg-white text-teal border-2 border-teal rounded-full font-extrabold text-lg hover:bg-teal/5 transition-colors">
                            Load More Crafts
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
