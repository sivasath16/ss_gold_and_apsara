import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, MapPin, Ship, Plane } from 'lucide-react';

const countries = [
  { name: 'United Arab Emirates', flag: '🇦🇪' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'South Africa', flag: '🇿🇦' },
];

const GlobalPresenceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-grain overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-xs tracking-[0.2em] uppercase text-gold-dark bg-gold/10 rounded-full mb-4">
            Global Reach
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-earth mb-3">
            Exporting <span className="text-gold-dark">Excellence</span>
          </h2>
          <p className="text-earth-light max-w-xl mx-auto text-sm md:text-base">
            Our premium rice reaches over 40 countries on 6 continents.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Logistics Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=700&h=450&fit=crop"
                alt="Global Shipping Operations"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/60 to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-around">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gold mb-1">
                    <Ship className="w-5 h-5" />
                    <span className="font-display text-2xl font-bold">150+</span>
                  </div>
                  <p className="text-sm text-warmWhite/80">Ships Monthly</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gold mb-1">
                    <Plane className="w-5 h-5" />
                    <span className="font-display text-2xl font-bold">48hr</span>
                  </div>
                  <p className="text-sm text-warmWhite/80">Express Delivery</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gold mb-1">
                    <MapPin className="w-5 h-5" />
                    <span className="font-display text-2xl font-bold">40+</span>
                  </div>
                  <p className="text-sm text-warmWhite/80">Countries</p>
                </div>
              </div>
            </div>

            {/* Countries Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-2 bg-warmWhite rounded-lg px-3 py-2 shadow-sm border border-gold/10"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-xs text-earth-light truncate">{country.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/30 animate-[spin_30s_linear_infinite]" />
              
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border border-gold/20 animate-[spin_25s_linear_infinite_reverse]" />
              
              {/* Inner Ring */}
              <div className="absolute inset-16 rounded-full border border-gold/10 animate-[spin_20s_linear_infinite]" />

              {/* Globe Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gold/20 to-earth/30 shadow-gold overflow-hidden">
                  {/* World Map Pattern */}
                  <div 
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='%23C4A35A' stroke-width='0.5'/%3E%3Cpath d='M20,50 Q35,30 50,50 T80,50' fill='none' stroke='%23C4A35A' stroke-width='0.5'/%3E%3Cpath d='M20,40 Q35,60 50,40 T80,40' fill='none' stroke='%23C4A35A' stroke-width='0.5'/%3E%3Cpath d='M20,60 Q35,40 50,60 T80,60' fill='none' stroke='%23C4A35A' stroke-width='0.5'/%3E%3C/svg%3E")`,
                      backgroundSize: 'cover',
                      animation: 'globe-rotate 20s linear infinite',
                    }}
                  />
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-20 h-20 md:w-24 md:h-24 text-gold" />
                  </div>

                  {/* Highlight */}
                  <div className="absolute top-4 left-8 w-12 h-12 rounded-full bg-warmWhite/20 blur-md" />
                </div>
              </div>

              {/* Orbiting Markers */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gold shadow-gold"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: Math.cos((angle + Date.now() / 50) * Math.PI / 180) * 160 - 6,
                    y: Math.sin((angle + Date.now() / 50) * Math.PI / 180) * 160 - 6,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}

              {/* Floating Labels */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="absolute -top-4 right-0 bg-warmWhite px-3 py-1 rounded-full shadow-sm text-xs font-medium text-earth"
              >
                🇦🇪 Dubai
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="absolute top-1/4 -left-8 bg-warmWhite px-3 py-1 rounded-full shadow-sm text-xs font-medium text-earth"
              >
                🇬🇧 London
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
                className="absolute bottom-1/4 -right-4 bg-warmWhite px-3 py-1 rounded-full shadow-sm text-xs font-medium text-earth"
              >
                🇸🇬 Singapore
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.6 }}
                className="absolute -bottom-2 left-1/4 bg-warmWhite px-3 py-1 rounded-full shadow-sm text-xs font-medium text-earth"
              >
                🇺🇸 New York
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
