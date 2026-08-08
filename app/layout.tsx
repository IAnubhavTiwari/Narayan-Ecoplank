import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingContactButtons } from '@/components/ui/FloatingContactButtons';
import { MobileEnquiryBar } from '@/components/ui/MobileEnquiryBar';
import { BackToTop } from '@/components/ui/BackToTop';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  metadataBase: new URL('https://narayanecoplank.com'),
  title: {
    default: 'Narayan Ecoplank — Premium WPC & PVC Solutions',
    template: '%s | Narayan Ecoplank',
  },
  description:
    'Narayan Ecoplank (NEP) — India\'s premium WPC & PVC products for modern interiors. WPC Doors, Door Frames, Boards, PVC Panels, Louvers & Wall Panels. Waterproof, termite-proof, eco-friendly.',
  keywords: [
    'WPC doors India',
    'PVC panels',
    'WPC boards',
    'WPC door frame',
    'waterproof door',
    'termite proof door',
    'eco-friendly building materials',
    'Narayan Ecoplank',
    'NEP',
    'WPC Ghaziabad',
  ],
  authors: [{ name: 'Narayan Ecoplank' }],
  creator: 'Narayan Ecoplank',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://narayanecoplank.com',
    siteName: 'Narayan Ecoplank',
    title: 'Narayan Ecoplank — Premium WPC & PVC Solutions',
    description:
      'Premium WPC & PVC building materials for sustainable modern living. Doors, Frames, Boards, Panels, Louvers. Made to last.',
    images: [
      {
        url: 'https://www.veilcraft.in/public/images/products/1758176225-wpc-doors.webp',
        width: 1200,
        height: 900,
        alt: 'Narayan Ecoplank — WPC & PVC Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narayan Ecoplank — Premium WPC & PVC Solutions',
    description: 'Premium WPC & PVC building materials for sustainable modern living.',
    images: ['https://www.veilcraft.in/public/images/products/1758176225-wpc-doors.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Narayan Ecoplank',
              alternateName: 'NEP',
              url: 'https://narayanecoplank.com',
              description:
                'Premium WPC & PVC products for sustainable modern living.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: companyInfo.city,
                addressRegion: companyInfo.state,
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: companyInfo.phone,
                contactType: 'Sales',
                availableLanguage: ['Hindi', 'English'],
              },
              sameAs: Object.values(companyInfo.social).filter((url) => url && url !== '#'),
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContactButtons />
          <MobileEnquiryBar />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
