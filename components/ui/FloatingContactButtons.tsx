'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { getWhatsAppUrl } from '@/lib/utils';

export function FloatingContactButtons() {
  const whatsappUrl = getWhatsAppUrl(
    companyInfo.whatsapp,
    'Hello Narayan Ecoplank, I would like to enquire about your WPC/PVC products.'
  );

  return (
    <div
      className="fixed bottom-24 left-4 md:bottom-6 md:left-6 z-50 flex flex-col gap-3"
      aria-label="Quick contact"
    >
      {/* WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/30"
      >
        <MessageCircle size={22} fill="white" className="text-white" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        {/* Tooltip */}
        <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded bg-forest-dark text-white text-xs font-mono-caps tracking-wider uppercase px-3 py-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden md:block">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call */}
      <motion.a
        href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-forest flex items-center justify-center shadow-xl shadow-forest/30 border border-gold/30"
      >
        <Phone size={20} fill="currentColor" className="text-gold" />
        {/* Tooltip */}
        <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded bg-forest-dark text-white text-xs font-mono-caps tracking-wider uppercase px-3 py-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden md:block">
          Call {companyInfo.phone}
        </span>
      </motion.a>
    </div>
  );
}
