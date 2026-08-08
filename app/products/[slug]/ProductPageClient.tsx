'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ZoomIn,
  X,
  ArrowRight,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { companyInfo } from '@/data/company';
import { getWhatsAppUrl } from '@/lib/utils';
import type { Product } from '@/types';

interface Props {
  product: Product;
  related: Product[];
}

export function ProductPageClient({ product, related }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const waMsg = `Hello Narayan Ecoplank, I am interested in *${product.name}* (${product.category}). Please share pricing and availability.`;

  return (
    <div className="bg-white dark:bg-forest-dark min-h-screen pt-20 transition-colors">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex items-center gap-2 text-[11px] font-mono-caps tracking-wider text-gray-400 uppercase flex-wrap">
        <Link href="/" className="hover:text-forest transition-colors">Home</Link>
        <ChevronRight size={10} />
        <Link href="/products" className="hover:text-forest transition-colors">Products</Link>
        <ChevronRight size={10} />
        <Link href={`/products?category=${product.categorySlug}`} className="hover:text-forest transition-colors">
          {product.category}
        </Link>
        <ChevronRight size={10} />
        <span className="text-forest dark:text-white">{product.name}</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-24">
        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div
              className="relative aspect-[4/3] overflow-hidden bg-cream dark:bg-forest/30 cursor-zoom-in group"
              onClick={() => setLightbox(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.images[activeImg]}
                    alt={`${product.name} view ${activeImg + 1}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={18} className="text-forest" />
                </div>
              </div>
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gold text-forest-dark font-mono-caps text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 z-10">
                  {product.badge}
                </div>
              )}
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-20 aspect-square overflow-hidden border-2 transition-all ${
                      i === activeImg ? 'border-gold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="font-mono-caps text-[10px] tracking-[0.25em] text-gold uppercase mb-3">
              {product.category}
            </p>
            <h1
              className="font-display text-forest dark:text-white font-semibold leading-tight mb-4"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              {product.name}
            </h1>
            <p className="text-gray-500 dark:text-white/60 leading-relaxed font-light text-[15px] mb-8">
              {product.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="btn-primary-nep flex-1 justify-center"
              >
                Get Quote
              </button>
              <a
                href={getWhatsAppUrl(companyInfo.whatsapp, waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-mono-caps text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-[#1eb85a] transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 border border-gray-200 dark:border-white/20 text-forest dark:text-white font-mono-caps text-[11px] tracking-[0.2em] uppercase py-4 px-6 hover:border-forest transition-colors"
              >
                <Phone size={15} />
                Call
              </a>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-mono-caps text-[10px] tracking-[0.2em] text-gray-400 dark:text-white/40 uppercase mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600 dark:text-white/70">
                    <CheckCircle2 size={15} className="text-forest mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Specs + Applications tabs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Specifications */}
          <Reveal>
            <div className="bg-cream dark:bg-forest/30 border border-gray-100 dark:border-white/10 p-8 h-full">
              <h2 className="font-display text-forest dark:text-white text-2xl font-semibold mb-6">Specifications</h2>
              <div className="divide-y divide-gray-100">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="grid grid-cols-2 gap-4 py-3.5">
                    <span className="font-mono-caps text-[10px] tracking-wider text-gray-500 dark:text-white/50 uppercase">{key}</span>
                    <span className="text-sm text-forest dark:text-white font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Applications */}
          <Reveal delay={0.1}>
            <div className="bg-forest text-white p-8 h-full">
              <h2 className="font-display text-white text-2xl font-semibold mb-6">Applications</h2>
              <div className="grid grid-cols-2 gap-3">
                {product.applications.map((app) => (
                  <div
                    key={app}
                    className="flex items-center gap-3 bg-white/5 border border-white/8 px-4 py-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-sm text-white/80">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <Reveal className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label">More from this range</p>
                <h2 className="font-display text-forest dark:text-white text-3xl font-semibold">Related Products</h2>
              </div>
              <Link href="/products" className="hidden md:flex items-center gap-1 font-mono-caps text-[10px] tracking-wider uppercase text-forest dark:text-white hover:text-gold transition-colors">
                All Products <ArrowRight size={12} />
              </Link>
            </Reveal>
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <StaggerItem key={rp.id}>
                  <Link href={`/products/${rp.slug}`} className="group block">
                    <div className="bg-cream dark:bg-forest/30 border border-gray-100 dark:border-white/10 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[16/10] overflow-hidden img-zoom">
                        <Image
                          src={rp.images[0]}
                          alt={rp.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <p className="font-mono-caps text-[8px] tracking-wider text-gold uppercase mb-1">{rp.category}</p>
                        <h3 className="font-display text-forest dark:text-white font-semibold group-hover:text-gold transition-colors">{rp.name}</h3>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(false)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-forest-dark transition-all"
              onClick={() => setLightbox(false)}
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={product.images[activeImg]}
                alt={product.name}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {enquiryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-6"
            onClick={(e) => e.target === e.currentTarget && setEnquiryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white dark:bg-forest-dark w-full max-w-md p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-forest dark:text-white text-2xl font-semibold">Quick Enquiry</h3>
                <button onClick={() => setEnquiryOpen(false)} className="text-gray-400 dark:text-white/40 hover:text-forest dark:hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-white/60 mb-6 font-light">
                Enquiring about: <strong className="text-forest dark:text-white">{product.name}</strong>
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={getWhatsAppUrl(companyInfo.whatsapp, waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setEnquiryOpen(false)}
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-mono-caps text-[11px] tracking-widest uppercase"
                >
                  <MessageCircle size={16} />
                  WhatsApp Now
                </a>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-3 bg-forest text-white py-4 font-mono-caps text-[11px] tracking-widest uppercase"
                >
                  <Phone size={16} />
                  Call {companyInfo.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setEnquiryOpen(false)}
                  className="flex items-center justify-center gap-3 border border-gray-200 dark:border-white/20 text-forest dark:text-white py-4 font-mono-caps text-[11px] tracking-widest uppercase hover:border-forest transition-colors"
                >
                  Fill Enquiry Form
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
