import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Lineup from '@/components/Lineup';
import Tickets from '@/components/Tickets';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Features />
      <Lineup />
      <Tickets />
      <Gallery />
      <Footer />
    </div>
  );
}
