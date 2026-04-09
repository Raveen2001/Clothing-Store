import { Link } from 'react-router';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-maroon tracking-tight">Vastra</span>
            <span className="text-xs text-gold font-medium tracking-widest uppercase hidden sm:block">
              Sarees
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-maroon transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-maroon transition-colors font-medium">
              Shop
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-maroon transition-colors">
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-maroon text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t pb-4 pt-2 space-y-2">
            <Link
              to="/"
              className="block px-2 py-2 text-gray-700 hover:text-maroon font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-2 py-2 text-gray-700 hover:text-maroon font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
