import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative glass rounded-xl border border-card-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Button variant="neon" size="sm">
            <Eye className="w-4 h-4 mr-1" />
            Quick View
          </Button>
          <Button variant="cyber" size="sm">
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 space-y-2">
          {product.badge && (
            <span className="px-2 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-md">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="px-2 py-1 text-xs font-semibold bg-destructive text-destructive-foreground rounded-md">
              -{discount}%
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <span className="text-xs text-foreground-secondary uppercase tracking-wider font-medium">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="font-heading font-semibold text-foreground group-hover:text-gradient-cyber transition-all duration-300 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-accent fill-current'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-foreground-secondary">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button - Mobile */}
        <Button variant="cyber" className="w-full md:hidden">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-cyber opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
    </div>
  );
};

export default ProductCard;