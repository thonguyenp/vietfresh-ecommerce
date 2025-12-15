import Hero from '@/components/home/Hero';
import ProductsOverview from '@/components/home/ProductsOverview';
import CategoryHighlight from '@/components/home/CategoryHighlight';
import FarmHighlight from '@/components/home/FarmHighlight';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import StatsCounter from '@/components/home/StatsCounter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsOverview />
      <CategoryHighlight />
      <FarmHighlight />
      <WhyChooseUs />
      <StatsCounter />
      <Testimonials />
    </>
  );
}
