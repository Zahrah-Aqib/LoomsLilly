'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Github, ArrowRight } from 'lucide-react';

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState('login');
    const [accountType, setAccountType] = useState('buyer');

    return (
        <main className="min-h-screen bg-[#F5F0FF] flex flex-col">
            <Navbar />

            <section className="flex-1 pt-32 pb-24 px-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-pastel-pink"
                >
                    {/* Decorative Side */}
                    <div className="hidden md:flex w-1/3 bg-vibrant-purple p-10 flex-col justify-between text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <div className="w-64 h-64 border-[30px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold mb-6">Welcome Back!</h2>
                            <p className="text-sm opacity-80 leading-relaxed font-medium font-nunito">
                                Join thousands of Pakistani makers and discovery-driven buyers in our creative marketplace.
                            </p>
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold">L</span>
                            </div>
                            <p className="text-xs font-bold opacity-60">Handcrafted with Love</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="flex-1 p-8 md:p-12">
                        <div className="flex justify-center space-x-8 mb-10">
                            {['login', 'signup'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-2 text-lg font-extrabold capitalize transition-all relative ${activeTab === tab ? 'text-vibrant-purple' : 'text-slate-300'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && <motion.div layoutId="auth-tab" className="absolute bottom-0 left-0 right-0 h-1 bg-vibrant-purple rounded-full" />}
                                </button>
                            ))}
                        </div>

                        <div className="mb-8">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Select Account Type</label>
                            <div className="grid grid-cols-2 gap-4">
                                {['buyer', 'seller'].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setAccountType(type)}
                                        className={`py-3 px-4 rounded-2xl flex items-center justify-center space-x-2 font-bold text-sm transition-all border-2 ${accountType === type
                                            ? 'border-vibrant-purple bg-vibrant-purple/5 text-vibrant-purple'
                                            : 'border-slate-100 text-slate-400 hover:border-pastel-pink'
                                            }`}
                                    >
                                        <User size={16} />
                                        <span className="capitalize">{type}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <form className="space-y-6">
                            {activeTab === 'signup' && (
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-slate-50 border-none rounded-2xl py-4 px-12 text-sm focus:ring-2 focus:ring-vibrant-purple outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="email"
                                        placeholder="you@email.com"
                                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-12 text-sm focus:ring-2 focus:ring-vibrant-purple outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-2">
                                    <label className="text-sm font-bold text-slate-700">Password</label>
                                    {activeTab === 'login' && <button className="text-[10px] font-bold text-hot-pink uppercase">Forgot?</button>}
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-12 text-sm focus:ring-2 focus:ring-vibrant-purple outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 purple-pink-gradient text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/20 flex items-center justify-center space-x-2"
                            >
                                <span>{activeTab === 'login' ? 'Login to LoomLilly' : 'Create Account'}</span>
                                <ArrowRight size={20} />
                            </motion.button>
                        </form>

                        <div className="my-10 flex items-center space-x-4">
                            <div className="flex-1 h-[1px] bg-slate-100" />
                            <span className="text-xs font-bold text-slate-300 uppercase">Or continue with</span>
                            <div className="flex-1 h-[1px] bg-slate-100" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="py-4 rounded-2xl bg-white border border-slate-200 font-bold text-sm flex items-center justify-center space-x-3 hover:bg-slate-50 transition-all">
                                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />
                                <span>Google</span>
                            </button>
                            <button className="py-4 rounded-2xl bg-white border border-slate-200 font-bold text-sm flex items-center justify-center space-x-3 hover:bg-slate-50 transition-all">
                                <Github size={18} />
                                <span>Github</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
