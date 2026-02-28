'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useParams } from 'next/navigation';
import { artsProducts, craftsProducts } from '@/lib/mockData';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, MapPin, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useStore } from '@/lib/store';
import confetti from 'canvas-confetti';
import ProductCard from '@/components/shop/ProductCard';

export default function ProductDetailPage() {
    const { id } = useParams();
    const product = [...artsProducts, ...craftsProducts].find(p => p.id === id);
    const addToCart = useStore((state) => state.addToCart);
    const toggleWishlist = useStore((state) => state.toggleWishlist);
    const wishlist = useStore((state) => state.wishlist);
    const isWishlisted = wishlist.includes(product?.id || '');

    if (!product) return <div>Product not found</div>;

    const handleAddToCart = () => {
        addToCart(product);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#7C3AED', '#EC4899', '#0D9488']
        });
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-24 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Image Gallery */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="aspect-square rounded-3xl overflow-hidden border border-pastel-pink shadow-lg bg-white"
                            >
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-square rounded-xl overflow-hidden border border-pastel-pink cursor-pointer hover:border-vibrant-purple transition-colors bg-white">
                                        <img src={`https://picsum.photos/seed/${product.id}${i}/400/400`} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <div className="flex items-center space-x-2 text-sm font-bold text-hot-pink uppercase tracking-widest mb-4">
                                    <span>{product.category}</span>
                                    <span>•</span>
                                    <span>In Stock</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-body mb-4 leading-tight">{product.name}</h1>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-200"} />
                                        ))}
                                        <span className="font-bold text-slate-700 ml-2">{product.rating}</span>
                                    </div>
                                    <span className="text-slate-400">|</span>
                                    <span className="text-slate-500 font-medium">{product.reviews} Customer Reviews</span>
                                </div>
                                <div className="text-4xl font-extrabold text-vibrant-purple mb-8">
                                    PKR {product.price.toLocaleString()}
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {product.description} This exquisite piece is handcrafted with the highest quality materials, ensuring a unique and durable product that carries the spirit of Pakistani craftsmanship.
                                </p>
                            </div>

                            {/* Seller Snippet */}
                            <div className="bg-pastel-pink/30 p-6 rounded-2xl mb-10 border border-pastel-pink flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img src={`https://i.pravatar.cc/150?u=${product.artist}`} className="w-14 h-14 rounded-full border-2 border-white shadow-sm" />
                                    <div>
                                        <h4 className="font-bold text-body">Sold by {product.artist}</h4>
                                        <p className="text-sm text-slate-500 flex items-center">
                                            <MapPin size={14} className="mr-1" /> {product.city}, Pakistan
                                        </p>
                                    </div>
                                </div>
                                <button className="text-vibrant-purple font-bold hover:underline text-sm">View Store</button>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 py-5 purple-pink-gradient text-white rounded-full font-extrabold text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-3"
                                >
                                    <ShoppingCart size={24} />
                                    <span>Add to Cart</span>
                                </button>
                                <button
                                    onClick={() => toggleWishlist(product.id)}
                                    className={`w-full sm:w-20 h-16 rounded-full border-2 flex items-center justify-center transition-all ${isWishlisted ? 'border-hot-pink bg-hot-pink text-white' : 'border-pastel-pink bg-white text-slate-400 hover:text-hot-pink'
                                        }`}
                                >
                                    <Heart size={28} fill={isWishlisted ? "currentColor" : "none"} />
                                </button>
                            </div>

                            {/* Extra Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-pastel-pink">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Verified Quality</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                        <Truck size={20} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Fast Nationwide Shipping</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                        <RotateCcw size={20} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">7-Day Return Policy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-24 px-4 bg-white/50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-extrabold text-body mb-10">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {(product.category === 'Arts' ? artsProducts : craftsProducts).slice(0, 4).map((p, idx) => (
                            <ProductCard key={p.id} product={p} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function MapPin({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
