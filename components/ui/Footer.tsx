'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-pastel-pink pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 purple-pink-gradient rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-extrabold text-2xl">L</span>
                            </div>
                            <span className="text-vibrant-purple font-extrabold text-2xl tracking-tight">
                                LoomLilly
                            </span>
                        </Link>
                        <p className="text-slate-500 leading-relaxed">
                            Pakistan's premier creative marketplace. We connect talented artists and crafters with a community that values the stories behind every creation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-pastel-pink text-vibrant-purple rounded-full flex items-center justify-center hover:bg-vibrant-purple hover:text-white transition-all shadow-sm">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-pastel-pink text-vibrant-purple rounded-full flex items-center justify-center hover:bg-vibrant-purple hover:text-white transition-all shadow-sm">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-pastel-pink text-vibrant-purple rounded-full flex items-center justify-center hover:bg-vibrant-purple hover:text-white transition-all shadow-sm">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-bold text-body mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Arts', 'Crafts', 'Tutorials', 'Community', 'Events', 'Deals'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-hot-pink font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h4 className="text-lg font-bold text-body mb-6">Makers</h4>
                        <ul className="space-y-4">
                            {['Start Selling', 'Seller Dashboard', 'Community Guidelines', 'Shipping Policy', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-500 hover:text-hot-pink font-medium transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-body mb-6">Stay Inspired</h4>
                        <p className="text-slate-500 mb-6 text-sm">
                            Join our newsletter for weekly inspiration, featured artists, and flash sale alerts.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-pastel-pink border-none rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-vibrant-purple transition-all outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1 px-5 purple-pink-gradient text-white rounded-full text-sm font-bold shadow-md"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-slate-400 text-sm">
                        © 2026 LoomLilly. Handcrafted with love in Pakistan.
                    </p>
                    <div className="flex space-x-6 text-sm font-medium text-slate-400">
                        <a href="#" className="hover:text-vibrant-purple">Privacy Policy</a>
                        <a href="#" className="hover:text-vibrant-purple">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
