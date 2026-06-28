import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { TrendingUp, Users, Package, Globe } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}

const Counter = ({ end, suffix = '', duration = 2, inView }: CounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (value) => setDisplayValue(Math.floor(value)),
    });

    return () => controls.stop();
  }, [end, duration, inView]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const metrics = [
  {
    icon: TrendingUp,
    value: 500,
    suffix: 'M+',
    label: 'Annual Sales (USD)',
    description: 'Revenue generated worldwide',
  },
  {
    icon: Users,
    value: 15000,
    suffix: '+',
    label: 'Happy Customers',
    description: 'Satisfied clients globally',
  },
  {
    icon: Package,
    value: 250000,
    suffix: '+',
    label: 'Orders Delivered',
    description: 'Successful shipments',
  },
  {
    icon: Globe,
    value: 75000,
    suffix: '+',
    label: 'Tons Shipped',
    description: 'Premium rice exported',
  },
];

const BusinessMetricsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="metrics"
      ref={ref}
      className="py-16 md:py-20 bg-earth relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 text-xs tracking-[0.2em] uppercase text-gold bg-gold/10 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-warmWhite mb-3">
            Numbers That <span className="text-gold">Speak</span>
          </h2>
          <p className="text-warmWhite/70 max-w-xl mx-auto text-sm md:text-base">
            Our commitment to excellence has made us a leader in premium rice exports.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-warmWhite/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-5 md:p-6 text-center hover:bg-warmWhite/10 hover:border-gold/40 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: 'spring' }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/20 mb-4 group-hover:bg-gold/30 transition-colors"
                >
                  <metric.icon className="w-6 h-6 text-gold" />
                </motion.div>

                {/* Number */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  className="font-display text-3xl md:text-4xl font-bold text-gold mb-1"
                >
                  <Counter end={metric.value} suffix={metric.suffix} inView={inView} />
                </motion.p>

                {/* Label */}
                <p className="font-display text-sm md:text-base text-warmWhite mb-0.5">
                  {metric.label}
                </p>

                {/* Description */}
                <p className="text-xs text-warmWhite/50 hidden md:block">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessMetricsSection;
