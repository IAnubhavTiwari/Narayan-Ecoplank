'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Menu, ChevronDown, Moon, Sun, Phone } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { categories } from '@/data/categories';
import { companyInfo } from '@/data/company';
import { searchProducts } from '@/lib/products';
import type { Product } from '@/types';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', hasMega: true },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      setSearchResults(searchProducts(searchQuery).slice(0, 5));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const isHero = pathname === '/' && !scrolled;

  return (
    <>
      {/* Main Nav */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHero
            ? 'bg-forest/97 backdrop-blur-xl shadow-2xl h-[68px]'
            : 'bg-transparent h-20'
        )}
      >
        <div className="max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center">
              <span className="font-display text-gold text-sm font-bold tracking-wider">NE</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-white text-lg font-semibold tracking-wide">
                Narayan <span className="text-gold">Ecoplank</span>
              </span>
              <span className="font-mono-caps text-[8px] tracking-[0.2em] text-gold/60 uppercase mt-0.5">
                WPC & PVC Products
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'nav-link flex items-center gap-1 text-white/80 hover:text-gold',
                    pathname === link.href && 'text-gold'
                  )}
                >
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown
                      size={13}
                      className={cn(
                        'transition-transform duration-200',
                        megaOpen && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Mega Menu */}
                {link.hasMega && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] bg-white dark:bg-forest-dark shadow-2xl border border-gray-100 dark:border-forest-mid"
                        onMouseEnter={() => setMegaOpen(true)}
                        onMouseLeave={() => setMegaOpen(false)}
                      >
                        <div className="p-6">
                          <p className="font-mono-caps text-[9px] tracking-[0.25em] text-gold uppercase mb-4">
                            Product Categories
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {categories.map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/products?category=${cat.slug}`}
                                onClick={() => setMegaOpen(false)}
                                className="group flex items-start gap-3 p-3 rounded hover:bg-cream dark:hover:bg-white/5 transition-colors"
                              >
                                <div className="w-8 h-8 bg-forest/8 dark:bg-gold/15 rounded flex items-center justify-center shrink-0 mt-0.5">
                                  <span className="text-forest dark:text-gold text-xs">▪</span>
                                </div>
                                <div>
                                  <p className="font-mono-caps text-[11px] font-semibold text-forest dark:text-white group-hover:text-gold transition-colors">
                                    {cat.name}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-white/50 mt-0.5 leading-relaxed">
                                    {cat.productCount} product{cat.productCount > 1 ? 's' : ''}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
                            <Link
                              href="/products"
                              onClick={() => setMegaOpen(false)}
                              className="font-mono-caps text-[10px] tracking-widest text-gold hover:text-gold-dark uppercase flex items-center gap-2"
                            >
                              View All Products →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Phone */}
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
              title="Call Us"
            >
              <Phone size={14} />
              <span className="font-mono-caps text-[10px] tracking-wider">{companyInfo.phone}</span>
            </a>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-gold transition-colors"
              aria-label="Search"
            >
              <Search size={17} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden md:flex w-9 h-9 items-center justify-center text-white/70 hover:text-gold transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary-nep text-[10px] px-6 py-3"
            >
              Get Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-white"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-forest-dark pt-20 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 border-b border-white/8 font-display text-2xl text-white/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                  className="btn-primary-nep justify-center"
                >
                  <Phone size={14} />
                  {companyInfo.phone}
                </a>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center justify-center gap-2 border border-white/15 text-white/80 py-3.5 font-mono-caps text-[11px] tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-start justify-center pt-32 px-6"
            onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="w-full max-w-2xl"
            >
              <div className="flex items-center gap-4 border-b-2 border-gold pb-4">
                <Search size={20} className="text-gold shrink-0" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search products…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white text-xl outline-none placeholder:text-white/30 font-display"
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                    setSearchResults([]);
                  }}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {searchResults.length > 0 && (
                <div className="mt-4 flex flex-col gap-1">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                        setSearchResults([]);
                      }}
                      className="group flex items-center justify-between p-4 hover:bg-white/5 rounded transition-colors"
                    >
                      <div>
                        <p className="text-white font-medium group-hover:text-gold transition-colors">
                          {product.name}
                        </p>
                        <p className="text-white/40 text-sm mt-0.5">{product.category}</p>
                      </div>
                      <span className="text-gold/50 group-hover:text-gold transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              )}

              {searchQuery.length >= 2 && searchResults.length === 0 && (
                <p className="mt-6 text-white/40 text-center">
                  No products found for &quot;{searchQuery}&quot;
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
