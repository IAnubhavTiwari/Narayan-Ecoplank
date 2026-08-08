import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us | Narayan Ecoplank',
  description:
    'Get in touch with Narayan Ecoplank for WPC and PVC doors, windows, frames, boards and more. Call, WhatsApp or send us an enquiry.',
  keywords: ['contact Narayan Ecoplank', 'WPC dealer contact', 'PVC products enquiry'],
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
