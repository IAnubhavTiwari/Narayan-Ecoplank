import { Suspense } from 'react';
import type { Metadata } from 'next';
import { ProductsClient } from './ProductsClient';

export const metadata: Metadata = {
  title: 'All Products — WPC Doors, Boards, PVC Panels & More',
  description:
    'Explore the complete range of Narayan Ecoplank WPC and PVC products — doors, door frames, boards, wall panels, louvers, and fluted panels. Filter by category.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-forest-dark pt-20 transition-colors">
      {/* Hero */}
      <div className="bg-forest-dark py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-mono-caps text-[10px] tracking-[0.25em] text-gold/70 uppercase mb-4 flex items-center gap-3">
            <span className="w-10 h-px bg-gold/40 block" />
            Our Collection
          </p>
          <h1
            className="font-display text-white"
            style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}
          >
            All <em className="text-gold not-italic">Products</em>
          </h1>
        </div>
      </div>

      <Suspense fallback={<div className="py-20 text-center text-gray-400 dark:text-white/40">Loading products…</div>}>
        <ProductsClient />
      </Suspense>
    </div>
  );
}
