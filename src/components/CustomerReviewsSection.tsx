import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    role: 'Import Director, Dubai',
    content: 'The quality of SS GOLD basmati is unmatched. Our customers in the Middle East specifically request this brand. Consistently excellent.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Procurement Head, UK',
    content: 'We\'ve been sourcing from SS GOLD for 5 years. Their commitment to quality and timely delivery has made them our preferred partner.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Hiroshi Tanaka',
    role: 'CEO, Tokyo Foods',
    content: 'Exceptional grain quality and aroma. The Apsara Premium rice has become a bestseller in our Japanese market segment.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Maria Santos',
    role: 'Restaurant Owner, Singapore',
    content: 'Every dish we serve with SS GOLD rice receives compliments. The consistency and taste are perfect for our premium offerings.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'David Okonkwo',
    role: 'Distributor, Nigeria',
    content: 'SS GOLD has transformed our rice import business. The brand is now synonymous with quality in our market.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 6,
    name: 'Elena Petrova',
    role: 'Buyer, Moscow',
    content: 'The organic heritage rice from Apsara is phenomenal. Our health-conscious customers absolutely love it.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-72 md:w-80 bg-warmWhite rounded-xl p-5 shadow-card border border-gold/10">
    {/* Quote Icon */}
    <Quote className="w-6 h-6 text-gold/30 mb-3" />

    {/* Content */}
    <p className="text-earth-light text-sm leading-relaxed mb-4 line-clamp-3">
      "{review.content}"
    </p>

    {/* Rating */}
    <div className="flex gap-0.5 mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>

    {/* Author */}
    <div className="flex items-center gap-2">
      <img
        src={review.image}
        alt={review.name}
        className="w-10 h-10 rounded-full object-cover border-2 border-gold/20"
      />
      <div>
        <p className="font-display font-semibold text-sm text-earth">{review.name}</p>
        <p className="text-xs text-muted-foreground">{review.role}</p>
      </div>
    </div>
  </div>
);

const CustomerReviewsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-16 md:py-20 bg-gradient-section overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 mb-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 text-xs tracking-[0.2em] uppercase text-gold-dark bg-gold/10 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-earth mb-3">
            Trusted <span className="text-gold-dark">Worldwide</span>
          </h2>
          <p className="text-earth-light max-w-xl mx-auto text-sm md:text-base">
            Hear from our valued partners across the globe.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Reviews */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* First Row - Left to Right */}
        <div className="flex gap-5 mb-5 animate-scroll-left">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`row1-${index}`} review={review} />
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div 
          className="flex gap-5"
          style={{
            animation: 'scroll-left 30s linear infinite reverse',
          }}
        >
          {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, index) => (
            <ReviewCard key={`row2-${index}`} review={review} />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default CustomerReviewsSection;
