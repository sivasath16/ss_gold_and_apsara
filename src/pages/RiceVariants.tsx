import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, Star, Leaf, Award, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const allVariants = [
  {
    id: 1,
    name: 'Basmati Gold Supreme',
    type: 'Extra Long Grain Basmati',
    description: 'Our flagship premium basmati rice with exceptionally long grains that elongate up to 2.5x when cooked. Aged for 24 months for enhanced aroma and flavor. Perfect for celebrations and special occasions.',
    features: ['24-Month Aged', 'Extra Long Grain', 'Premium Aroma'],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&h=500&fit=crop',
    color: '#D4A853',
  },
  {
    id: 2,
    name: 'Apsara Premium Classic',
    type: 'Traditional Basmati',
    description: 'Traditional aged basmati rice carefully processed using time-honored methods. Delivers authentic taste with superior cooking quality and the signature basmati fragrance that defines excellence.',
    features: ['Traditional Process', 'Rich Flavor', 'Perfect Texture'],
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=700&h=500&fit=crop',
    color: '#C9B896',
  },
  {
    id: 3,
    name: 'Royal Sella Gold',
    type: 'Parboiled Golden Sella',
    description: 'Premium parboiled golden sella rice with enhanced nutritional value. The unique parboiling process locks in nutrients while providing easy-cook convenience and consistent fluffy results every time.',
    features: ['Nutrient Rich', 'Easy Cook', 'Golden Color'],
    image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=700&h=500&fit=crop',
    color: '#E8B74D',
  },
  {
    id: 4,
    name: 'Steam Basmati Elite',
    type: 'Steam-Processed Basmati',
    description: 'Steam-processed basmati that masterfully retains natural nutrients while delivering the signature elongation basmati is known for. Light, fluffy, and perfect for everyday gourmet cooking.',
    features: ['Natural Nutrients', 'Light & Fluffy', 'Everyday Premium'],
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=700&h=500&fit=crop',
    color: '#B8956B',
  },
  {
    id: 5,
    name: 'Organic Heritage Reserve',
    type: 'Certified Organic Basmati',
    description: 'Certified organic rice grown using traditional farming methods on pristine lands without any chemical interventions. For the conscious consumer who demands purity and sustainability.',
    features: ['100% Organic', 'Chemical Free', 'Sustainable'],
    image: 'https://images.unsplash.com/photo-1600298882525-0aa2c5eb7b2d?w=700&h=500&fit=crop',
    color: '#8B9A6B',
  },
  {
    id: 6,
    name: 'Daily Delight Basmati',
    type: 'Everyday Basmati',
    description: 'Premium quality basmati rice designed for everyday cooking without compromising on taste or quality. Affordable luxury for families who appreciate the finer things in life.',
    features: ['Value Pack', 'Great Taste', 'Daily Use'],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&h=500&fit=crop',
    color: '#A68B5B',
  },
  {
    id: 7,
    name: 'Biryani Special Reserve',
    type: 'Aged Biryani Rice',
    description: 'Specially curated for biryani lovers. Extra-long grains aged to perfection with exceptional absorption properties that soak up all the flavors while remaining separate and fluffy.',
    features: ['Biryani Perfect', 'High Absorption', 'Separate Grains'],
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=700&h=500&fit=crop',
    color: '#CD853F',
  },
  {
    id: 8,
    name: 'Brown Basmati Wellness',
    type: 'Whole Grain Brown Basmati',
    description: 'Nutritious whole grain brown basmati rice with the bran layer intact. Rich in fiber, vitamins, and minerals. The healthy choice for wellness-conscious families.',
    features: ['High Fiber', 'Whole Grain', 'Heart Healthy'],
    image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=700&h=500&fit=crop',
    color: '#8B7355',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
  },
};

const RiceVariants = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <Helmet>
        <title>Premium Rice Variants | SS GOLD AND APSARA</title>
        <meta 
          name="description" 
          content="Explore our complete collection of premium basmati rice variants. From aged basmati to organic options, find the perfect rice for every occasion."
        />
        <link rel="canonical" href="https://ssgoldapsara.com/rice-variants" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Header */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-earth/5 via-transparent to-transparent" />
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="container relative mx-auto px-4 md:px-8">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link to="/">
                <Button 
                  variant="ghost" 
                  className="mb-8 text-earth-light hover:text-earth hover:bg-gold/10 -ml-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>

              <div className="max-w-3xl">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-6 py-2 text-xs tracking-[0.25em] uppercase text-gold-dark bg-gold/10 rounded-full mb-6 border border-gold/20"
                >
                  Complete Collection
                </motion.span>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-earth mb-6 leading-tight">
                  Our Premium <span className="text-gold-dark">Rice Variants</span>
                </h1>
                
                <p className="text-lg md:text-xl text-earth-light leading-relaxed">
                  Each variety is meticulously selected, processed, and aged to deliver 
                  exceptional quality. Discover the perfect rice for every culinary creation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Variants Grid */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              ref={gridRef}
              variants={containerVariants}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              className="space-y-8 md:space-y-12"
            >
              {allVariants.map((variant, index) => (
                <motion.article
                  key={variant.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div 
                    className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center p-6 md:p-10 rounded-3xl transition-all duration-500 hover:shadow-xl ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${variant.color}08 0%, transparent 50%)`,
                    }}
                  >
                    {/* Hover Glow */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 60px ${variant.color}10, 0 0 60px ${variant.color}05`,
                      }}
                    />

                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-2xl">
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ boxShadow: `0 20px 60px -20px ${variant.color}60` }}
                        />
                        <img
                          src={variant.image}
                          alt={variant.name}
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`} />
                        
                        {/* Floating Badge */}
                        <div className="absolute top-4 left-4">
                          <span 
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase font-medium rounded-full backdrop-blur-md"
                            style={{ 
                              background: `${variant.color}30`,
                              color: 'white',
                              border: `1px solid ${variant.color}50`
                            }}
                          >
                            <Award className="w-3 h-3" />
                            Export Grade
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`space-y-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div>
                        <span 
                          className="text-xs tracking-[0.2em] uppercase font-medium"
                          style={{ color: variant.color }}
                        >
                          {variant.type}
                        </span>
                        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-earth mt-2 group-hover:text-gold-dark transition-colors duration-300">
                          {variant.name}
                        </h2>
                      </div>
                      
                      <p className="text-earth-light leading-relaxed">
                        {variant.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3">
                        {variant.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-card border border-border text-earth-light"
                          >
                            {i === 0 && <Star className="w-3 h-3" style={{ color: variant.color }} />}
                            {i === 1 && <Leaf className="w-3 h-3" style={{ color: variant.color }} />}
                            {i === 2 && <Package className="w-3 h-3" style={{ color: variant.color }} />}
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Quality Rating */}
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-4 h-4 fill-current"
                              style={{ color: variant.color }}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-earth-light">Premium Quality</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-earth relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23C4A35A' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
          
          <div className="container relative mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-warmWhite mb-6">
                Ready to Order?
              </h2>
              <p className="text-warmWhite/70 text-lg mb-10">
                Contact our export team for wholesale inquiries, pricing, and global shipping options.
              </p>
              <Link to="/#contact">
                <Button 
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-earth font-semibold px-10 py-7 text-lg rounded-full transition-all duration-300 hover:shadow-gold"
                >
                  Get Export Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default RiceVariants;
