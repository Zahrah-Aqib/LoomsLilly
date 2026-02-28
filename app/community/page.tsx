'use client';

import React, { useState } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Hash, Users, ThumbsUp, MessageSquare, Plus } from 'lucide-react';
import { messages } from '@/lib/mockData';

export default function CommunityPage() {
    const [activeRoom, setActiveRoom] = useState('Crochet Corner');
    const [typedMessage, setTypedMessage] = useState('');
    const [roomMessages, setRoomMessages] = useState<any>(messages);

    const rooms = [
        { name: 'Crochet Corner', count: 154 },
        { name: 'Painting Pals', count: 230 },
        { name: 'Embroidery Enthusiasts', count: 89 },
        { name: 'Pottery People', count: 112 },
    ];

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!typedMessage.trim()) return;

        const newMessage = {
            id: Date.now(),
            user: 'You',
            text: typedMessage,
            time: 'Just now'
        };

        setRoomMessages({
            ...roomMessages,
            [activeRoom]: [...roomMessages[activeRoom], newMessage]
        });
        setTypedMessage('');
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-12 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 h-[700px]">

                        {/* Sidebar */}
                        <div className="w-full lg:w-80 bg-white rounded-3xl shadow-sm border border-pastel-pink overflow-hidden flex flex-col">
                            <div className="p-6 border-b border-pastel-pink">
                                <h2 className="text-xl font-extrabold text-vibrant-purple flex items-center">
                                    <Hash className="mr-2" size={20} />
                                    Chat Rooms
                                </h2>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {rooms.map((room) => (
                                    <button
                                        key={room.name}
                                        onClick={() => setActiveRoom(room.name)}
                                        className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all ${activeRoom === room.name
                                                ? 'bg-vibrant-purple text-white shadow-md scale-[1.02]'
                                                : 'text-slate-600 hover:bg-pastel-pink'
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <Hash size={18} className="mr-3 opacity-70" />
                                            <span className="font-bold">{room.name}</span>
                                        </div>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeRoom === room.name ? 'bg-white/20' : 'bg-slate-100'}`}>
                                            {room.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <div className="p-4 bg-pastel-pink/30 border-t border-pastel-pink text-center">
                                <button className="text-vibrant-purple font-bold text-sm flex items-center justify-center mx-auto hover:underline">
                                    <Plus size={16} className="mr-2" /> Start New Room
                                </button>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 bg-white rounded-3xl shadow-soft-purple border border-pastel-pink overflow-hidden flex flex-col relative">
                            {/* Header */}
                            <div className="p-6 border-b border-pastel-pink bg-white flex items-center justify-between z-10">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full purple-pink-gradient flex items-center justify-center text-white mr-4 shadow-sm">
                                        <Hash size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-body text-xl">{activeRoom}</h3>
                                        <p className="text-xs text-slate-400 flex items-center">
                                            <Users size={12} className="mr-1" /> 24 active now
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                                {roomMessages[activeRoom].map((msg: any) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, x: msg.user === 'You' ? 20 : -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[70%] ${msg.user === 'You' ? 'items-end' : 'items-start'} flex flex-col`}>
                                            <span className="text-[10px] font-bold text-slate-400 mb-1 px-1">{msg.user} • {msg.time}</span>
                                            <div className={`p-4 rounded-2xl shadow-sm ${msg.user === 'You'
                                                    ? 'purple-pink-gradient text-white rounded-tr-none'
                                                    : 'bg-white text-body border border-pastel-pink rounded-tl-none'
                                                }`}>
                                                <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Input */}
                            <div className="p-6 bg-white border-t border-pastel-pink">
                                <form onSubmit={handleSendMessage} className="relative">
                                    <input
                                        type="text"
                                        value={typedMessage}
                                        onChange={(e) => setTypedMessage(e.target.value)}
                                        placeholder={`Message ${activeRoom}...`}
                                        className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 pr-16 text-sm focus:ring-2 focus:ring-vibrant-purple outline-none transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 purple-pink-gradient text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                    >
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Feed/Poll (Optional Desktop only) */}
                        <div className="hidden xl:flex w-80 flex-col space-y-8">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-pastel-pink">
                                <h4 className="font-extrabold text-vibrant-purple mb-4 flex items-center">
                                    <ThumbsUp size={18} className="mr-2" /> Community Polls
                                </h4>
                                <p className="text-sm font-bold text-body mb-4">What tutorial should we host next?</p>
                                <div className="space-y-3">
                                    {['Leather Work', 'Silk Painting', '3D Crochet'].map((opt) => (
                                        <button key={opt} className="w-full p-3 bg-pastel-pink/30 rounded-xl text-left text-xs font-bold text-slate-600 hover:bg-pastel-pink transition-colors">
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-vibrant-purple p-6 rounded-3xl shadow-lg relative overflow-hidden text-white">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <MessageSquare size={80} />
                                </div>
                                <h4 className="font-extrabold text-xl mb-2 relative z-10">Monthly Challenge</h4>
                                <p className="text-sm opacity-90 mb-4 relative z-10">"Spring Florals" - Share your progress in Painting Pals!</p>
                                <button className="bg-white text-vibrant-purple px-4 py-2 rounded-full text-xs font-extrabold relative z-10 shadow-md">Join Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
