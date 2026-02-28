'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useParams } from 'next/navigation';
import { tutorials } from '@/lib/mockData';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Clock, BarChart, ChevronRight, MessageSquare, Download, Share2 } from 'lucide-react';

export default function TutorialDetailPage() {
    const { id } = useParams();
    const tutorial = tutorials.find(t => t.id === id);
    const [activeTab, setActiveTab] = useState('Overview');

    if (!tutorial) return <div>Tutorial not found</div>;

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-24 px-4">
                <div className="container mx-auto">
                    {/* Video Player Placeholder */}
                    <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl bg-black mb-12 border-8 border-white">
                        <img src={tutorial.thumbnail} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-24 h-24 bg-teal text-white rounded-full flex items-center justify-center shadow-2xl relative z-10"
                            >
                                <Play size={40} fill="currentColor" />
                            </motion.button>
                            {/* Progress bar simulation */}
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20">
                                <div className="h-full bg-teal w-1/3" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Content Left */}
                        <div className="lg:col-span-2">
                            <div className="mb-8">
                                <div className="flex items-center space-x-4 mb-4">
                                    <span className="bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tutorial.level}</span>
                                    <span className="text-slate-400">•</span>
                                    <span className="text-slate-400 text-sm font-medium">{tutorial.duration}</span>
                                </div>
                                <h1 className="text-4xl font-extrabold text-body mb-6 leading-tight">{tutorial.title}</h1>

                                <div className="flex items-center space-x-6 p-6 bg-white border border-pastel-pink rounded-2xl shadow-sm">
                                    <img src={`https://i.pravatar.cc/150?u=${tutorial.seller}`} className="w-16 h-16 rounded-full border-4 border-pastel-pink" />
                                    <div>
                                        <h4 className="font-extrabold text-body text-lg">Instruction by {tutorial.seller}</h4>
                                        <p className="text-sm text-slate-500 font-medium">Expert Craftsman with over 15 years in {tutorial.id === 't1' ? 'Crocheting' : 'Arts'}.</p>
                                    </div>
                                    <button className="hidden sm:block ml-auto px-6 py-2 bg-pastel-pink text-vibrant-purple rounded-full font-bold text-sm hover:bg-vibrant-purple hover:text-white transition-all">
                                        Follow Master
                                    </button>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-pastel-pink mb-8 flex space-x-8">
                                {['Overview', 'curriculum', 'Resources', 'Reviews'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 text-sm font-bold capitalize transition-all relative ${activeTab === tab ? 'text-vibrant-purple' : 'text-slate-400 hover:text-vibrant-purple'
                                            }`}
                                    >
                                        {tab}
                                        {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-vibrant-purple rounded-full" />}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white p-8 rounded-3xl border border-pastel-pink shadow-sm mb-12">
                                <h3 className="text-2xl font-bold text-body mb-6">About this course</h3>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    In this comprehensive tutorial, we'll dive deep into the techniques required to master this craft.
                                    Whether you're starting from scratch or looking to refine your skills, {tutorial.seller} will guide you
                                    through every step with detailed explanations and close-up demonstrations.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Understanding materials and tools',
                                        'Fundamental techniques and strokes',
                                        'Common mistakes and how to avoid them',
                                        'Completing your first major project',
                                        'Tips for professional finishing',
                                        'Bonus resources and templates'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start space-x-3">
                                            <CheckCircle size={18} className="text-teal mt-1 shrink-0" />
                                            <span className="text-sm text-slate-600 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Right */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-3xl border border-pastel-pink shadow-soft-purple text-center">
                                <h4 className="text-xl font-extrabold text-body mb-2">Class Materials</h4>
                                <p className="text-sm text-slate-400 mb-8">Everything you need to follow along</p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        { name: 'Supply List.pdf', size: '1.2 MB' },
                                        { name: 'Pattern Template.png', size: '4.5 MB' },
                                        { name: 'Color Palette Guide.pdf', size: '0.8 MB' }
                                    ].map((file) => (
                                        <div key={file.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-teal transition-colors">
                                            <div className="flex items-center">
                                                <Download size={18} className="text-teal mr-3" />
                                                <div className="text-left">
                                                    <p className="text-xs font-bold text-slate-700">{file.name}</p>
                                                    <p className="text-[10px] text-slate-400">{file.size}</p>
                                                </div>
                                            </div>
                                            <ChevronRight size={16} className="text-slate-300 group-hover:text-teal" />
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full py-4 bg-teal text-white rounded-2xl font-bold shadow-lg hover:shadow-teal/20 transition-all flex items-center justify-center space-x-2">
                                    <Download size={20} />
                                    <span>Download All Files</span>
                                </button>
                            </div>

                            <div className="bg-pastel-pink/30 p-8 rounded-3xl border border-pastel-pink">
                                <h4 className="text-lg font-bold text-vibrant-purple mb-4 flex items-center">
                                    <MessageSquare size={18} className="mr-2" /> Class Discussion
                                </h4>
                                <p className="text-sm text-slate-600 mb-6">Need help with a specific step? Ask {tutorial.seller} and the community!</p>
                                <button className="w-full py-3 bg-white text-vibrant-purple border-2 border-vibrant-purple rounded-xl font-bold text-sm hover:bg-vibrant-purple hover:text-white transition-all">
                                    Join Discussion
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
