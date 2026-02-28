'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Heart, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';

const navLinks = [
    { name: 'Arts', href: '/arts' },
    { name: 'Crafts', href: '/crafts' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Community', href: '/community' },
    { name: 'Events', href: '/events' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Deals', href: '/deals' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const cart = useStore((state) => state.cart);
    const wishlist = useStore((state) => state.wishlist);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'frosted-glass py-2 shadow-sm' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 purple-pink-gradient rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-extrabold text-2xl">L</span>
                    </div>
                    <span className="text-vibrant-purple font-extrabold text-2xl tracking-tight hidden sm:block">
                        LoomLilly
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors hover:text-hot-pink ${pathname === link.href ? 'text-hot-pink' : 'text-foreground'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Action Icons */}
                <div className="flex items-center space-x-3 md:space-x-5">
                    <button className="p-2 hover:bg-pastel-pink rounded-full transition-colors text-vibrant-purple">
                        <Search size={20} />
                    </button>

                    <Link href="/dashboard/buyer" className="p-2 hover:bg-pastel-pink rounded-full transition-colors text-vibrant-purple relative">
                        <Heart size={20} fill={wishlist.length > 0 ? "#EC4899" : "none"} color={wishlist.length > 0 ? "#EC4899" : "currentColor"} />
                        {wishlist.length > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-hot-pink text-white text-[10px] flex items-center justify-center rounded-full">
                                {wishlist.length}
                            </span>
                        )}
                    </Link>

                    <button className="p-2 hover:bg-pastel-pink rounded-full transition-colors text-vibrant-purple relative">
                        <ShoppingCart size={20} />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-vibrant-purple text-white text-[10px] flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <Link
                        href="/auth"
                        className="hidden md:flex items-center space-x-2 px-5 py-2 purple-pink-gradient text-white rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform"
                    >
                        <User size={16} />
                        <span>Login</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-vibrant-purple"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-pastel-pink overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold text-foreground hover:text-hot-pink transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/auth"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-3 purple-pink-gradient text-center text-white rounded-xl font-bold"
                            >
                                Login / Register
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
