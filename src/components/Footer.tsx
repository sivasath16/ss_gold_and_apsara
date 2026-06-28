import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { label: 'Basmati Gold', href: '#' },
      { label: 'Apsara Premium', href: '#' },
      { label: 'Royal Sella', href: '#' },
      { label: 'Steam Basmati', href: '#' },
      { label: 'Organic Heritage', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#' },
      { label: 'Quality Assurance', href: '#' },
      { label: 'Certifications', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Export Inquiries', href: '#' },
      { label: 'Bulk Orders', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Shipping Info', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-warmWhite border-t border-gold/10">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-semibold text-earth mb-4"
            >
              SS GOLD <span className="text-gold-dark">&</span> APSARA
            </motion.h3>
            <p className="text-earth-light mb-6 max-w-sm">
              Premium rice exporters since 1995. Delivering the world's finest 
              basmati and specialty rice to discerning customers across 40+ countries.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-grain border border-gold/20 flex items-center justify-center text-earth-light hover:bg-gold hover:text-warmWhite hover:border-gold transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-earth mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-earth-light hover:text-gold-dark transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-earth mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-earth-light hover:text-gold-dark transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-earth mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-earth-light hover:text-gold-dark transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SS GOLD AND APSARA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-dark transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-dark transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
