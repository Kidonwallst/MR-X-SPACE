import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  ShoppingCart, 
  Star, 
  Heart,
  Truck, 
  ShieldCheck, 
  Award,
  ArrowRight,
  ChevronRight,
  FileCheck2,
  ListRestart
} from 'lucide-react';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../data';
import { motion } from 'motion/react';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, color: string, storage?: string) => void;
  onSelectProduct: (product: Product) => void;
  onSuccessToast: (message: string) => void;
  setCurrentTab: (tab: any) => void;
  onBuyNowDirect: (product: Product, quantity: number, color: string, storage?: string) => void;
}

export default function ProductDetail({
  product,
  onAddToCart,
  onSelectProduct,
  onSuccessToast,
  setCurrentTab,
  onBuyNowDirect,
}: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews' | 'qa'>('desc');

  // Multi-thumbnail selectors
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedColor(product.colors[0] || '');
    setSelectedStorage(product.storageOptions ? product.storageOptions[0] : '');
    setQuantity(1);
    setThumbnailIndex(0);
  }, [product]);

  const handleQtyChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  const handleAddClick = () => {
    onAddToCart(product, quantity, selectedColor, selectedStorage || undefined);
  };

  const handleBuyNowClick = () => {
    onBuyNowDirect(product, quantity, selectedColor, selectedStorage || undefined);
  };

  const handleEnquireWhatsAppClick = () => {
    const msg = `Hello Mr X Space! 👋 I am interested in the ${product.name} priced at ₦${product.price.toLocaleString('en-NG')} (Armor shade: ${selectedColor || 'Default'}${selectedStorage ? `, Storage: ${selectedStorage}` : ''}). Is it available at your Port Harcourt outlet?`;
    window.open(`https://wa.me/2347076725564?text=${encodeURIComponent(msg)}`, '_blank');
    onSuccessToast("💬 Launching WhatsApp enquiry...");
  };

  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0
      }).format(product.originalPrice)
    : null;

  // Find related products in same category (excluding current)
  const related = MOCK_PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // Fallback related products if none found
  const relatedToDisplay = related.length > 0 
    ? related 
    : MOCK_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  // Background visual configurations based on color index
  const getThumbnailGradient = (idx: number) => {
    const gradients = [
      'from-purple-950/25 to-purple-950/5',
      'from-cyan-950/20 to-purple-950/5',
      'from-indigo-950/25 to-blue-950/10'
    ];
    return gradients[idx % gradients.length];
  };

  return (
    <div id="product-detail-view" className="py-8 px-4 sm:px-6 max-w-7xl mx-auto relative font-sans">
      <div className="cosmic-nebula-right" />

      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-gray-450 mb-8 flex-wrap">
        <button onClick={() => setCurrentTab('home')} className="hover:text-cyan-400 transition-colors">Home</button>
        <ChevronRight className="w-3.5 h-3.5 text-purple-900" />
        <button onClick={() => setCurrentTab('shop')} className="hover:text-cyan-400 transition-colors">Catalog / Shop</button>
        <ChevronRight className="w-3.5 h-3.5 text-purple-900" />
        <span className="text-gray-500 capitalize">{product.category}</span>
        <ChevronRight className="w-3.5 h-3.5 text-purple-900" />
        <span className="text-white font-medium line-clamp-1">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Hand: High Fidelity Image Carousel/Gallery */}
        <div className="flex flex-col gap-4 lg:col-span-5 select-none">
          
          <div className={`relative aspect-square rounded-3xl bg-gradient-to-b ${getThumbnailGradient(thumbnailIndex)} border border-purple-950/40 p-8 flex items-center justify-center transition-all duration-300`}>
            {product.discountPercent && (
              <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-mono text-xs font-bold px-3 py-1 rounded-lg">
                Save {product.discountPercent}%
              </span>
            )}
            
            {/* Floating particle ring */}
            <div className="absolute inset-0 bg-radial-gradient from-purple-900/10 to-transparent animate-pulse" />
            
            <div className="text-8xl sm:text-9xl drop-shadow-[0_0_25px_rgba(147,51,234,0.35)] hover:scale-105 transition-transform duration-300">
              {product.image}
            </div>
          </div>

          {/* Thumbnail Carousel */}
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setThumbnailIndex(idx)}
                className={`aspect-square bg-purple-950/15 border rounded-2xl flex items-center justify-center p-4 transition-all duration-300 ${
                  thumbnailIndex === idx 
                    ? 'border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.2)] bg-cyan-950/20' 
                    : 'border-purple-950/50 hover:border-purple-800'
                }`}
              >
                <span className="text-3xl opacity-75">{product.image}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Right Hand: Crucial configuration options */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] sm:text-xs font-space bg-purple-950 text-cyan-400 px-3 py-1 rounded-md border border-purple-900/15 font-semibold uppercase tracking-wider">
                {product.brand} Original Flagship
              </span>

              {/* Wishlist Trigger (Coming Soon) */}
              <button
                onClick={() => onSuccessToast("❤️ Wishlist features are coming soon!")}
                className="p-2.5 rounded-full bg-purple-950/10 hover:bg-purple-950/40 text-purple-400 hover:text-red-500 transition-colors border border-purple-950/20"
                title="Save product to wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-3">
              <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                {product.name}
              </h2>
              {product.condition && (
                <span className={`font-space font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border ${
                  product.condition.toLowerCase() === 'new'
                    ? 'bg-[#C5A059] text-white border-[#AA823C]'
                    : 'bg-stone-200 text-stone-700 border-stone-300'
                }`}>
                  {product.condition}
                </span>
              )}
            </div>

            {/* Ratings row */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="font-mono text-xs text-gray-200 font-bold">({product.rating})</span>
              <span className="text-gray-600">|</span>
              <span className="text-xs text-gray-400">{product.reviewsCount} Space Ratings & Reviews</span>
            </div>

            {/* Premium Price Bracket */}
            <div className="my-6 flex items-baseline gap-2.5 flex-wrap bg-purple-950/10 border border-purple-950/20 p-4 rounded-2xl w-fit">
              <span className="font-mono text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
                {formattedPrice}
              </span>
              {formattedOriginalPrice && (
                <span className="font-mono text-sm text-gray-500 line-through">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>

            {/* Short Dec Bullet-points */}
            <p className="text-gray-400 text-xs sm:text-sm mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Configuration selection variants */}
            <div className="flex flex-col gap-5 mt-6 border-t border-purple-950/35 pt-6">
              
              {/* Variant: Armor Color */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="block text-[10px] text-gray-450 uppercase tracking-widest font-bold mb-2">
                    Cosmic Armor Shade
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-xl text-xs font-sans font-medium transition-all border ${
                          selectedColor === color
                            ? 'bg-purple-950/40 text-cyan-400 border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-semibold'
                            : 'bg-transparent border-purple-950 text-gray-400 hover:text-white hover:border-purple-800'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Variant: Storage configuration */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div>
                  <label className="block text-[10px] text-gray-450 uppercase tracking-widest font-bold mb-2">
                    Storage Capacity Specs:
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {product.storageOptions.map(storage => (
                      <button
                        key={storage}
                        onClick={() => setSelectedStorage(storage)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                          selectedStorage === storage
                            ? 'bg-purple-950/40 text-cyan-400 border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                            : 'bg-transparent border-purple-950 text-gray-400 hover:text-white hover:border-purple-800'
                        }`}
                      >
                        {storage}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selectors & Trust elements */}
              <div>
                <label className="block text-[10px] text-gray-450 uppercase tracking-widest font-bold mb-2">
                  Select Quantity Level:
                </label>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center bg-[#03000b] border border-purple-950 rounded-xl p-1 w-fit">
                    <button
                      onClick={() => handleQtyChange(quantity - 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-purple-950/40 text-base font-bold"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-mono text-xs text-white font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQtyChange(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-purple-950/40 text-base font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 p-2 bg-emerald-950/20 text-emerald-400 text-[11px] font-mono rounded-xl border border-emerald-800/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse block" />
                    <span>In Stock Coordinate verified</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Large CTAs */}
          <div className="mt-8 pt-6 border-t border-purple-950/25 flex flex-col sm:flex-row gap-3.5">
            <button
              onClick={handleAddClick}
              id="detail-add-to-cart-btn"
              className="flex-1 bg-purple-950 hover:bg-purple-900 border border-purple-500/30 hover:border-cyan-400 text-cyan-400 hover:text-white font-space font-semibold tracking-wider text-xs sm:text-sm py-4 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Load Into Cart</span>
            </button>
            
            <button
              onClick={handleBuyNowClick}
              id="detail-buy-now-btn"
              className="flex-1 bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space font-semibold tracking-wider text-xs sm:text-sm py-4 px-5 rounded-2xl flex items-center justify-center gap-1 shadow-lg transition-all"
            >
              <span>Instant Buy Now</span>
            </button>

            <button
              onClick={handleEnquireWhatsAppClick}
              id="detail-enquire-whatsapp-btn"
              className="flex-1 bg-emerald-950/25 hover:bg-[#25D366] border border-emerald-500/35 hover:border-emerald-400 text-[#25D366] hover:text-white font-space font-semibold tracking-wider text-xs sm:text-sm py-4 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_10px_rgba(37,211,102,0.1)] hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>

          {/* Quick specs trust badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 border-t border-purple-950/15 pt-6 text-[11px] text-gray-450 leading-snug">
            <div className="flex items-start gap-2.5">
              <Truck className="w-4.5 h-4.5 text-cyan-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white font-space">Lagos Free Shipping</strong>
                <p className="mt-0.5">Priority dispatch in 24-48 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4.5 h-4.5 text-blue-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white font-space">1-Year Warranty</strong>
                <p className="mt-0.5">Full brand warranty coordinate protection</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Award className="w-4.5 h-4.5 text-purple-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-white font-space">100% Authentic</strong>
                <p className="mt-0.5">Straight from Apple, Samsung, Sony</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Deep specs Tabs section */}
      <div className="mt-14 border-t border-purple-950/25 pt-10">
        <div className="flex border-b border-purple-950/30 gap-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('desc')}
            className={`font-space text-xs sm:text-sm tracking-wide py-3 border-b-2 font-medium ${
              activeTab === 'desc' 
                ? 'border-cyan-400 text-white font-semibold' 
                : 'border-transparent text-gray-450 hover:text-white'
            }`}
          >
            Product Description
          </button>
          
          <button
            onClick={() => setActiveTab('specs')}
            className={`font-space text-xs sm:text-sm tracking-wide py-3 border-b-2 font-medium ${
              activeTab === 'specs' 
                ? 'border-cyan-400 text-white font-semibold' 
                : 'border-transparent text-gray-450 hover:text-white'
            }`}
          >
            Technical Specifications
          </button>

          <button
            onClick={() => {
              setActiveTab('reviews');
              onSuccessToast("📝 Client Reviews section is Coming Soon!");
            }}
            className={`font-space text-xs sm:text-sm tracking-wide py-3 border-b-2 font-medium ${
              activeTab === 'reviews' 
                ? 'border-cyan-400 text-white font-semibold' 
                : 'border-transparent text-gray-450 hover:text-white'
            }`}
          >
            Ratings & Reviews (Coming Soon)
          </button>

          <button
            onClick={() => {
              setActiveTab('qa');
              onSuccessToast("🪐 FAQ & Help Desk integration coming soon!");
            }}
            className={`font-space text-xs sm:text-sm tracking-wide py-3 border-b-2 font-medium ${
              activeTab === 'qa' 
                ? 'border-cyan-400 text-white font-semibold' 
                : 'border-transparent text-gray-450 hover:text-white'
            }`}
          >
            Q&A Board (Coming Soon)
          </button>
        </div>

        {/* Tab contents */}
        <div className="py-6 min-h-[160px] text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
          
          {activeTab === 'desc' && (
            <div className="space-y-4">
              <p>{product.description}</p>
              <p>
                Engineered with high premium components that allow for terminal durability and beautiful tactical aesthetics. We evaluate all devices before ship-out to certify packaging seals remain untampered.
              </p>
              <div className="bg-purple-950/10 p-4 border border-purple-950/45 rounded-2xl flex items-center gap-2.5 mt-4 w-fit">
                <ShieldCheck className="w-4.5 h-4.5 text-cyan-400" />
                <span className="text-xs text-gray-300">Guaranteed safe transaction backup verified.</span>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="max-w-xl border border-purple-950/40 rounded-2xl overflow-hidden shadow-xl bg-[#090616]/40">
              <table className="w-full text-left font-sans text-xs sm:text-sm">
                <thead>
                  <tr className="bg-purple-950/20 text-gray-400 uppercase tracking-wider text-[10px] border-b border-purple-950/30">
                    <th className="p-4 font-semibold">Core Component</th>
                    <th className="p-4 font-semibold">Terminal Parameters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-950/20 text-gray-300">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <tr key={key} className="hover:bg-purple-950/5">
                      <td className="p-4 font-medium text-gray-400 font-space">{key}</td>
                      <td className="p-4 font-mono text-[11px] text-white">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="text-gray-500 italic p-4 text-xs font-mono">
              ★ Evaluator rating modules currently syncing on server lines. Persisting is coming soon!
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="text-gray-500 italic p-4 text-xs font-mono">
              ★ Customer question and answer board is loading on outer orbit lines.
            </div>
          )}

        </div>
      </div>

      {/* Inquire widget contact banner on product detail page */}
      <div className="bg-gradient-to-r from-purple-950/30 to-[#0c051f]/80 p-6 sm:p-8 rounded-3xl border border-purple-900/30 flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
        <div>
          <h4 className="font-space font-semibold text-white text-md sm:text-lg">
            Need Expert Assistance with this {product.brand}?
          </h4>
          <p className="text-xs text-gray-450 font-sans mt-1">
            Our priority support lines are ready to provide configuration tips and clarify Lagos same-day shipments.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a 
            href={`https://wa.me/2347076725564?text=Hi%20Mr%20X%2520Space,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-space text-xs font-semibold px-4.5 py-3 rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Inquire on WhatsApp</span>
          </a>
          
          <a 
            href="tel:07076725564"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-space text-xs font-semibold px-4.5 py-3 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Support</span>
          </a>
        </div>
      </div>

      {/* Related Products list */}
      <div className="mt-16">
        <h3 className="font-space font-bold text-white text-lg sm:text-xl tracking-tight mb-6">
          🌠 Related Cosmic Discoveries
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedToDisplay.map(rp => (
            <div 
              key={rp.id}
              onClick={() => onSelectProduct(rp)}
              className="bg-[#090616]/50 border border-purple-950/50 hover:border-cyan-500/40 p-4 rounded-2xl cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between h-full"
            >
              <div className="aspect-square bg-purple-950/10 rounded-xl flex items-center justify-center text-5xl mb-4 font-bold select-none p-4">
                {rp.image}
              </div>
              <h4 className="font-space text-xs text-white hover:text-cyan-400 font-semibold mb-2 line-clamp-2">
                {rp.name}
              </h4>
              <p className="font-mono text-xs text-cyan-400 font-bold">
                {new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                  maximumFractionDigits: 0
                }).format(rp.price)}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
