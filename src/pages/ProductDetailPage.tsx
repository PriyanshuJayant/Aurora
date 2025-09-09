import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock product data
const mockProduct = {
  id: 'gaming-laptop-rog',
  name: 'ASUS ROG Strix G16 Gaming Laptop',
  category: 'Gaming Laptops',
  price: 1899,
  originalPrice: 2199,
  rating: 4.8,
  reviews: 156,
  inStock: true,
  badge: 'Best Seller',
  images: [
    '/src/assets/gaming-laptop.jpg',
    '/src/assets/gaming-pc.jpg',
    '/src/assets/gaming-console.jpg',
    '/src/assets/hero-gaming-setup.jpg'
  ],
  description: 'Experience ultimate gaming performance with the ASUS ROG Strix G16. Powered by the latest Intel Core i9 processor and NVIDIA RTX 4080 graphics card, this beast delivers exceptional frame rates and stunning visuals.',
  specs: {
    'Processor': 'Intel Core i9-13980HX',
    'Graphics': 'NVIDIA GeForce RTX 4080 12GB',
    'Memory': '32GB DDR5-4800',
    'Storage': '2TB PCIe 4.0 NVMe SSD',
    'Display': '16" QHD 240Hz IPS',
    'Operating System': 'Windows 11 Pro',
    'Connectivity': 'Wi-Fi 6E, Bluetooth 5.2',
    'Ports': '3x USB-A, 2x USB-C, HDMI 2.1, Audio Jack'
  },
  features: [
    'RGB Backlit Keyboard with Per-Key Customization',
    'Advanced Thermal Management System',
    'Dolby Atmos Audio with Quad Speakers',
    'Fast Charging Technology (0-50% in 30 min)',
    'Military-Grade Durability (MIL-STD-810H)'
  ]
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = mockProduct; // In real app, fetch based on id

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-foreground-secondary">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">{product.category}</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square glass rounded-xl border border-card-border overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg border-2 overflow-hidden transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-primary shadow-glow-primary' 
                        : 'border-card-border hover:border-primary/50'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-foreground-secondary uppercase tracking-wider font-medium">
                      {product.category}
                    </p>
                    <h1 className="text-3xl font-heading font-bold text-gradient-cyber mt-2">
                      {product.name}
                    </h1>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={isWishlisted ? 'text-red-500' : 'text-foreground-secondary'}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                </div>

                {/* Badges */}
                <div className="flex items-center space-x-3">
                  {product.badge && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                  {discount > 0 && (
                    <Badge variant="destructive">
                      -{discount}% OFF
                    </Badge>
                  )}
                  <Badge variant={product.inStock ? "default" : "secondary"} className="bg-success/20 text-success border-success/30">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-accent fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-foreground-secondary">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground-secondary">
                  Free shipping on orders over $999
                </p>
              </div>

              {/* Description */}
              <p className="text-foreground-secondary leading-relaxed">
                {product.description}
              </p>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-foreground">Quantity:</span>
                  <div className="flex items-center glass rounded-lg border border-card-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8 rounded-none"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 rounded-none"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="cyber" 
                    className="flex-1"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart - ${(product.price * quantity).toLocaleString()}
                  </Button>
                  <Button variant="neon">
                    Buy Now
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="glass rounded-lg p-6 border border-card-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Free Shipping</p>
                      <p className="text-sm text-foreground-secondary">Orders over $999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">2 Year Warranty</p>
                      <p className="text-sm text-foreground-secondary">Full coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full grid-cols-3 glass">
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specs" className="mt-8">
                <div className="glass rounded-lg p-6 border border-card-border">
                  <h3 className="text-xl font-heading font-semibold text-gradient-cyber mb-6">
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-card-border last:border-b-0">
                        <span className="font-medium text-foreground">{key}:</span>
                        <span className="text-foreground-secondary text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-8">
                <div className="glass rounded-lg p-6 border border-card-border">
                  <h3 className="text-xl font-heading font-semibold text-gradient-cyber mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-8">
                <div className="glass rounded-lg p-6 border border-card-border">
                  <h3 className="text-xl font-heading font-semibold text-gradient-cyber mb-6">
                    Customer Reviews
                  </h3>
                  <div className="text-center py-12">
                    <p className="text-foreground-secondary">Reviews coming soon...</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;