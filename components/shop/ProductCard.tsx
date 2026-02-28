'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { Product } from '@/lib/mockData';
import confetti from 'canvas-confetti';

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const addToCart = useStore((state) => state.addToCart);
    const toggleWishlist = useStore((state) => state.toggleWishlist);
    const wishlist = useStore((state) => state.wishlist);
    const isWishlisted = wishlist.includes(product.id);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);

        // Confetti effect
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        confetti({
            particleCount: 40,
            spread: 70,
            origin: { y: rect.top / window.innerHeight, x: rect.left / window.innerWidth },
            colors: ['#7C3AED', '#EC4899', '#0D9488'],
            ticks: 200,
        });
    };

    const handleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product.id);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
        >
            <Link href={`/product/${product.id}`}>
                <div className="bg-white rounded-xl overflow-hidden card-hover group cursor-pointer border border-pastel-pink">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-vibrant-purple uppercase tracking-wider shadow-sm">
                                {product.category}
                            </span>
                            {product.price < 5000 && (
                                <span className="bg-coral-red text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                    Deal
                                </span>
                            )}
                        </div>

                        {/* Wishlist Button */}
                        <button
                            onClick={handleWishlist}
                            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full shadow-md text-slate-400 hover:text-hot-pink transition-colors z-10"
                        >
                            <Heart size={18} fill={isWishlisted ? "#EC4899" : "none"} color={isWishlisted ? "#EC4899" : "currentColor"} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-body font-bold text-lg leading-tight group-hover:text-vibrant-purple transition-colors">
                                {product.name}
                            </h3>
                        </div>
                        <p className="text-slate-500 text-sm mb-3">by {product.artist}</p>

                        <div className="flex items-center space-x-1 mb-4">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                            <span className="text-xs text-slate-400">({product.reviews} reviews)</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-vibrant-purple font-extrabold text-xl">
                                    PKR {product.price.toLocaleString()}
                                </span>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="p-2 bg-pastel-pink text-vibrant-purple rounded-full hover:bg-vibrant-purple hover:text-white transition-all duration-300"
                            >
                                <ShoppingCart size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
