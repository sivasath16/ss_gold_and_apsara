import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutCEOSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Fade in when entering, fade out when leaving
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [60, 0, 0, -60]
  );

  const imageX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [-50, 0]
  );

  const textX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [50, 0]
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-section overflow-hidden min-h-[80vh] flex items-center"
    >
      <motion.div 
        style={{ opacity, y }}
        className="container mx-auto px-4 md:px-8"
      >
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* CEO Image */}
          <motion.div
            style={{ x: imageX }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto">
              {/* Decorative Frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold/30 rounded-xl" />
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold/20 rounded-xl" />
              
              {/* Image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-card">
                <img
                  src="assests/nanna.png"
                  alt="CEO Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/40 to-transparent" />
              </div>

              {/* Name Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-warmWhite px-6 py-3 rounded-xl shadow-card"
              >
                <p className="font-display text-lg font-semibold text-earth">Mallikarjuna Naidu Kommi</p>
                <p className="text-xs text-muted-foreground text-center">Founder & CEO</p>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            style={{ x: textX }}
            className="space-y-6"
          >
            {/* Section Label */}
            <div>
              <span className="inline-block px-4 py-1 text-xs tracking-[0.2em] uppercase text-gold-dark bg-gold/10 rounded-full">
                Leadership
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-earth leading-tight">
              A Vision for <span className="text-gold-dark">Excellence</span>
            </h2>

            {/* Decorative Line */}
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full" />

            {/* Description */}
            <div className="space-y-4 text-earth-light leading-relaxed text-sm md:text-base">
              <p>
                With over three decades of experience in the rice industry, our CEO has transformed 
                SS GOLD AND APSARA into one of the most trusted names in premium rice of South India.
              </p>
              <p>
                His unwavering commitment to quality, sustainable farming practices, and farmer welfare 
                has established new benchmarks in the industry.
              </p>
              <p className="italic text-earth/80">
                "Every grain we process and provide carries the legacy of Indian agriculture and the promise of 
                uncompromising quality."
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-gold-dark">30+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-gold-dark">40+</p>
                <p className="text-xs text-muted-foreground">Countries Served</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-gold-dark">1000+</p>
                <p className="text-xs text-muted-foreground">Partner Farmers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCEOSection;
