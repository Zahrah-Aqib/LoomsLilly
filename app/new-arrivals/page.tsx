'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { motion } from 'framer-motion';
import { artsProducts, craftsProducts } from '@/lib/mockData';

export default function NewArrivalsPage() {
    const allProducts = [...artsProducts, ...craftsProducts].sort(() => Math.random() - 0.5);

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-16 px-4 bg-vibrant-purple/5">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-extrabold text-vibrant-purple mb-4">Fresh from the Studio</h1>
                    <p className="text-xl text-slate-500 font-medium">The very latest creations uploaded by our community this week.</p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {allProducts.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
