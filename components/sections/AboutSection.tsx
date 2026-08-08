'use client';

import Image from 'next/image';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

const wpcPoints = [
  'Engineered from wood fibers and plastic polymers',
  'Natural wood warmth with polymer durability',
  '100% Waterproof — won\'t absorb moisture',
  'Termite & borer proof, forever',
];

const pvcPoints = [
  'Strong, lightweight synthetic composite',
  'Completely waterproof and corrosion resistant',
  'Zero maintenance surface — just wipe clean',
  'Pest resistant and hygienic',
];

export function AboutSection() {
  return (
    <section id="about" className="bg-cream dark:bg-forest-dark py-28 md:py-36 transition-colors">
      <div className="section-padding">
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label justify-center">Our Materials</p>
          <h2 className="font-display text-forest dark:text-white text-display mb-5" style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}>
            The Science Behind <em className="text-gold not-italic">Better</em> Buildings
          </h2>
          <p className="text-gray-500 dark:text-white/60 text-lg leading-relaxed font-light">
            WPC and PVC composites represent the next generation of building materials — stronger, smarter, and more sustainable than traditional timber and plastics.
          </p>
        </Reveal>

        {/* Two materials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* WPC */}
          <Reveal delay={0.1}>
            <div className="bg-white dark:bg-forest/40 border border-gray-100 dark:border-white/10 p-10 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-forest/8 dark:bg-gold/15 flex items-center justify-center shrink-0">
                  <span className="font-display text-forest dark:text-gold font-bold text-lg">WPC</span>
                </div>
                <div>
                  <h3 className="font-display text-forest dark:text-white text-2xl font-semibold">Wood Polymer Composite</h3>
                  <p className="font-mono-caps text-[9px] tracking-widest text-gold uppercase mt-1">
                    The Strength of Wood, The Durability of Polymer
                  </p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-white/60 leading-relaxed mb-6 font-light">
                WPC is created by blending natural wood fibers with high-performance plastic polymers under heat and pressure. The result is a material that captures wood&apos;s natural appearance and warmth while surpassing it in every structural measure.
              </p>
              <ul className="flex flex-col gap-3">
                {wpcPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-600 dark:text-white/70">
                    <CheckCircle2 size={15} className="text-forest mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* PVC */}
          <Reveal delay={0.2}>
            <div className="bg-forest text-white p-10 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-gold font-bold text-lg">PVC</span>
                </div>
                <div>
                  <h3 className="font-display text-white text-2xl font-semibold">Polyvinyl Chloride Composite</h3>
                  <p className="font-mono-caps text-[9px] tracking-widest text-gold/70 uppercase mt-1">
                    Lightweight. Waterproof. Built for Life.
                  </p>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed mb-6 font-light">
                PVC composites combine synthetic polymers with reinforcing materials to produce panels, boards, and profiles that are completely impervious to water, pests, and environmental damage — ideal for demanding interior and exterior applications.
              </p>
              <ul className="flex flex-col gap-3">
                {pvcPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 size={15} className="text-gold mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Visual statement row */}
        <Reveal>
          <div className="relative overflow-hidden bg-forest-dark">
            <div className="grid md:grid-cols-3">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src="https://www.veilcraft.in/public/images/products/1758186677-wpc-grill.webp"
                  alt="WPC grill panel installation by Narayan Ecoplank"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="md:col-span-2 p-10 md:p-16 flex flex-col justify-center">
                <p className="font-mono-caps text-[9px] tracking-[0.3em] text-gold/70 uppercase mb-4">
                  Our Promise
                </p>
                <h3 className="font-display text-white text-3xl md:text-4xl font-semibold leading-tight mb-6">
                  No Rot. No Rust. No Termites.
                  <br />
                  <span className="text-gold">Just Long-Lasting Performance.</span>
                </h3>
                <p className="text-white/55 leading-relaxed max-w-xl font-light">
                  Every Narayan Ecoplank product is engineered to outlast and outperform traditional wood and conventional building materials — season after season, decade after decade.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
