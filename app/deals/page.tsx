'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { motion } from 'framer-motion';
import { artsProducts, craftsProducts } from '@/lib/mockData';

export default function DealsPage() {
    const allProducts = [...artsProducts, ...craftsProducts].filter(p => p.price < 8000);

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-16 px-4 bg-hot-pink/5">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-hot-pink mb-4">Unbeatable Deals</h1>
                    <p className="text-xl text-slate-500 font-medium">Exceptional art and craft at even more exceptional prices.</p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {allProducts.map((product, idx) => (
                            <div key={product.id} className="relative">
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="bg-hot-pink text-white py-1 px-3 rounded-full text-[10px] font-bold shadow-lg uppercase tracking-widest">
                                        Price Drop
                                    </div>
                                </div>
                                <ProductCard product={product} index={idx} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
