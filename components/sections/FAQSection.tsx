'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { faqs } from '@/data/faqs';

export function FAQSection() {
  const [open, setOpen] = useState<string | null>('f1');

  return (
    <section id="faq" className="py-28 md:py-36 bg-cream dark:bg-forest-dark transition-colors">
      <div className="section-padding">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <Reveal className="lg:sticky lg:top-28">
            <p className="section-label">Common Questions</p>
            <h2
              className="font-display text-forest dark:text-white mb-6"
              style={{ fontSize: 'clamp(32px, 3.5vw, 52px)' }}
            >
              Everything You
              <br />
              Need to <em className="text-gold not-italic">Know</em>
            </h2>
            <p className="text-gray-500 dark:text-white/60 leading-relaxed font-light mb-8">
              Can&apos;t find your answer? Our team is available 24/7, every day of the week, to assist with any product or project queries.
            </p>
            <a
              href="tel:+919153622788"
              className="btn-primary-nep inline-flex"
            >
              Call Us Now
            </a>
          </Reveal>

          {/* Right */}
          <Reveal className="flex flex-col gap-2">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-forest/30 border border-gray-100 dark:border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-forest dark:text-white text-lg font-semibold leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 bg-cream dark:bg-white/10 flex items-center justify-center shrink-0">
                    {open === faq.id ? (
                      <Minus size={15} className="text-gold" />
                    ) : (
                      <Plus size={15} className="text-forest dark:text-white" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === faq.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-gray-100 dark:border-white/10">
                        <p className="text-gray-500 dark:text-white/60 leading-relaxed font-light text-[15px] pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
