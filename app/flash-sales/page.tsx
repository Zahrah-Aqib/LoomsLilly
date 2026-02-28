'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import FlashSaleBanner from '@/components/home/FlashSaleBanner';
import ProductCard from '@/components/shop/ProductCard';
import { motion } from 'framer-motion';
import { artsProducts, craftsProducts } from '@/lib/mockData';

export default function FlashSalesPage() {
    const saleProducts = [...artsProducts.slice(0, 6), ...craftsProducts.slice(0, 6)];

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="pt-20">
                <FlashSaleBanner />
            </div>

            <section className="py-24 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <h2 className="text-3xl font-extrabold text-body">Active Flash Deals</h2>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Ending in: 12:45:30</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {saleProducts.map((product, idx) => (
                            <div key={product.id} className="relative">
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="bg-coral-red text-white py-1 px-3 rounded-full text-xs font-bold shadow-lg">
                                        60% OFF
                                    </div>
                                </div>
                                <ProductCard product={product} index={idx} />
                                <div className="mt-4 px-2">
                                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
                                        <div className="h-full bg-coral-red w-3/4" />
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                                        <span>12 Sold</span>
                                        <span>5 Remaining</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
