'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { companyInfo } from '@/data/company';
import { getWhatsAppUrl } from '@/lib/utils';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/MBbTHGrFxskoEKoi6?g_st=awb';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  product: z.string().min(1, 'Please select a product category'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const productOptions = [
  'WPC Doors',
  'WPC Windows & Frames',
  'WPC Door Frames & Chaukhat',
  'WPC Boards',
  'WPC Grills & Jali',
  'Waterproof Doors',
  'PVC Range',
  'Other / Not Sure',
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Build WhatsApp message and open it
    const msg = `Hello Narayan Ecoplank,\n\nName: ${data.name}\nPhone: ${data.phone}${data.email ? `\nEmail: ${data.email}` : ''}\nProduct Interest: ${data.product}\n\nMessage: ${data.message}`;
    window.open(getWhatsAppUrl(companyInfo.whatsapp, msg), '_blank');
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-white dark:bg-forest-dark transition-colors">
      <div className="section-padding">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label justify-center">Get In Touch</p>
          <h2
            className="font-display text-forest dark:text-white mb-5"
            style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
          >
            Let&apos;s Build
            <br />
            <em className="text-gold not-italic">Something Great</em>
          </h2>
          <p className="text-gray-500 dark:text-white/60 text-lg leading-relaxed font-light">
            Send us your requirements and our team will get back to you within hours — or chat with us directly on WhatsApp.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          {/* Left — contact info */}
          <Reveal className="flex flex-col gap-8">
            <div className="bg-forest text-white p-10">
              <h3 className="font-display text-2xl font-semibold mb-2">Contact Details</h3>
              <div className="gold-divider" />
              <div className="flex flex-col gap-7 mt-6">
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gold/15 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono-caps text-[9px] tracking-widest text-gold/60 uppercase mb-1">Phone / WhatsApp</p>
                    <p className="text-white group-hover:text-gold transition-colors font-medium">{companyInfo.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gold/15 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono-caps text-[9px] tracking-widest text-gold/60 uppercase mb-1">Email</p>
                    <p className="text-white group-hover:text-gold transition-colors font-medium">{companyInfo.email}</p>
                  </div>
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-gold/15 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono-caps text-[9px] tracking-widest text-gold/60 uppercase mb-1">Address</p>
                    <p className="text-white group-hover:text-gold transition-colors font-medium">{companyInfo.address}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/15 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono-caps text-[9px] tracking-widest text-gold/60 uppercase mb-1">Working Hours</p>
                    <p className="text-white font-medium">{companyInfo.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(companyInfo.whatsapp, 'Hello, I would like to enquire about Narayan Ecoplank products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 font-mono-caps text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#1eb85a] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Map */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-56 overflow-hidden border border-gray-100 dark:border-white/10"
              aria-label="Open our location in Google Maps"
            >
              <iframe
                src="https://maps.google.com/maps?q=Narayan+Ecoplank&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Narayan Ecoplank location map"
              />
              <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/40 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-forest px-4 py-2 font-mono-caps text-[10px] tracking-widest uppercase flex items-center gap-2 shadow-lg">
                  Open in Google Maps <ExternalLink size={12} />
                </span>
              </div>
            </a>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.15}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-5 bg-cream dark:bg-forest/30 border border-gray-100 dark:border-white/10 p-16 text-center"
              >
                <CheckCircle size={56} className="text-forest dark:text-gold" />
                <h3 className="font-display text-forest dark:text-white text-2xl font-semibold">Message Sent!</h3>
                <p className="text-gray-500 dark:text-white/60 font-light max-w-xs">
                  WhatsApp has been opened with your enquiry. Our team will respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono-caps text-[9px] tracking-[0.2em] uppercase text-gray-500 dark:text-white/50 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      placeholder="Your name"
                      className="w-full border border-gray-200 dark:border-white/15 bg-cream dark:bg-forest/30 px-4 py-3.5 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 outline-none focus:border-forest transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block font-mono-caps text-[9px] tracking-[0.2em] uppercase text-gray-500 dark:text-white/50 mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 dark:border-white/15 bg-cream dark:bg-forest/30 px-4 py-3.5 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 outline-none focus:border-forest transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-mono-caps text-[9px] tracking-[0.2em] uppercase text-gray-500 dark:text-white/50 mb-2">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    placeholder="your@email.com (optional)"
                    className="w-full border border-gray-200 dark:border-white/15 bg-cream dark:bg-forest/30 px-4 py-3.5 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 outline-none focus:border-forest transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono-caps text-[9px] tracking-[0.2em] uppercase text-gray-500 dark:text-white/50 mb-2">
                    Product Interest *
                  </label>
                  <select
                    {...register('product')}
                    defaultValue=""
                    className="w-full border border-gray-200 dark:border-white/15 bg-cream dark:bg-forest/30 px-4 py-3.5 text-sm text-gray-800 dark:text-white outline-none focus:border-forest transition-colors appearance-none"
                  >
                    <option value="">Select a product category</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.product && (
                    <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono-caps text-[9px] tracking-[0.2em] uppercase text-gray-500 dark:text-white/50 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Describe your project or requirements..."
                    className="w-full border border-gray-200 dark:border-white/15 bg-cream dark:bg-forest/30 px-4 py-3.5 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 outline-none focus:border-forest transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-nep w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending…' : 'Send Enquiry via WhatsApp'}
                  <Send size={14} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
