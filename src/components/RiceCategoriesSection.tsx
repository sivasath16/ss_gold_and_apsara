import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export const riceCategories = [
  {
    id: 1,
    name: 'Basmati Gold',
    description: 'Extra-long grain premium basmati with exceptional aroma and fluffy texture. Perfect for biryanis and pulao.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=800&fit=crop',
    color: '#D4A853',
    accentLight: '#F5E6C8',
  },
  {
    id: 2,
    name: 'Apsara Premium',
    description: 'Traditional aged basmati rice, carefully processed for authentic taste and superior cooking quality.',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&h=800&fit=crop',
    color: '#C9B896',
    accentLight: '#EDE5D8',
  },
  {
    id: 3,
    name: 'Royal Sella',
    description: 'Parboiled golden sella rice with enhanced nutrition and easy-cook properties for consistent results.',
    image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=600&h=800&fit=crop',
    color: '#E8B74D',
    accentLight: '#FBF0D4',
  },
  {
    id: 4,
    name: 'Steam Basmati',
    description: 'Steam-processed basmati that retains natural nutrients while delivering the signature elongation.',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&h=800&fit=crop',
    color: '#B8956B',
    accentLight: '#E8DDD0',
  },
  {
    id: 5,
    name: 'Organic Heritage',
    description: 'Certified organic rice grown using traditional farming methods without any chemical interventions.',
    image: 'https://images.unsplash.com/photo-1600298882525-0aa2c5eb7b2d?w=600&h=800&fit=crop',
    color: '#8B9A6B',
    accentLight: '#D8E0C8',
  },
];

const RiceCategoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % riceCategories.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + riceCategories.length) % riceCategories.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || !inView) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, inView, nextSlide]);

  const currentCategory = riceCategories[currentIndex];

  const handleSackClick = () => {
    navigate('/rice-variants');
  };

  return (
    <section
      ref={ref}
      id="products"
      className="relative min-h-[85vh] flex items-center py-16 md:py-20 overflow-hidden transition-colors duration-1000"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${currentCategory.accentLight}40 0%, hsl(var(--background)) 50%, ${currentCategory.color}15 100%)`,
          }}
        />
      </AnimatePresence>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, ${currentCategory.color} 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            className="inline-block px-6 py-2 text-xs tracking-[0.25em] uppercase rounded-full mb-4 border transition-colors duration-500"
            style={{ 
              color: currentCategory.color,
              backgroundColor: `${currentCategory.color}15`,
              borderColor: `${currentCategory.color}30`
            }}
          >
            Our Collection
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-earth mb-4">
            Premium Rice <span style={{ color: currentCategory.color }} className="transition-colors duration-500">Categories</span>
          </h2>
        </motion.div>

        {/* Full-Width Variant View */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Rice Sack Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={handleSackClick}
                className="relative cursor-pointer group"
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: currentCategory.color }}
                />
                
                {/* Spotlight Effect */}
                <div 
                  className="absolute -inset-8 rounded-full opacity-20 blur-2xl"
                  style={{ 
                    background: `radial-gradient(circle, ${currentCategory.color} 0%, transparent 70%)` 
                  }}
                />

                {/* Rice Sack Image with Levitation */}
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div 
                    className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{
                      boxShadow: `0 30px 60px -20px ${currentCategory.color}50, 0 0 60px ${currentCategory.color}20`
                    }}
                  >
                    <img
                      src={currentCategory.image}
                      alt={currentCategory.name}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{ 
                        background: `linear-gradient(180deg, transparent 50%, ${currentCategory.color} 100%)` 
                      }}
                    />
                  </div>

                  {/* Premium Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md"
                    style={{ 
                      background: `${currentCategory.color}`,
                      color: '#fff'
                    }}
                  >
                    Export Grade
                  </motion.div>

                  {/* View All Hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: currentCategory.color }}
                  >
                    <span>View All Variants</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right - Variant Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h3 
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold transition-colors duration-500"
                  style={{ color: currentCategory.color }}
                >
                  {currentCategory.name}
                </h3>
                
                <p className="text-earth-light text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  {currentCategory.description}
                </p>

                {/* Quality Dots */}
                <div className="flex justify-center lg:justify-start gap-1.5 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-2 h-2 rounded-full transition-colors duration-500"
                      style={{ background: currentCategory.color }}
                    />
                  ))}
                  <span className="ml-2 text-xs text-earth-light">Premium Quality</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: `${currentCategory.color}40`,
                  color: currentCategory.color
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {riceCategories.map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="group p-1"
                  >
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === currentIndex ? 'w-8' : 'w-2 hover:w-4'
                      }`}
                      style={{ 
                        background: index === currentIndex 
                          ? currentCategory.color 
                          : `${currentCategory.color}40`
                      }}
                    />
                  </button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: `${currentCategory.color}40`,
                  color: currentCategory.color
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Button
                onClick={() => navigate('/rice-variants')}
                className="group font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: currentCategory.color,
                  color: '#fff'
                }}
              >
                Explore All Variants
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiceCategoriesSection;
