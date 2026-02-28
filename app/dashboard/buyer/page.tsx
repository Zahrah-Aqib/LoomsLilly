'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { Package, Heart, Play, Calendar, Settings, LogOut, ChevronRight } from 'lucide-react';
import { useStore } from '@/lib/store';
import { artsProducts, craftsProducts } from '@/lib/mockData';
import Link from 'next/link';

export default function BuyerDashboard() {
    const wishlistIds = useStore((state) => state.wishlist);
    const wishlistProducts = [...artsProducts, ...craftsProducts].filter(p => wishlistIds.includes(p.id));

    const dummyOrders = [
        { id: 'ORD-5521', date: 'Oct 24, 2026', total: 15400, status: 'Shipped', item: 'Sunset Over Lahore' },
        { id: 'ORD-4410', date: 'Sep 12, 2026', total: 2500, status: 'Delivered', item: 'Embroidered Floral Tote' },
        { id: 'ORD-3021', date: 'Aug 05, 2026', total: 8500, status: 'Processing', item: 'Woolen Shawl from Swat' },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-24 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-pastel-pink text-center">
                                <div className="relative inline-block mb-6">
                                    <img src="https://i.pravatar.cc/150?u=buyer" className="w-24 h-24 rounded-full border-4 border-pastel-pink" />
                                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-vibrant-purple text-white rounded-full flex items-center justify-center border-4 border-white">
                                        <Settings size={14} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-extrabold text-body">Zainab Malik</h3>
                                <p className="text-sm text-slate-400 font-medium mb-8">Lahore, Pakistan</p>

                                <div className="space-y-2">
                                    {[
                                        { icon: <Package size={18} />, label: 'My Orders', color: 'text-vibrant-purple' },
                                        { icon: <Heart size={18} />, label: 'Wishlist', color: 'text-hot-pink' },
                                        { icon: <Play size={18} />, label: 'Saved Tutorials', color: 'text-teal' },
                                        { icon: <Calendar size={18} />, label: 'My Events', color: 'text-blue-500' },
                                        { icon: <LogOut size={18} />, label: 'Sign Out', color: 'text-slate-400' },
                                    ].map((item) => (
                                        <button key={item.label} className="w-full flex items-center space-x-3 p-4 rounded-2xl hover:bg-pastel-pink transition-colors group">
                                            <span className={`${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                                            <span className="text-sm font-bold text-slate-600">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3 space-y-12">
                            {/* Stat Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { label: 'Active Orders', value: '2', icon: <Package />, color: 'bg-vibrant-purple/10 text-vibrant-purple' },
                                    { label: 'Wishlist Items', value: wishlistIds.length.toString(), icon: <Heart />, color: 'bg-hot-pink/10 text-hot-pink' },
                                    { label: 'Tutorials Completed', value: '5', icon: <Play />, color: 'bg-teal/10 text-teal' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                            <h4 className="text-3xl font-extrabold text-body">{stat.value}</h4>
                                        </div>
                                        <div className={`p-4 rounded-2xl ${stat.color}`}>
                                            {stat.icon}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Recent Orders */}
                            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-10">
                                    <h3 className="text-2xl font-extrabold text-body">Recent Orders</h3>
                                    <button className="text-sm font-bold text-vibrant-purple hover:underline">View All</button>
                                </div>
                                <div className="space-y-6">
                                    {dummyOrders.map((order) => (
                                        <div key={order.id} className="flex items-center justify-between p-6 rounded-3xl border border-slate-50 hover:border-pastel-pink hover:bg-slate-50 transition-all">
                                            <div className="flex items-center space-x-6">
                                                <div className="w-16 h-16 bg-pastel-pink/50 rounded-2xl flex items-center justify-center text-vibrant-purple">
                                                    <Package size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-400 mb-1">{order.id} • {order.date}</p>
                                                    <h4 className="font-bold text-body">{order.item}</h4>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-extrabold text-body mb-2">PKR {order.total.toLocaleString()}</p>
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' :
                                                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Wishlist Preview */}
                            {wishlistProducts.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-extrabold text-body mb-8">From Your Wishlist</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {wishlistProducts.slice(0, 3).map((product) => (
                                            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm relative group">
                                                <img src={product.image} className="w-full h-40 object-cover" />
                                                <div className="p-6">
                                                    <h4 className="font-bold text-body mb-1">{product.name}</h4>
                                                    <p className="text-xs text-vibrant-purple font-extrabold">PKR {product.price.toLocaleString()}</p>
                                                    <Link href={`/product/${product.id}`} className="mt-4 w-full py-3 bg-pastel-pink text-vibrant-purple rounded-xl font-bold text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        Buy Now <ChevronRight size={14} className="ml-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
