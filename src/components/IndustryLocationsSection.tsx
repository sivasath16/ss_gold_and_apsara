import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Factory, Warehouse, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';

const locations = [
  {
    id: 1,
    name: 'Karnal Processing Unit',
    type: 'Main Factory',
    address: 'Karnal, Haryana, India',
    description: 'State-of-the-art processing facility with 50,000 MT annual capacity',
    icon: Factory,
    coordinates: { x: 52, y: 28 },
  },
  {
    id: 2,
    name: 'Amritsar Mill',
    type: 'Rice Mill',
    address: 'Amritsar, Punjab, India',
    description: 'Traditional milling with modern quality control',
    icon: Factory,
    coordinates: { x: 48, y: 25 },
  },
  {
    id: 3,
    name: 'Delhi Export Hub',
    type: 'Distribution Center',
    address: 'New Delhi, India',
    description: 'Central logistics hub for international shipments',
    icon: Warehouse,
    coordinates: { x: 53, y: 30 },
  },
  {
    id: 4,
    name: 'Mumbai Port Facility',
    type: 'Export Terminal',
    address: 'Mumbai, Maharashtra, India',
    description: 'Direct port access for efficient global shipping',
    icon: Truck,
    coordinates: { x: 48, y: 42 },
  },
];

const IndustryLocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-cycle through locations
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      id="locations"
      className="py-16 md:py-20 bg-gradient-to-b from-background via-grain/30 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-5 py-1.5 text-xs tracking-[0.2em] uppercase text-gold-dark bg-gold/10 rounded-full mb-4 border border-gold/20">
            Our Infrastructure
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-earth mb-3">
            Industry <span className="text-gold-dark">Locations</span>
          </h2>
          <p className="text-earth-light max-w-xl mx-auto text-sm md:text-base">
            Strategically located facilities across India for efficient global distribution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Map Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/5 via-transparent to-gold/5 border border-gold/20 overflow-hidden">
                {/* India Map SVG Outline */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full p-8"
                  style={{ opacity: 0.15 }}
                >
                  <path
                    d="M45,15 L55,12 L65,18 L70,25 L68,35 L72,42 L70,50 L65,55 L60,65 L55,75 L50,80 L45,75 L40,65 L38,55 L35,50 L38,42 L35,35 L40,25 L45,18 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gold"
                  />
                </svg>

                {/* Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, hsl(var(--gold)) 1px, transparent 1px),
                      linear-gradient(to bottom, hsl(var(--gold)) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Location Markers */}
                {locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { 
                      scale: activeLocation === index ? 1.2 : 1, 
                      opacity: 1 
                    } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.15,
                      scale: { duration: 0.3 }
                    }}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => setActiveLocation(index)}
                  >
                    {/* Pulse Effect */}
                    {activeLocation === index && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gold/30"
                          animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          style={{ width: 20, height: 20, marginLeft: -4, marginTop: -4 }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gold/20"
                          animate={{ scale: [1, 3], opacity: [0.4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                          style={{ width: 20, height: 20, marginLeft: -4, marginTop: -4 }}
                        />
                      </>
                    )}
                    
                    {/* Marker */}
                    <div 
                      className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                        activeLocation === index 
                          ? 'bg-gold shadow-gold scale-125' 
                          : 'bg-gold/60 hover:bg-gold hover:scale-110'
                      }`}
                    >
                      <MapPin 
                        className={`absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 transition-all duration-300 ${
                          activeLocation === index ? 'text-gold' : 'text-gold/60'
                        }`}
                      />
                    </div>

                    {/* Tooltip */}
                    <div className={`absolute left-1/2 -translate-x-1/2 -top-16 whitespace-nowrap bg-earth text-warmWhite px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                      activeLocation === index ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-1 pointer-events-none'
                    }`}>
                      {location.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-earth rotate-45" />
                    </div>
                  </motion.div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {locations.map((loc, i) => {
                    const nextLoc = locations[(i + 1) % locations.length];
                    return (
                      <motion.line
                        key={`line-${i}`}
                        x1={`${loc.coordinates.x}%`}
                        y1={`${loc.coordinates.y}%`}
                        x2={`${nextLoc.coordinates.x}%`}
                        y2={`${nextLoc.coordinates.y}%`}
                        stroke="hsl(var(--gold))"
                        strokeWidth="0.5"
                        strokeDasharray="4,4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 0.3 } : {}}
                        transition={{ duration: 1, delay: 1 + i * 0.2 }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/20 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/10 rounded-full" />
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => setActiveLocation(index)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeLocation === index 
                      ? 'bg-card shadow-card border border-gold/20' 
                      : 'bg-transparent hover:bg-card/50 border border-transparent'
                  }`}
                >
                  {/* Active Indicator */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      scaleY: activeLocation === index ? 1 : 0,
                      opacity: activeLocation === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gold rounded-r-full"
                  />

                  <div className="flex gap-5">
                    {/* Icon */}
                    <div 
                      className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeLocation === index 
                          ? 'bg-gold/20 text-gold' 
                          : 'bg-muted text-earth-light'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className={`font-display text-lg font-semibold transition-colors duration-300 ${
                            activeLocation === index ? 'text-gold-dark' : 'text-earth'
                          }`}>
                            {location.name}
                          </h3>
                          <span className="text-xs tracking-wider uppercase text-earth-light">
                            {location.type}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-earth-light mb-2">
                        {location.address}
                      </p>
                      
                      <motion.p
                        initial={false}
                        animate={{ 
                          height: activeLocation === index ? 'auto' : 0,
                          opacity: activeLocation === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-earth-light/80 overflow-hidden"
                      >
                        {location.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLocationsSection;
