import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Vastra</h3>
            <p className="text-sm text-gray-400">
              Celebrating the timeless elegance of Indian sarees. Handpicked collections
              from the finest weavers across India.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-gold transition-colors">Home</Link>
              <Link to="/products" className="block hover:text-gold transition-colors">Shop All</Link>
              <Link to="/cart" className="block hover:text-gold transition-colors">Cart</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>support@vastra.com</p>
              <p>+91 98765 43210</p>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; 2026 Vastra Sarees. All rights reserved. | Demo Application
        </div>
      </div>
    </footer>
  );
}
