import { Link } from 'react-router';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react';

const featuredProducts = products.filter((p) => p.inStock).slice(0, 4);

const categoryImages: Record<string, string> = {
  Silk: '/images/saree-01.png',
  Cotton: '/images/saree-03.png',
  Banarasi: '/images/saree-02.png',
  Kanjeevaram: '/images/saree-04.png',
  Chiffon: '/images/saree-07.png',
  Georgette: '/images/saree-05.png',
};

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹2,000' },
  { icon: Shield, title: 'Authentic Products', desc: '100% genuine handloom' },
  { icon: RotateCcw, title: 'Easy Returns', desc: '7-day return policy' },
  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated help center' },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Features Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <f.icon size={28} className="text-maroon shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
          <p className="text-gray-500">Explore our diverse range of handcrafted sarees</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.filter((c) => c !== 'All').map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={categoryImages[category]}
                alt={category}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-semibold text-sm">
                {category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Sarees */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Now</h2>
              <p className="text-gray-500">Our most popular picks this season</p>
            </div>
            <Link
              to="/products"
              className="text-maroon hover:text-maroon-dark font-medium transition-colors hidden sm:block"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-maroon to-maroon-dark rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wedding Season Special</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Get up to 30% off on our premium bridal collection. Handpicked Kanjeevaram &
            Banarasi sarees for your special day.
          </p>
          <Link
            to="/products"
            className="inline-block bg-gold hover:bg-gold-dark text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Shop Bridal Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
