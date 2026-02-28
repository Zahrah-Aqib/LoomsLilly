'use client';

import React, { Suspense, useEffect, useRef } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ThreeDHero from '@/components/hero/ThreeDHero';
import FlashSaleBanner from '@/components/home/FlashSaleBanner';
import ProductCard from '@/components/shop/ProductCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Palette, Scissors, GraduationCap, Users, Calendar, ArrowRight, Play } from 'lucide-react';
import { artsProducts, craftsProducts, tutorials, events, sellers } from '@/lib/mockData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: 'Arts', icon: <Palette size={24} />, color: 'bg-[#E8D5FF]', text: 'text-vibrant-purple', href: '/arts' },
  { name: 'Crafts', icon: <Scissors size={24} />, color: 'bg-[#FFC1E3]', text: 'text-hot-pink', href: '/crafts' },
  { name: 'Tutorials', icon: <GraduationCap size={24} />, color: 'bg-[#CCFBF1]', text: 'text-teal', href: '/tutorials' },
  { name: 'Community', icon: <Users size={24} />, color: 'bg-[#FEF3C7]', text: 'text-amber-600', href: '/community' },
  { name: 'Events', icon: <Calendar size={24} />, color: 'bg-[#DBEAFE]', text: 'text-blue-600', href: '/events' },
];

const SectionHeading = ({ title, subtitle, href }: { title: string; subtitle?: string; href?: string }) => (
  <div className="flex justify-between items-end mb-10">
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-vibrant-purple mb-2">{title}</h2>
      {subtitle && <p className="text-slate-500 font-medium">{subtitle}</p>}
    </div>
    {href && (
      <Link href={href} className="flex items-center space-x-2 text-hot-pink font-bold hover:underline">
        <span>View All</span>
        <ArrowRight size={18} />
      </Link>
    )}
  </div>
);

export default function Home() {
  const newArrivalsRef = useRef(null);

  useEffect(() => {
    if (newArrivalsRef.current) {
      gsap.fromTo(newArrivalsRef.current,
        { autoAlpha: 0, scale: 0.95 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: newArrivalsRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Scene */}
          <div className="order-2 lg:order-1 relative h-[400px] lg:h-[700px]">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-pastel-pink rounded-3xl animate-pulse">Loading Scene...</div>}>
              <ThreeDHero />
            </Suspense>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold text-vibrant-purple leading-tight"
            >
              Where Every Stitch, <br />
              <span className="text-hot-pink">Stroke & Story</span> <br />
              Finds Its Audience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0"
            >
              The creative vibrant heart of Pakistan. Buy, sell, and learn within our community of master makers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link href="/arts" className="px-10 py-5 purple-pink-gradient text-white rounded-full font-extrabold text-lg shadow-xl hover:scale-105 transition-transform w-full sm:w-auto text-center">
                Start Shopping
              </Link>
              <Link href="/auth" className="px-10 py-5 bg-white text-vibrant-purple border-2 border-vibrant-purple rounded-full font-extrabold text-lg shadow-lg hover:bg-pastel-pink transition-colors w-full sm:w-auto text-center">
                Start Selling
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={cat.href}>
                  <div className={`${cat.color} p-8 rounded-2xl flex flex-col items-center justify-center space-y-4 hover:scale-105 transition-transform cursor-pointer shadow-sm border border-transparent hover:border-white/50`}>
                    <div className={`${cat.text} p-3 rounded-full bg-white/50`}>
                      {cat.icon}
                    </div>
                    <span className={`font-extrabold text-lg ${cat.text}`}>{cat.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <FlashSaleBanner />

      {/* New Arrivals Section */}
      <section ref={newArrivalsRef} className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading title="New Arrivals" subtitle="The latest masterpieces from Pakistan's finest creators" href="/new-arrivals" />
          <div className="flex space-x-6 pb-8 overflow-x-auto no-scrollbar mask-fade-right">
            {[...artsProducts.slice(0, 4), ...craftsProducts.slice(0, 4)].map((product, idx) => (
              <div key={product.id} className="min-w-[300px] w-[300px]">
                <ProductCard product={product} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Makers */}
      <section className="py-24 px-4 bg-pastel-pink/30">
        <div className="container mx-auto">
          <SectionHeading title="Meet the Makers" subtitle="The faces behind the magic" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellers.slice(0, 3).map((seller, idx) => (
              <motion.div
                key={seller.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-soft-purple flex items-center space-x-6 hover:shadow-lg transition-shadow border border-pastel-pink/50"
              >
                <img src={seller.image} alt={seller.name} className="w-20 h-20 rounded-full object-cover border-4 border-pastel-pink" />
                <div>
                  <h4 className="font-bold text-xl text-body">{seller.name}</h4>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-2">{seller.bio}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold bg-teal/10 text-teal px-2 py-0.5 rounded-full uppercase">{seller.city}</span>
                    {seller.isVerified && <span className="text-[10px] font-bold bg-vibrant-purple/10 text-vibrant-purple px-2 py-0.5 rounded-full uppercase">Verified</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Carousel (Official Style) */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading title="Upcoming Events" subtitle="Workshops, Pop-ups, and Craft Fairs" href="/events" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.slice(0, 2).map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-vibrant-purple" />
                <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="announcement-font text-xs text-slate-400 mb-2 block">{event.type}</span>
                    <h3 className="announcement-font text-2xl text-[#0F172A] mb-4 leading-tight">{event.title}</h3>
                    <div className="space-y-2 text-sm text-slate-600 font-medium">
                      <p className="flex items-center space-x-2">
                        <Calendar size={16} className="text-vibrant-purple" />
                        <span>{event.date}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <MapPin size={16} className="text-vibrant-purple" />
                        <span>{event.city}</span>
                      </p>
                    </div>
                  </div>
                  <button className="mt-6 announcement-font text-sm text-vibrant-purple border-b-2 border-vibrant-purple w-fit hover:text-hot-pink hover:border-hot-pink transition-colors pb-1">
                    Save to Calendar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-24 px-4 bg-teal/5">
        <div className="container mx-auto">
          <SectionHeading title="Trending Tutorials" subtitle="Learn from the masters" href="/tutorials" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.slice(0, 3).map((tut, idx) => (
              <motion.div
                key={tut.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm group border border-teal/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={tut.thumbnail} alt={tut.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal shadow-lg">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-teal text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    {tut.level}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-body mb-2 line-clamp-2">{tut.title}</h4>
                  <p className="text-slate-500 text-sm mb-4">by {tut.seller}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">{tut.duration}</span>
                    <span className={`text-sm font-extrabold ${tut.price === 'Free' ? 'text-teal' : 'text-vibrant-purple'}`}>
                      {tut.price}
                    </span >
                  </div>
                </div>
              </motion.div>
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
