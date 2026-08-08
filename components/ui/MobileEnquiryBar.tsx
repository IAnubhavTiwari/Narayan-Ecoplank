'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { getWhatsAppUrl } from '@/lib/utils';

export function MobileEnquiryBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex">
      <a
        href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
        className="flex-1 bg-forest text-white flex items-center justify-center gap-2 py-4 font-mono-caps text-[11px] tracking-wider uppercase"
      >
        <Phone size={14} />
        Call Us
      </a>
      <Link
        href="/contact"
        className="flex-1 bg-gold text-forest-dark flex items-center justify-center gap-2 py-4 font-mono-caps text-[11px] tracking-wider uppercase font-semibold"
      >
        Get Quote
      </Link>
      <a
        href={getWhatsAppUrl(companyInfo.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 font-mono-caps text-[11px] tracking-wider uppercase"
      >
        <MessageCircle size={14} />
        WhatsApp
      </a>
    </div>
  );
}
