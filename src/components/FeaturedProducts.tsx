import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import gamingLaptopImage from '@/assets/gaming-laptop.jpg';
import accessories from '@/assets/acce.webp';
import gamingPcImage from '@/assets/gaming-pc.jpg';
import gamingConsoleImage from '@/assets/gaming-console.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: '1',
      name: 'ROG Strix G17 Gaming Laptop',
      price: 89000,
      originalPrice: 99000,
      rating: 4.8,
      reviews: 324,
      image: gamingLaptopImage,
      category: 'Gaming Laptops',
      badge: 'Best Seller'
    },
    {
      id: '2', 
      name: 'Alienware Aurora R15 Gaming PC',
      price: 99000,
      originalPrice: 129000,
      rating: 4.9,
      reviews: 156,
      image: gamingPcImage,
      category: 'Gaming PCs',
      badge: 'New'
    },
    {
      id: '3',
      name: 'PlayStation 5 Digital Edition',
      price: 44999,
      originalPrice: 59900,
      rating: 4.7,
      reviews: 892,
      image: gamingConsoleImage,
      category: 'Consoles'
    },
    {
      id: '4',
      name: 'PC/Console Accessories',
      price: 399,
      originalPrice: 5599,
      rating: 4.6,
      reviews: 201,
      image: accessories,
      category: 'Gaming Laptops'
    }
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/30 text-sm font-medium text-primary mb-4">
            <ArrowRight className="w-4 h-4 mr-2" />
            Featured Products
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient-cyber">PREMIUM</span> GAMING GEAR
          </h2>
          
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Handpicked selection of the most powerful gaming equipment for 
            competitive and casual gamers alike
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="neon" size="lg" className="group">
            View All Products
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;