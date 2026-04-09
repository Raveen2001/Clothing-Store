import { Link } from 'react-router';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

export default function OrderConfirmation() {
  const orderId = `ORD-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed!</h1>
        <p className="text-gray-500 mb-6">
          Thank you for shopping with Vastra. Your saree is on its way!
        </p>

        <div className="bg-cream rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Package size={20} className="text-maroon" />
            <span className="font-medium text-gray-900">Order Details</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Order ID</span>
              <span className="font-mono font-semibold text-gray-900">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="text-green-600 font-medium">Confirmed</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Estimated Delivery</span>
              <span className="font-medium text-gray-900">5-7 Business Days</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-8">
          A confirmation email has been sent to your email address.
          (This is a demo — no actual email was sent.)
        </p>

        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
        >
          Continue Shopping
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
