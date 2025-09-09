import { ChevronRight, Zap, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-gaming-setup.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gaming Setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/30 text-sm font-medium text-primary mb-4">
            <Zap className="w-4 h-4 mr-2 animate-glow" />
            Premium Gaming Gear Store
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            UNLEASH YOUR
            <br />
            <span className="text-gradient-cyber">GAMING POWER</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Discover the ultimate collection of high-performance gaming laptops, 
            PCs, consoles, and accessories. Built for gamers, by gamers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button variant="cyber" size="lg" className="group">
              Explore Products
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="neon" size="lg">
              View Gaming PCs
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2 glass p-6 rounded-xl border border-card-border">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="font-heading font-semibold text-foreground">Premium Quality</h3>
              <p className="text-sm text-foreground-secondary text-center">
                Only the best gaming hardware from top brands
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 glass p-6 rounded-xl border border-card-border">
              <Zap className="w-8 h-8 text-secondary" />
              <h3 className="font-heading font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-sm text-foreground-secondary text-center">
                High-performance gear for competitive gaming
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 glass p-6 rounded-xl border border-card-border">
              <Award className="w-8 h-8 text-accent" />
              <h3 className="font-heading font-semibold text-foreground">Expert Support</h3>
              <p className="text-sm text-foreground-secondary text-center">
                Professional guidance from gaming specialists
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-glow opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-glow opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-glow opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-glow opacity-30" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;