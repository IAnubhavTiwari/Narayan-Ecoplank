import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Loader } from '@/components/ui/Loader';

export default function HomePage() {
  return (
    <>
      <Loader />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
