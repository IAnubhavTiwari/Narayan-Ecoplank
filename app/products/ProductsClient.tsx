'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, SlidersHorizontal, X } from 'lucide-react';
import { getAllProducts, searchProducts } from '@/lib/products';
import { categories } from '@/data/categories';

export function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const allProducts = getAllProducts();

  const filtered = useMemo(() => {
    let base =
      activeCategory === 'all'
        ? allProducts
        : allProducts.filter((p) => p.categorySlug === activeCategory);
    if (searchQuery.trim().length >= 2) {
      const results = searchProducts(searchQuery);
      base = base.filter((p) => results.some((r) => r.id === p.id));
    }
    return base;
  }, [activeCategory, searchQuery, allProducts]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-gray-200 dark:border-white/15 bg-white dark:bg-forest/30 dark:text-white text-sm outline-none focus:border-forest transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-forest"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`font-mono-caps text-[9px] tracking-[0.2em] uppercase px-4 py-2.5 border transition-all ${
              activeCategory === 'all'
                ? 'bg-forest text-white border-forest'
                : 'border-gray-200 dark:border-white/15 text-gray-500 dark:text-white/60 hover:border-forest hover:text-forest bg-white dark:bg-forest/30'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`font-mono-caps text-[9px] tracking-[0.2em] uppercase px-4 py-2.5 border transition-all ${
                activeCategory === cat.slug
                  ? 'bg-forest text-white border-forest'
                  : 'border-gray-200 dark:border-white/15 text-gray-500 dark:text-white/60 hover:border-forest hover:text-forest bg-white dark:bg-forest/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="font-mono-caps text-[10px] tracking-wider text-gray-400 dark:text-white/40 uppercase mb-8">
        {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <Link href={`/products/${product.slug}`} className="group block h-full">
                <div className="bg-white dark:bg-forest/30 border border-gray-100 dark:border-white/10 h-full flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
                  <div className="relative aspect-[16/10] overflow-hidden img-zoom">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-gold text-forest-dark font-mono-caps text-[8px] tracking-[0.2em] uppercase px-2.5 py-1">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="font-mono-caps text-[9px] tracking-[0.2em] text-gold uppercase mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-display text-forest dark:text-white text-xl font-semibold mb-3 group-hover:text-gold transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed font-light flex-1 mb-5">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                      <span className="font-mono-caps text-[9px] tracking-wider text-forest/50 dark:text-white/40 uppercase">
                        {product.features.length} features
                      </span>
                      <span className="font-mono-caps text-[10px] tracking-wider text-forest dark:text-white group-hover:text-gold transition-colors uppercase flex items-center gap-1">
                        View <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-display text-gray-300 dark:text-white/20 text-4xl mb-4">No products found</p>
          <p className="text-gray-400 dark:text-white/40 font-light">Try adjusting your search or filter.</p>
        </div>
      )}
    </div>
  );
}
