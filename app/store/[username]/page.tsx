'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useParams } from 'next/navigation';
import { sellers, artsProducts, craftsProducts, tutorials } from '@/lib/mockData';
import ProductCard from '@/components/shop/ProductCard';
import { motion } from 'framer-motion';
import { Share2, MapPin as MapPinIcon, CheckCircle, MessageCircle, Star } from 'lucide-react';

export default function SellerStorePage() {
    const { username } = useParams();
    // We'll use the decoded username to find the seller by name (simplified for mock)
    const decodedName = decodeURIComponent(username as string).replace('-', ' ');
    const seller = sellers.find(s => s.name.toLowerCase().includes(decodedName.toLowerCase()) || s.name.toLowerCase().includes(username as string));

    if (!seller) return <div>Seller not found</div>;

    const sellerProducts = [...artsProducts, ...craftsProducts].filter(p => p.artist === seller.name);
    const sellerTutorials = tutorials.filter(t => t.seller === seller.name);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Store Header */}
            <section className="pt-32 pb-16 px-4 bg-pastel-pink/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10">
                    <div className="w-80 h-80 border-[40px] border-vibrant-purple rounded-full translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-end space-y-8 md:space-y-0 md:space-x-12 relative z-10">
                        <div className="relative">
                            <img src={seller.image} className="w-40 h-40 rounded-3xl border-8 border-white shadow-2xl object-cover" />
                            {seller.isVerified && (
                                <div className="absolute -top-3 -right-3 bg-vibrant-purple text-white p-2 rounded-full border-4 border-white shadow-lg">
                                    <CheckCircle size={20} />
                                </div>
                            )}
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-body">{seller.name}</h1>
                                <div className="flex items-center justify-center space-x-4 mt-4 md:mt-0">
                                    <button className="p-3 bg-white text-vibrant-purple rounded-2xl shadow-sm border border-pastel-pink hover:bg-pastel-pink transition-colors">
                                        <Share2 size={20} />
                                    </button>
                                    <button className="px-8 py-3 purple-pink-gradient text-white rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform">
                                        Follow Store
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-500 font-medium mb-6">
                                <span className="flex items-center"><MapPin size={18} className="mr-2 text-vibrant-purple" /> {seller.city}, Pakistan</span>
                                <span className="flex items-center"><Star size={18} className="mr-2 text-yellow-400 fill-yellow-400" /> 4.9 (128 Reviews)</span>
                                <span className="flex items-center"><MessageCircle size={18} className="mr-2 text-teal" /> Usually responds in 1 hour</span>
                            </div>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">{seller.bio}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs / Content Sections */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="border-b border-pastel-pink mb-16 flex space-x-12">
                        <button className="pb-6 text-xl font-extrabold text-vibrant-purple border-b-4 border-vibrant-purple">Products</button>
                        <button className="pb-6 text-xl font-extrabold text-slate-300 hover:text-vibrant-purple transition-colors">Tutorials</button>
                        <button className="pb-6 text-xl font-extrabold text-slate-300 hover:text-vibrant-purple transition-colors">Reviews</button>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl font-extrabold text-body mb-10">Available Creations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {sellerProducts.length > 0 ? (
                                sellerProducts.map((p, idx) => (
                                    <ProductCard key={p.id} product={p} index={idx} />
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                                    <p className="text-slate-400 font-bold">No products currently available.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {sellerTutorials.length > 0 && (
                        <div>
                            <h2 className="text-3xl font-extrabold text-body mb-10">Courses by {seller.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {sellerTutorials.map((tut, idx) => (
                                    <motion.div
                                        key={tut.id}
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm border border-teal/10 group cursor-pointer"
                                    >
                                        <div className="relative aspect-video">
                                            <img src={tut.thumbnail} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal">
                                                    <Star size={20} fill="currentColor" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h4 className="font-bold text-lg text-body mb-2">{tut.title}</h4>
                                            <p className="text-sm text-teal font-bold">{tut.price}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
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
