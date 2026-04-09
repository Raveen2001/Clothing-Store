import { Link } from 'react-router';
import { Star, ShoppingBag } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock) {
      addToCart(product, product.colors[0]);
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-maroon text-white text-xs font-semibold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-white text-gray-800 px-4 py-2 rounded font-medium">
                Out of Stock
              </span>
            </div>
          )}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-maroon hover:text-white p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-50"
            disabled={!product.inStock}
          >
            <ShoppingBag size={18} />
          </button>
        </div>
        <div className="p-4">
          <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star size={14} className="fill-gold text-gold" />
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              &#8377;{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                &#8377;{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
