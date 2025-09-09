import { Gamepad2, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'Gaming PCs', href: '/pcs' },
    { name: 'Gaming Laptops', href: '/laptops' },
    { name: 'Consoles', href: '/consoles' },
    { name: 'Accessories', href: '/accessories' },
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Returns', href: '/returns' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-background border-t border-card-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-heading font-bold text-gradient-cyber">
                AURORA
              </span>
            </div>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              Your ultimate destination for premium gaming gear. We provide the latest 
              and greatest in gaming technology for competitive and casual gamers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-sm text-foreground-secondary">
                <Phone className="w-4 h-4" />
                <span>+91 123456789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground-secondary">
                <Mail className="w-4 h-4" />
                <span>support@aurora.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground-secondary">
                <MapPin className="w-4 h-4" />
                <span>Bihar</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-foreground-secondary hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-foreground-secondary hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-foreground-secondary hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Stay Updated
              </h3>
              <p className="text-sm text-foreground-secondary">
                Get the latest gaming news and exclusive offers
              </p>
            </div>
            <div className="flex w-full md:w-auto space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-3 py-2 bg-input border border-card-border rounded-md text-foreground placeholder-foreground-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="cyber">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-card-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-foreground-secondary">
              © 2025 Aurora. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-foreground-secondary hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-foreground-secondary hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-foreground-secondary hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;