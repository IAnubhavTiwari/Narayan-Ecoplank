'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-28 md:py-36 bg-forest-dark overflow-hidden">
      <div className="section-padding">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label">
              <span className="w-10 h-px bg-gold block" />
              What Clients Say
            </p>
            <h2
              className="font-display text-white"
              style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
            >
              Trusted by Builders
              <br />
              <em className="text-gold not-italic">Across India</em>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/60 hover:bg-gold hover:text-forest-dark hover:border-gold transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 border border-white/20 flex items-center justify-center text-white/60 hover:bg-gold hover:text-forest-dark hover:border-gold transition-all"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-none w-[320px] md:w-[400px] bg-white/5 border border-white/8 p-8 flex flex-col gap-6"
              >
                {/* Quote icon */}
                <Quote size={28} className="text-gold/30" />

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/70 leading-relaxed font-light text-[15px] flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-white/8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="font-display text-gold font-semibold text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs mt-0.5">
                        {t.role}{t.company ? `, ${t.company}` : ''} · {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
