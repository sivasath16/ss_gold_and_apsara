import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['123 Export Plaza, Industrial Area', 'New Delhi, India 110001'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 11 4567 8900', '+91 98765 43210'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['exports@ssgoldapsara.com', 'info@ssgoldapsara.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
    },
  ];

  return (
    <section
      id="contact"
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

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 text-xs tracking-[0.2em] uppercase text-gold bg-gold/10 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-warmWhite mb-3">
            Let's <span className="text-gold">Connect</span>
          </h2>
          <p className="text-warmWhite/70 max-w-xl mx-auto text-sm md:text-base">
            Ready to bring the world's finest rice to your market?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-warmWhite mb-1">
                    {item.title}
                  </h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-warmWhite/60 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <p className="text-warmWhite/80 mb-4">
                For bulk orders and export inquiries, speak directly with our team.
              </p>
              <Button 
                variant="outline"
                className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold group"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-warmWhite/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-warmWhite/80">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-warmWhite/10 border-gold/20 text-warmWhite placeholder:text-warmWhite/40 focus:border-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-warmWhite/80">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="bg-warmWhite/10 border-gold/20 text-warmWhite placeholder:text-warmWhite/40 focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-warmWhite/80">Phone Number</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="bg-warmWhite/10 border-gold/20 text-warmWhite placeholder:text-warmWhite/40 focus:border-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-warmWhite/80">Company Name</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-warmWhite/10 border-gold/20 text-warmWhite placeholder:text-warmWhite/40 focus:border-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-warmWhite/80">Your Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your requirements, quantity needed, and preferred delivery timeline..."
                  rows={5}
                  className="bg-warmWhite/10 border-gold/20 text-warmWhite placeholder:text-warmWhite/40 focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-earth font-semibold py-6 text-lg transition-all duration-300 shadow-gold hover:shadow-lg"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-warmWhite/50 text-center">
                By submitting this form, you agree to our privacy policy. 
                We'll respond within 24 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
