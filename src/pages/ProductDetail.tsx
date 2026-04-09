import { useParams, Link } from 'react-router';
import { Star, Minus, Plus, ShoppingBag, ArrowLeft, Truck, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
        <Link to="/products" className="text-maroon hover:text-maroon-dark font-medium">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/products"
        className="inline-flex items-center gap-1 text-gray-500 hover:text-maroon mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {discount > 0 && (
            <span className="absolute top-4 left-4 bg-maroon text-white text-sm font-semibold px-3 py-1.5 rounded-lg">
              -{discount}% OFF
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-900">
              &#8377;{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  &#8377;{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  Save &#8377;{(product.originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

          {/* Color Selector */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-900 mb-3">
              Color: <span className="text-gray-500">{selectedColor}</span>
            </p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    selectedColor === color
                      ? 'border-maroon bg-maroon/5 text-maroon'
                      : 'border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-900 mb-3">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors ${
              added
                ? 'bg-green-600 text-white'
                : product.inStock
                ? 'bg-maroon hover:bg-maroon-dark text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingBag size={22} />
            {added ? 'Added to Cart!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {/* Info badges */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck size={18} className="text-maroon" />
              Free delivery on orders above ₹2,000
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <RotateCcw size={18} className="text-maroon" />
              7-day easy returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
