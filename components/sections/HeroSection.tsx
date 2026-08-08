'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Droplets, Leaf, Zap } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { getWhatsAppUrl } from '@/lib/utils';
import { companyInfo } from '@/data/company';

const badges = [
  { icon: Droplets, label: '100% Waterproof' },
  { icon: Shield, label: 'Termite Proof' },
  { icon: Leaf, label: 'Eco-Friendly' },
  { icon: Zap, label: 'Low Maintenance' },
];

const stats = [
  { num: 12, suffix: '+', label: 'Product Lines' },
  { num: 500, suffix: '+', label: 'Projects Done' },
  { num: 20, suffix: '+', label: 'Years Lifespan' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a2018] via-[#173F2A] to-[#0f2a1c] flex items-center overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #C9A24B 0px, transparent 1px, transparent 80px, #C9A24B 80px), repeating-linear-gradient(90deg, #C9A24B 0px, transparent 1px, transparent 80px, #C9A24B 80px)',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-forest-mid/30 blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/40"
          style={{
            top: `${15 + i * 13}%`,
            left: `${5 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}

      <div className="section-padding w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="inline-flex items-center gap-2.5 border border-gold/30 text-gold font-mono-caps text-[9px] tracking-[0.25em] uppercase px-4 py-2 mb-8"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-gold"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Premium WPC & PVC Solutions
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(42px, 5.5vw, 76px)' }}
            >
              Built to Last.
              <br />
              <em className="text-gold not-italic">Designed</em> to
              <br />
              Inspire.
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-white/55 text-lg leading-relaxed max-w-[440px] mb-10 font-light"
            >
              Narayan Ecoplank crafts premium WPC & PVC products that replace traditional wood — delivering superior durability, zero maintenance, and lasting beauty for homes and buildings across India.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link href="/products" className="btn-primary-nep">
                Explore Products
                <ArrowRight size={14} />
              </Link>
              <a
                href={getWhatsAppUrl(companyInfo.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-nep"
              >
                WhatsApp Us
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex gap-10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold/25 pl-5">
                  <p className="font-display text-4xl text-gold font-semibold leading-none">
                    <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                  </p>
                  <p className="font-mono-caps text-[9px] tracking-[0.2em] text-white/40 uppercase mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 z-10 bg-gold text-forest-dark px-5 py-4 text-center shadow-xl"
            >
              <p className="font-display text-sm font-bold leading-none">Smart Choice</p>
              <p className="font-mono-caps text-[8px] tracking-wider uppercase mt-1 opacity-70">
                for Modern Living
              </p>
            </motion.div>

            {/* Main image */}
            <div className="relative glass-card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://www.veilcraft.in/public/images/products/1758176225-wpc-doors.webp"
                  alt="Premium WPC door from Narayan Ecoplank"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-mono-caps text-[9px] tracking-[0.25em] text-gold uppercase mb-2">
                    Featured
                  </p>
                  <p className="font-display text-white text-2xl font-semibold">
                    WPC Doors
                  </p>
                </div>
              </div>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {badges.map((badge) => (
                <div key={badge.label} className="glass-card p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                    <badge.icon size={14} className="text-gold" />
                  </div>
                  <span className="font-mono-caps text-[10px] tracking-wide text-white/80 uppercase">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="font-mono-caps text-[8px] tracking-[0.3em] text-white/30 uppercase">
          Scroll
        </p>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent animate-scroll-line" />
      </motion.div>
    </section>
  );
}
