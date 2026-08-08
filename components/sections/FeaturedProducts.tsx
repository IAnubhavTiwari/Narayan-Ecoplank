'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { getFeaturedProducts } from '@/lib/products';

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-28 md:py-36 bg-cream-warm dark:bg-forest-dark transition-colors">
      <div className="section-padding">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label">Handpicked</p>
            <h2
              className="font-display text-forest dark:text-white text-display"
              style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
            >
              Featured <em className="text-gold not-italic">Products</em>
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 font-mono-caps text-[10px] tracking-[0.2em] uppercase text-forest dark:text-white hover:text-gold transition-colors"
          >
            All Products <ArrowRight size={14} />
          </Link>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <Link href={`/products/${product.slug}`} className="group block h-full">
                <div className="bg-white dark:bg-forest/30 h-full flex flex-col overflow-hidden card-hover border border-gray-100 dark:border-white/10">
                  {/* Image */}
                  <div className="relative aspect-[16/10] img-zoom overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-gold text-forest-dark font-mono-caps text-[8px] tracking-[0.2em] uppercase px-3 py-1.5">
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-gold text-forest-dark w-9 h-9 flex items-center justify-center">
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="font-mono-caps text-[9px] tracking-[0.2em] text-gold uppercase mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-display text-forest dark:text-white text-xl font-semibold mb-3 group-hover:text-gold transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed font-light mb-5 flex-1">
                      {product.shortDescription}
                    </p>

                    {/* Features pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="bg-cream dark:bg-white/10 text-forest dark:text-white text-[10px] font-mono-caps px-2.5 py-1 tracking-wide"
                        >
                          {f.split(' ').slice(0, 3).join(' ')}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                      <span className="font-mono-caps text-[9px] tracking-wider text-gray-400 dark:text-white/40 uppercase">
                        {product.category}
                      </span>
                      <span className="font-mono-caps text-[10px] tracking-wider text-forest dark:text-white group-hover:text-gold transition-colors uppercase flex items-center gap-1">
                        View Details <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 text-center">
          <Link href="/products" className="btn-primary-nep">
            View All Products <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
