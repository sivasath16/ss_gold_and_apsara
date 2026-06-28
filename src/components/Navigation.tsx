import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompressed, setIsCompressed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    // Compress on scroll down, expand on scroll up
    if (latest > lastScrollY && latest > 100) {
      setIsCompressed(true);
    } else {
      setIsCompressed(false);
    }
    setLastScrollY(latest);
  });

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'CEO', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Locations', href: '#locations' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'top-4 left-0 right-0 flex justify-center'
          : 'top-0 left-0 right-0'
      }`}
    >
      <div 
        className={`transition-all duration-500 ease-out ${
          isScrolled 
            ? 'bg-black/30 backdrop-blur-xl shadow-lg border border-gold/10 rounded-3xl' 
            : 'bg-transparent'
        }`}
      >
        <div className={`mx-auto px-4 md:px-6 transition-all duration-300 ${
          isScrolled ? '' : 'container'
        }`}>
          <div className={`flex items-center transition-all duration-300 ${                                                                                   
            isScrolled ? 'h-16 justify-center gap-4 text-white' : 'h-16 md:h-20 justify-between'
          }`}>
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`font-display font-semibold transition-all duration-300 ${
                isCompressed ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
              } ${
                isScrolled ? 'text-warmWhite' : 'text-warmWhite'
              }`}>
                SS GOLD <span className="text-gold">&</span> APSARA
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  whileHover={{ y: -2 }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'text-warmWhite/80 hover:text-gold-dark hover:bg-gold/10' 
                      : 'text-warmWhite/80 hover:text-warmWhite hover:bg-warmWhite/10'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className={`ml-2 bg-gold hover:bg-gold-dark text-earth font-semibold rounded-xl transition-all duration-300 ${
                    isCompressed ? 'px-4 py-2 text-sm' : 'px-6 py-2'
                  }`}
                >
                  Get Quote
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors ${
                isScrolled || isOpen 
                  ? 'text-earth hover:bg-gold/10' 
                  : 'text-warmWhite hover:bg-warmWhite/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-warmWhite/95 backdrop-blur-xl lg:hidden"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => scrollToSection(link.href)}
              className="font-display text-2xl text-warmwhite hover:text-gold-dark transition-colors"
            >
              {link.label}
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gold hover:bg-gold-dark text-earth font-semibold px-8 py-6 text-lg rounded-xl"
            >
              Get Quote
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
