'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { Plus, LayoutDashboard, ShoppingBag, GraduationCap, TrendingUp, Users, DollarSign, Eye, Edit3, Trash2 } from 'lucide-react';

export default function SellerDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const stats = [
        { label: 'Total Revenue', value: 'PKR 125,400', icon: <DollarSign size={24} />, color: 'bg-green-100 text-green-600' },
        { label: 'Total Sales', value: '42', icon: <ShoppingBag size={24} />, color: 'bg-vibrant-purple/10 text-vibrant-purple' },
        { label: 'Profile Views', value: '1.2k', icon: <Eye size={24} />, color: 'bg-blue-100 text-blue-600' },
        { label: 'Followers', value: '158', icon: <Users size={24} />, color: 'bg-hot-pink/10 text-hot-pink' },
    ];

    const recentListings = [
        { id: 1, name: 'Hand-Crocheted Lavender Blanket', price: 6500, stock: 12, sales: 5, category: 'Crafts' },
        { id: 2, name: 'Woolen Shawl from Swat', price: 8500, stock: 4, sales: 8, category: 'Crafts' },
        { id: 3, name: 'Knitted Baby Booties', price: 1500, stock: 25, sales: 15, category: 'Crafts' },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-24 px-4">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <div>
                            <h1 className="text-4xl font-extrabold text-body mb-2">Seller Dashboard</h1>
                            <p className="text-slate-500 font-medium">Manage your shop and track your growing success.</p>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center space-x-2 px-8 py-4 purple-pink-gradient text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
                        >
                            <Plus size={20} />
                            <span>Add New Listing</span>
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-6`}>
                                    {stat.icon}
                                </div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                <h4 className="text-2xl font-extrabold text-body">{stat.value}</h4>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Recent Listings Table */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
                                <div className="flex justify-between items-center mb-10">
                                    <h3 className="text-2xl font-extrabold text-body">My Top Listings</h3>
                                    <button className="text-sm font-bold text-vibrant-purple hover:underline">Manage All</button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-50">
                                                <th className="pb-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Product</th>
                                                <th className="pb-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Price</th>
                                                <th className="pb-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Stock</th>
                                                <th className="pb-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Sales</th>
                                                <th className="pb-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {recentListings.map((p) => (
                                                <tr key={p.id} className="group hover:bg-slate-50/50">
                                                    <td className="py-6 pr-4">
                                                        <div className="flex items-center space-x-4">
                                                            <div className="w-12 h-12 bg-pastel-pink/30 rounded-xl" />
                                                            <span className="font-bold text-body text-sm line-clamp-1">{p.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-6 font-bold text-body text-sm">PKR {p.price}</td>
                                                    <td className="py-6 font-bold text-body text-sm">{p.stock}</td>
                                                    <td className="py-6 font-bold text-teal text-sm">{p.sales}</td>
                                                    <td className="py-6 text-right">
                                                        <div className="flex items-center justify-end space-x-2">
                                                            <button className="p-2 text-slate-400 hover:text-vibrant-purple transition-colors"><Edit3 size={16} /></button>
                                                            <button className="p-2 text-slate-400 hover:text-hot-pink transition-colors"><Trash2 size={16} /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Revenue Overview */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col items-center">
                                <h3 className="text-2xl font-extrabold text-body mb-8 w-full">Revenue Chart</h3>
                                {/* Dummy SVG Chart */}
                                <svg className="w-full h-40 mb-8" viewBox="0 0 400 200">
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,60" fill="none" stroke="#7C3AED" strokeWidth="4" />
                                    <path d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,60 L400,200 L0,200 Z" fill="url(#chartGrad)" />
                                    {[0, 1, 2, 3, 4].map(i => <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="200" stroke="#f1f5f9" strokeWidth="1" />)}
                                </svg>
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Last 7 Days</p>
                                        <p className="font-extrabold text-body">PKR 12.5k</p>
                                    </div>
                                    <div className="p-4 bg-pastel-pink/30 rounded-2xl text-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Growth</p>
                                        <p className="font-extrabold text-teal">+15%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#0F172A] p-10 rounded-[40px] shadow-2xl text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <TrendingUp size={100} />
                                </div>
                                <h4 className="text-xl font-extrabold mb-4 announcement-font">Weekly Insights</h4>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed announcement-font">Your "Lavender Blanket" listing is trending in Karachi. Consider highlighting it in your store!</p>
                                <button className="w-full py-3 bg-white/10 hover:bg-white/20 border-2 border-white/20 rounded-xl font-bold transition-all announcement-font text-xs">View Insights</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add New Listing Modal (Dummy) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setIsModalOpen(false)}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl p-10 overflow-hidden"
                    >
                        <h2 className="text-3xl font-extrabold text-body mb-8">Add New Listing</h2>
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-2">Product Name</label>
                                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none" placeholder="e.g. Silk Scarf" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-2">Category</label>
                                    <select className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none">
                                        <option>Arts</option>
                                        <option>Crafts</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-2">Description</label>
                                <textarea className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none h-32" placeholder="Tell the story of your creation..." />
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-2">Price (PKR)</label>
                                    <input type="number" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-2">Quantity</label>
                                    <input type="number" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-2">City</label>
                                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex space-x-4">
                            <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-colors">Cancel</button>
                            <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 purple-pink-gradient text-white rounded-2xl font-bold shadow-lg">Create Listing</button>
                        </div>
                    </motion.div>
                </div>
            )}

            <Footer />
        </main>
    );
}
