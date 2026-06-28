import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    const targetPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1.5 seconds for slow scroll
    let startTime: number | null = null;

    const easeInCubic = (t: number) => {
      return t * t * t;
    };

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeInCubic(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Parallax Video Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/10/13/184811-874264378_small.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      
      {/* Film Grain Effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_50px_rgba(0,0,0,0.4)]" />

      {/* Decorative Elements */}
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-[10%] w-32 h-32 border border-gold/20 rounded-full" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-32 right-[15%] w-24 h-24 border border-gold/15 rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-gold/10 rounded-full" 
        />
      </motion.div>

      {/* Content with Parallax */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={showContent ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="inline-block"
          >
            <span className="px-8 py-2.5 text-xs tracking-[0.35em] uppercase text-gold-light/90 border border-gold/40 rounded-full backdrop-blur-sm bg-black/10">
              Premium Quality Rice
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-wide text-warmWhite leading-none"
          >
            <span className="block">SS GOLD</span>
            <span className="text-gold">&</span>
            <span className="block">APSARA</span>
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={showContent ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
            className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-warmWhite/85 tracking-widest"
          >
            World's Best Rice
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="text-sm md:text-base text-warmWhite/50 tracking-[0.3em] uppercase font-light"
          >
            Exporting Excellence Since 1995
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.button
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          onClick={scrollToNext}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-black hover:text-gold transition-colors duration-500 cursor-pointer group"
        >
          <span className="text-[15px] font-bold text-white tracking-[0.4em] uppercase">Discover</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ChevronDown className="w-5 h-5 relative z-10 text-white" />
          </motion.div>
        </motion.button> */}
      </motion.div>

      {/* Bottom Fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
    </section>
  );
};

export default HeroSection;
