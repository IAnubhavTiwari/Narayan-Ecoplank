'use client';

import { motion } from 'framer-motion';
import {
  Droplets,
  Bug,
  Flame,
  Sun,
  Wrench,
  Leaf,
  TrendingDown,
  Clock,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const reasons = [
  {
    icon: Droplets,
    title: '100% Waterproof',
    desc: 'Completely impervious to moisture — even submerged. No swelling, no warping, no delamination. Ideal for kitchens, bathrooms and coastal regions.',
  },
  {
    icon: Bug,
    title: 'Termite & Borer Proof',
    desc: 'Zero chemical treatment ever needed. WPC and PVC composites offer permanent, inherent protection against termites, borers, fungi, and bacteria.',
  },
  {
    icon: Flame,
    title: 'Fire Retardant',
    desc: 'Our WPC door frames are self-extinguishing and do not catch fire on their own — a critical safety advantage over conventional timber.',
  },
  {
    icon: Sun,
    title: 'UV Stable',
    desc: 'UV-stable grades resist fading and surface degradation even under prolonged direct sunlight — perfect for exterior facade and outdoor applications.',
  },
  {
    icon: Wrench,
    title: 'Easy to Work With',
    desc: 'Standard carpentry tools are sufficient — no special equipment needed. WPC frames save up to 30% in labor costs vs. traditional wooden alternatives.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'Made with recycled materials and engineered to last decades, NEP products reduce demand for virgin timber and help preserve natural forests.',
  },
  {
    icon: TrendingDown,
    title: 'Zero Maintenance',
    desc: 'No painting, polishing, or chemical treatment — ever. A simple wipe-down is all that is needed to keep NEP products looking pristine.',
  },
  {
    icon: Clock,
    title: '20+ Year Lifespan',
    desc: 'Engineered to remain structurally sound and visually appealing for decades, delivering far greater long-term value than natural wood.',
  },
];

const comparisonRows = [
  { feature: 'Water Resistance', wpc: '100% Waterproof', wood: 'Absorbs moisture' },
  { feature: 'Termite Protection', wpc: 'Permanently Proof', wood: 'Requires treatment' },
  { feature: 'Fire Safety', wpc: 'Self-Extinguishing', wood: 'Highly flammable' },
  { feature: 'Maintenance', wpc: 'Zero required', wood: 'Regular painting/polish' },
  { feature: 'Lifespan', wpc: '20+ years', wood: 'Variable / shorter' },
  { feature: 'Labor Cost', wpc: '30% less', wood: 'Standard' },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="py-28 md:py-36 bg-white dark:bg-forest-dark transition-colors">
      <div className="section-padding">
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label justify-center">Our Commitment</p>
          <h2
            className="font-display text-forest dark:text-white mb-5"
            style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
          >
            Why Modern Builders
            <br />
            <em className="text-gold not-italic">Choose NEP</em>
          </h2>
          <p className="text-gray-500 dark:text-white/60 text-lg leading-relaxed font-light">
            Performance benchmarks that traditional wood simply cannot match — across every measure that matters to architects, builders, and homeowners.
          </p>
        </Reveal>

        {/* Reasons grid */}
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 mb-20">
          {reasons.map((reason, i) => (
            <StaggerItem key={reason.title}>
              <motion.div
                whileHover={{ backgroundColor: '#173F2A' }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-forest/30 p-8 flex flex-col gap-5 h-full"
              >
                <div className="w-11 h-11 bg-forest/8 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <reason.icon size={20} className="text-forest group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-forest dark:text-white group-hover:text-white text-lg font-semibold mb-2 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-white/50 group-hover:text-white/60 leading-relaxed font-light transition-colors">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Comparison table */}
        <Reveal>
          <div className="bg-cream dark:bg-forest/30 border border-gray-100 dark:border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-forest text-white">
              <div className="p-5 font-mono-caps text-[10px] tracking-[0.2em] uppercase text-white/50">Feature</div>
              <div className="p-5 font-mono-caps text-[10px] tracking-[0.2em] uppercase text-gold border-l border-white/10">NEP WPC/PVC</div>
              <div className="p-5 font-mono-caps text-[10px] tracking-[0.2em] uppercase text-white/50 border-l border-white/10">Traditional Wood</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-gray-100 dark:border-white/10 last:border-0 ${i % 2 === 0 ? 'bg-white dark:bg-forest/20' : 'bg-cream dark:bg-forest/35'}`}
              >
                <div className="p-5 font-mono-caps text-[11px] font-semibold text-forest dark:text-white tracking-wide">
                  {row.feature}
                </div>
                <div className="p-5 text-sm text-forest dark:text-gold font-medium border-l border-gray-100 dark:border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {row.wpc}
                </div>
                <div className="p-5 text-sm text-gray-400 dark:text-white/40 border-l border-gray-100 dark:border-white/10">{row.wood}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stats banner */}
        <Reveal className="mt-12 bg-forest-dark text-white p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: 100, suffix: '%', label: 'Waterproof Rating' },
            { num: 30, suffix: '%', label: 'Labor Cost Saving' },
            { num: 2200, suffix: 'N', label: 'Screw Holding Force' },
            { num: 20, suffix: '+', label: 'Year Lifespan' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gold font-semibold mb-2">
                <AnimatedCounter end={stat.num} suffix={stat.suffix} />
              </p>
              <p className="font-mono-caps text-[9px] tracking-[0.2em] text-white/40 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
