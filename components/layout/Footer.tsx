import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { categories } from '@/data/categories';
import { getWhatsAppUrl } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-white">
      {/* Top Bar */}
      <div className="border-b border-white/8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono-caps text-[10px] tracking-[0.25em] text-gold/70 uppercase">
            Sustainable Living, Better Future
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors font-mono-caps text-[10px] tracking-wider"
            >
              <Phone size={12} />
              {companyInfo.phone}
            </a>
            <a
              href={getWhatsAppUrl(companyInfo.whatsapp, 'Hello, I would like to enquire about NEP products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-nep text-[9px] px-5 py-2.5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center">
                <span className="font-display text-gold font-bold tracking-wider">NE</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-white text-lg font-semibold">
                  Narayan <span className="text-gold">Ecoplank</span>
                </span>
                <span className="font-mono-caps text-[7px] tracking-[0.2em] text-gold/50 uppercase mt-0.5">
                  WPC & PVC Products
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[260px]">
              Pioneering sustainable building materials for modern India. Premium WPC & PVC products built to last a lifetime.
            </p>
            <p className="font-display italic text-gold/60 text-sm mb-8">
              &ldquo;{companyInfo.tagline}&rdquo;
            </p>

            {/* Social */}
            {Object.values(companyInfo.social).some((url) => url && url !== '#') && (
              <div className="flex gap-3">
                {Object.entries(companyInfo.social).map(([platform, url]) => (
                  url && url !== '#' && (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={platform}
                      className="w-9 h-9 border border-white/15 flex items-center justify-center hover:bg-gold hover:border-gold transition-all group"
                    >
                      <span className="font-mono-caps text-[9px] text-white/60 group-hover:text-forest-dark transition-colors uppercase">
                        {platform.slice(0, 2)}
                      </span>
                    </a>
                  )
                ))}
              </div>
            )}
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono-caps text-[10px] tracking-[0.25em] text-gold uppercase mb-6 pb-3 border-b border-white/8">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-white/50 text-sm hover:text-gold transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono-caps text-[10px] tracking-[0.25em] text-gold uppercase mb-6 pb-3 border-b border-white/8">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About NEP', href: '/#about' },
                { label: 'Why Choose Us', href: '/#why' },
                { label: 'FAQ', href: '/#faq' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 text-sm hover:text-gold transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-caps text-[10px] tracking-[0.25em] text-gold uppercase mb-6 pb-3 border-b border-white/8">
              Contact
            </h4>
            <div className="flex flex-col gap-5">
              <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="flex items-start gap-3 group">
                <Phone size={15} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono-caps text-[9px] tracking-wider text-gold/60 uppercase mb-0.5">Phone</p>
                  <p className="text-white/70 text-sm group-hover:text-gold transition-colors">{companyInfo.phone}</p>
                </div>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-3 group">
                <Mail size={15} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono-caps text-[9px] tracking-wider text-gold/60 uppercase mb-0.5">Email</p>
                  <p className="text-white/70 text-sm group-hover:text-gold transition-colors">{companyInfo.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono-caps text-[9px] tracking-wider text-gold/60 uppercase mb-0.5">Location</p>
                  <p className="text-white/70 text-sm">{companyInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono-caps text-[9px] tracking-wider text-gold/60 uppercase mb-0.5">Hours</p>
                  <p className="text-white/70 text-sm">{companyInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/6">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {currentYear} Narayan Ecoplank (NEP). All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs">
            WPC & PVC Products — {companyInfo.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
