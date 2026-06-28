import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutCEOSection from '@/components/AboutCEOSection';
import RiceCategoriesSection from '@/components/RiceCategoriesSection';
import BusinessMetricsSection from '@/components/BusinessMetricsSection';
import CustomerReviewsSection from '@/components/CustomerReviewsSection';
import GlobalPresenceSection from '@/components/GlobalPresenceSection';
import IndustryLocationsSection from '@/components/IndustryLocationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SS GOLD AND APSARA | World's Best Premium Rice Exporters</title>
        <meta 
          name="description" 
          content="SS GOLD AND APSARA - Premium basmati rice exporters since 1995. Delivering the world's finest rice to 40+ countries. Export quality, trusted worldwide."
        />
        <meta name="keywords" content="basmati rice, premium rice, rice exporters, Indian rice, SS GOLD, APSARA rice, export quality rice" />
        <meta property="og:title" content="SS GOLD AND APSARA | World's Best Premium Rice" />
        <meta property="og:description" content="Premium basmati rice exporters since 1995. Delivering excellence to 40+ countries worldwide." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ssgoldapsara.com" />
      </Helmet>

      <main className="overflow-hidden">
        <Navigation />
        <section id="hero">
          <HeroSection />
        </section>
        <AboutCEOSection />
        <RiceCategoriesSection />
        <BusinessMetricsSection />
        <IndustryLocationsSection />
        <CustomerReviewsSection />
        <section id="global">
          <GlobalPresenceSection />
        </section>
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
