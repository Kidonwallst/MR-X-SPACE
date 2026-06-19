import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContacts from './components/FloatingContacts';
import ProductCard from './components/ProductCard';
import QuickViewModal from './components/QuickViewModal';
import LoginModal from './components/LoginModal';
import ProductDetail from './components/ProductDetail';
import DealsSection from './components/DealsSection';
import CartView from './components/CartView';
import CheckoutView from './components/CheckoutView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import FAQView from './components/FAQView';
import WhatsAppCheckoutView from './components/WhatsAppCheckoutView';
import heroBanner from './assets/images/banner_1781904413979.jpg';

import { Product, CartItem, ViewTab } from './types';
import { MOCK_PRODUCTS, CATEGORIES, BRANDS } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Smartphone, 
  Laptop, 
  Plug, 
  Volume2, 
  Gamepad2, 
  Watch, 
  ShieldCheck, 
  Award, 
  Truck, 
  Star, 
  Zap, 
  Filter, 
  X,
  CreditCard,
  MessageCircle,
  Phone,
  ChevronRight
} from 'lucide-react';

interface Toast {
  id: string;
  message: string;
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // WhatsApp Checkout state variables
  const [whatsappCheckoutItems, setWhatsappCheckoutItems] = useState<CartItem[]>([]);
  const [whatsappCheckoutSource, setWhatsappCheckoutSource] = useState<'cart' | 'checkout' | 'buy-now'>('cart');
  const [whatsappCheckoutDetails, setWhatsappCheckoutDetails] = useState({
    fullName: '',
    phoneNumber: '',
    street: '',
    city: '',
    state: 'Lagos',
    instructions: '',
  });
  
  // Shop Filters
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceLimit, setPriceLimit] = useState(2500000);
  const [minRating, setMinRating] = useState(0);

  // Modals & Active Selections
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);

  // Custom Toast State
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Load cart from storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('MX_SPACE_CART');
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Sync cart to storage
  const syncCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem('MX_SPACE_CART', JSON.stringify(newCart));
  };

  const showToast = (message: string) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, color?: string, storage?: string) => {
    const defaultColor = color || product.colors[0] || 'Default';
    const defaultStorage = storage || (product.storageOptions ? product.storageOptions[0] : undefined);
    
    // Unique ID composite: product_id + color + storage
    const customId = `${product.id}_${defaultColor}_${defaultStorage || 'none'}`;

    const existingIndex = cartItems.findIndex(item => item.id === customId);
    let updatedCart = [...cartItems];

    if (existingIndex > -1) {
      updatedCart[existingIndex].quantity += quantity;
    } else {
      updatedCart.push({
        id: customId,
        product,
        quantity,
        selectedColor: defaultColor,
        selectedStorage: defaultStorage,
      });
    }

    syncCart(updatedCart);
    showToast(`🛒 Stellar Add: Added ${quantity}x ${product.name} (${defaultColor}${defaultStorage ? `, ${defaultStorage}` : ''}) to your cart!`);
  };

  const handleUpdateCartQty = (itemId: string, increment: boolean) => {
    const updated = cartItems.map(item => {
      if (item.id === itemId) {
        const newQty = increment ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(1, newQty) };
      }
      return item;
    });
    syncCart(updated);
  };

  const handleRemoveCartItem = (itemId: string) => {
    const updated = cartItems.filter(item => item.id !== itemId);
    syncCart(updated);
    showToast("🗑️ Item successfully unscheduled from cargo dispatch.");
  };

  const handleClearCart = () => {
    syncCart([]);
  };

  // General Category router focus
  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentTab('shop');
  };

  const handleQuickViewTrigger = (prod: Product) => {
    setQuickViewProduct(prod);
    setIsQuickViewOpen(true);
  };

  const handleSelectProductTrigger = (prod: Product) => {
    setSelectedProductForDetail(prod);
    setCurrentTab('product-detail');
  };

  // Promo operations
  const handleNewsletterSubscribe = (email: string) => {
    showToast("📧 Newsletter subscription coming soon! Exclusive deals will target your mailbox.");
  };

  // Get total cart count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Shop filter calculations
  const filteredProducts = MOCK_PRODUCTS.filter(prod => {
    const matchesSearch = searchQuery 
      ? prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        prod.brand.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory = selectedCategory === 'all' ? true : prod.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' ? true : prod.brand === selectedBrand;
    const matchesPrice = prod.price <= priceLimit;
    const matchesRating = prod.rating >= minRating;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen space-bg text-white font-sans flex flex-col relative overflow-x-hidden">
      
      {/* Visual Ambient Space Blur */}
      <div className="cosmic-nebula-left" />
      <div className="cosmic-nebula-right" />

      {/* Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          // clear search query when changing root tabs to avoid confusion
          if (tab !== 'shop') setSearchQuery('');
        }}
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onLoginClick={() => setIsLoginOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Areas rendering via currentTab */}
      <main className="flex-grow z-10">
        <AnimatePresence mode="wait">
          
          {/* HOMEPAGE VIEW */}
          {currentTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-sans"
            >
              
              {/* HERO SECTION */}
              <section id="hero-banner" className="relative pt-10 pb-16 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column Text & CTAs */}
                  <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-950/40 border border-purple-800/40 rounded-full text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-mono tracking-widest font-bold uppercase mb-4">
                      <Sparkles className="w-3 text-cyan-400" /> Space Tech Haven
                    </div>
                    
                    <h2 className="font-space font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                      Welcome to Mr X Space <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        Your Gateway to Premium Tech
                      </span>
                    </h2>

                    <p className="font-sans text-gray-350 text-xs sm:text-base leading-relaxed max-w-xl mb-8">
                      Discover the latest iPhones, Samsung Galaxy flagships, pro notebooks, high-density audio gadgets, and protective accessories. 100% authentic international components with robust 1-year product warranties.
                    </p>

                    {/* Prominent CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      <button
                        onClick={() => handleSelectCategory('iphones')}
                        className="bg-purple-950 hover:bg-purple-900 text-cyan-400 hover:text-white px-7 py-3.5 rounded-xl border border-purple-800/70 hover:border-cyan-400 font-space font-semibold text-sm transition-all"
                      >
                        Shop iPhones →
                      </button>

                      <button
                        onClick={() => handleSelectCategory('samsung')}
                        className="bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white px-7 py-3.5 rounded-xl font-space font-semibold text-sm shadow-[0_0_20px_rgba(147,51,234,0.45)] transition-all"
                      >
                        Shop Samsung →
                      </button>

                      <button
                        onClick={() => setCurrentTab('shop')}
                        className="text-gray-300 hover:text-white px-7 py-3.5 font-space font-semibold text-sm hover:underline transition-colors block text-center"
                      >
                        Explore All Products →
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Cosmic device banner */}
                  <div className="lg:col-span-5 flex justify-center relative select-none">
                    
                    {/* Visual orbit line background decoration */}
                    <div className="absolute w-[110%] h-[110%] border border-purple-950/20 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '60s' }} />
                    <div className="absolute w-[80%] h-[80%] border border-cyan-950/20 rounded-full animate-spin pointer-events-none" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

                    {/* Rich High-Tech physical image container */}
                    <div className="relative p-1.5 rounded-3xl border border-white/10 w-full aspect-[16/10] overflow-hidden shadow-2xl group max-w-lg bg-[#090616]/75 backdrop-blur-md">
                      <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <img 
                          src={heroBanner} 
                          alt="Mr X Space Premium Collection" 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/95 via-[#020205]/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="font-space font-medium text-[10px] text-cyan-400 tracking-wider uppercase mb-1">
                            LAGOS OUTLET • VERIFIED STOCK
                          </p>
                          <h3 className="font-space font-bold text-white text-sm sm:text-base leading-tight">
                            Premium Phones, Laptops & Accessories
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* TRUST BADGES BAR */}
              <section id="trust-badges" className="border-y border-purple-950/30 bg-[#070414]/75 backdrop-blur-xl py-6 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
                  
                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
                    <span className="text-xl sm:text-2xl bg-cyan-950/45 p-2 rounded-xl text-cyan-400 border border-cyan-900/20">✅</span>
                    <div>
                      <h4 className="font-space font-semibold text-white text-xs sm:text-sm">100% Authentic</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Sourced directly from creators</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
                    <span className="text-xl sm:text-2xl bg-cyan-950/45 p-2 rounded-xl text-cyan-400 border border-cyan-900/20">✅</span>
                    <div>
                      <h4 className="font-space font-semibold text-white text-xs sm:text-sm">1-Year Warranty</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Full trace coverage protection</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
                    <span className="text-xl sm:text-2xl bg-cyan-950/45 p-2 rounded-xl text-cyan-400 border border-cyan-900/20">✅</span>
                    <div>
                      <h4 className="font-space font-semibold text-white text-xs sm:text-sm">Priority Fast Delivery</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Lagos priority doorstep couriers</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
                    <span className="text-xl sm:text-2xl bg-cyan-950/45 p-2 rounded-xl text-cyan-400 border border-cyan-900/20">✅</span>
                    <div>
                      <h4 className="font-space font-semibold text-white text-xs sm:text-sm">Secure Bank Payment</h4>
                      <p className="text-[10px] text-gray-500 font-sans">Manual transfers and card gates</p>
                    </div>
                  </div>

                </div>
              </section>

              {/* FEATURED CATEGORIES SECTION */}
              <section id="categories" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center sm:text-left mb-10">
                  <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    Featured Cosmic Coordinates
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-405 mt-1">
                    Select target coordinates to scan brand collections.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                  {CATEGORIES.filter(cat => cat.id !== 'all').map((cat, index) => {
                    // Match icons
                    const getIconGlyph = (id: string) => {
                      switch(id) {
                        case 'iphones': return '📱';
                        case 'samsung': return '📲';
                        case 'laptops': return '💻';
                        case 'audio': return '🎧';
                        case 'wearables': return '⌚';
                        case 'accessories': return '🔌';
                        case 'gaming': return '🎮';
                        default: return '🌌';
                      }
                    };

                    return (
                      <motion.div
                        key={cat.id}
                        id={`category-card-${cat.id}`}
                        onClick={() => handleSelectCategory(cat.id)}
                        className="bg-[#090616]/70 border border-purple-950 hover:border-cyan-400/50 rounded-2xl p-4 text-center cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all select-none"
                        whileHover={{ scale: 1.04 }}
                      >
                        <span className="block text-4xl mb-3 drop-shadow-[0_0_8px_rgba(147,51,234,0.3)]">{getIconGlyph(cat.id)}</span>
                        <h4 className="font-space font-semibold text-[11px] sm:text-xs text-white uppercase tracking-wider">
                          {cat.name.replace(' Samsung', '')}
                        </h4>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

              {/* BESTSELLERS SECTION (Title: 🔥 Trending Now) */}
              <section id="bestsellers" className="py-10 px-4 sm:px-6 max-w-7xl mx-auto border-t border-purple-950/20">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-10 text-center sm:text-left gap-4">
                  <div>
                    <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-1">
                      🔥 Trending Now
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-405 mt-1">
                      Our most sought-after tech terminals purchased direct.
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentTab('shop')}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-space font-bold flex items-center gap-1"
                  >
                    <span>View Full Catalog</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Display 6-8 Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {MOCK_PRODUCTS.slice(0, 8).map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={handleQuickViewTrigger}
                      onSelectProduct={handleSelectProductTrigger}
                    />
                  ))}
                </div>
              </section>

              {/* FLASH SALES TIMER DECORATOR */}
              <section id="banner-offer" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div onClick={() => setCurrentTab('deals')} className="cursor-pointer bg-gradient-to-r from-purple-950/60 to-cyan-950/30 border border-cyan-800/15 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-cyan-400 transition-all shadow-xl">
                  <div>
                    <span className="bg-red-955 text-white bg-red-950 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest font-bold uppercase block w-fit mb-3">⚡ FLASH SPACE SALE</span>
                    <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                      Special Cosmic Deals Online Today!
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 mt-1 max-w-lg">
                      Save heavily on AirPods Pro 2, iPhone 16 Pro Max, and multiconductor chargers. Click to explore discounted terminals before the timer drains to 0.
                    </p>
                  </div>
                  <span className="bg-cyan-500 hover:bg-cyan-400 text-purple-950 font-space font-bold px-6 py-3 rounded-xl shadow-md transition-colors text-xs sm:text-sm tracking-wide whitespace-nowrap">
                    Beam Me To Deals →
                  </span>
                </div>
              </section>

              {/* "WHY CHOOSE MR X SPACE" SECTION */}
              <section id="why-choose-us" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-purple-950/20">
                <div className="text-center mb-12">
                  <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    Why Tech Consumers Prefer Mr X Space
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Delivering premium authenticity across Nigeria since inception.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center font-sans">
                  
                  <div className="bg-[#090616]/40 border border-purple-950/30 p-6 rounded-2xl flex flex-col justify-between">
                    <span className="text-3xl block mb-3">✅</span>
                    <h4 className="font-space font-bold text-white text-sm mb-2">100% Authentic</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      All products represent original brand models accompanied by fully verifiable serial numbers.
                    </p>
                  </div>

                  <div className="bg-[#090616]/40 border border-purple-950/30 p-6 rounded-2xl flex flex-col justify-between">
                    <span className="text-3xl block mb-3">✅</span>
                    <h4 className="font-space font-bold text-white text-sm mb-2">Fast Door Delivery</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Same-day immediate courier tracking code generation inside Lagos State territories.
                    </p>
                  </div>

                  <div className="bg-[#090616]/40 border border-purple-950/30 p-6 rounded-2xl flex flex-col justify-between">
                    <span className="text-3xl block mb-3">✅</span>
                    <h4 className="font-space font-bold text-white text-sm mb-2">Secure Payments</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      We support multiple standard payment options, prioritizing direct verified bank transfers.
                    </p>
                  </div>

                  <div className="bg-[#090616]/40 border border-purple-950/30 p-6 rounded-2xl flex flex-col justify-between">
                    <span className="text-3xl block mb-3">✅</span>
                    <h4 className="font-space font-bold text-white text-sm mb-2">Expert Tech Support</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Mon-Sat direct channels active to resolve your activation, backup, and warranty queries.
                    </p>
                  </div>

                  <div className="bg-[#090616]/40 border border-purple-950/30 p-6 rounded-2xl flex flex-col justify-between">
                    <span className="text-3xl block mb-3">✅</span>
                    <h4 className="font-space font-bold text-white text-sm mb-2">Unrivaled Prices</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Competitive wholesale rates without broker middle-man price markups.
                    </p>
                  </div>

                </div>
              </section>

              {/* FLOATING OR STICKY HEADER QUICK ACCESS LINKS BAR */}

            </motion.div>
          )}

          {/* SHOP / CATALOG VIEW */}
          {currentTab === 'shop' && (
            <motion.div
              key="shop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 px-4 sm:px-6 max-w-7xl mx-auto"
            >
              
              {/* Product catalog head */}
              <div className="mb-8 text-center sm:text-left">
                <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Premium Space Catalog
                </h3>
                <p className="text-xs text-gray-450 mt-1">
                  Adjust custom filters to locate iPhones, notebooks, headphones, and accessories.
                </p>
              </div>

              {/* Catalog Split Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Sidebar Filters - Left */}
                <div className="lg:col-span-3 bg-[#090616]/75 border border-purple-950 rounded-2xl p-5 flex flex-col gap-5 shadow-lg relative font-sans text-xs">
                  
                  {/* Reset Filters button */}
                  <div className="flex justify-between items-center border-b border-purple-950/30 pb-3">
                    <h4 className="font-space font-semibold text-white tracking-wider flex items-center gap-1.5 uppercase text-[10px]">
                      <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filters
                    </h4>
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedBrand('all');
                        setPriceLimit(2500000);
                        setMinRating(0);
                        setSearchQuery('');
                      }}
                      className="text-[10px] text-cyan-400 hover:underline"
                    >
                      Clear All
                    </button>
                  </div>

                  {/* Filter: Categories */}
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-2.5">
                      Target Coordinates
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`text-left px-2.5 py-2 rounded-lg transition-colors ${
                            selectedCategory === cat.id
                              ? 'bg-purple-950/30 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filter: Brands */}
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-2.5">
                      Hardware Manufacturers
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={() => setSelectedBrand('all')}
                        className={`text-left px-2.5 py-2 rounded-lg transition-colors % ${
                          selectedBrand === 'all'
                            ? 'bg-purple-950/30 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        All Brands
                      </button>
                      {BRANDS.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrand(brand)}
                          className={`text-left px-2.5 py-2 rounded-lg transition-colors ${
                            selectedBrand === brand
                              ? 'bg-purple-950/30 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filter: Price Range Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                        Limit Price Budget
                      </span>
                      <span className="font-mono text-[10px] text-cyan-400 font-semibold">
                        {new Intl.NumberFormat('en-NG', {
                          style: 'currency',
                          currency: 'NGN',
                          maximumFractionDigits: 0
                        }).format(priceLimit)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={30000}
                      max={2500000}
                      step={50000}
                      value={priceLimit}
                      onChange={(e) => setPriceLimit(Number(e.target.value))}
                      className="w-full accent-cyan-500 h-1.5 bg-[#03000b] rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Filter: Rating stars */}
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-2">
                      Evaluator Threshold
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={() => setMinRating(0)}
                        className={`text-left px-2.5 py-1.5 rounded-lg transition-colors ${minRating === 0 ? 'text-cyan-400 font-semibold' : 'text-gray-400'}`}
                      >
                        Any Rating
                      </button>
                      <button
                        onClick={() => setMinRating(4.8)}
                        className={`text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${minRating === 4.8 ? 'text-cyan-400 font-semibold' : 'text-gray-400'}`}
                      >
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>4.8★ & Above</span>
                      </button>
                      <button
                        onClick={() => setMinRating(4.5)}
                        className={`text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${minRating === 4.5 ? 'text-cyan-400 font-semibold' : 'text-gray-400'}`}
                      >
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>4.5★ & Above</span>
                      </button>
                    </div>
                  </div>

                  {/* Sidebar Help desk widget */}
                  <div className="border-t border-purple-950/30 pt-4 mt-2">
                    <p className="font-space font-semibold text-white tracking-wide text-[10px] uppercase">
                      Need Direct Help?
                    </p>
                    <p className="text-[10px] text-gray-550 leading-relaxed mt-1">
                      Our Port Harcourt support lines are active. Call or inquiry directly:
                    </p>
                    <a
                      href="tel:07076725564"
                      className="mt-2.5 block text-center py-2 bg-blue-900/10 text-blue-400 border border-blue-900/35 rounded-xl font-mono text-[11px] font-bold"
                    >
                      📞 Call 07076725564
                    </a>
                  </div>

                </div>

                {/* Main Content Product Grid - Right */}
                <div className="lg:col-span-9">
                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 bg-[#090616]/40 border border-purple-950 rounded-2xl">
                      <p className="text-xl">🌌 No terminals detected</p>
                      <p className="text-gray-500 text-xs mt-2 max-w-sm mx-auto">
                        Verify your search queries or reset standard filter coordinates to scan other tech components.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedCategory('all');
                          setSelectedBrand('all');
                          setPriceLimit(250000)
                          setSearchQuery('');
                          setMinRating(0);
                        }}
                        className="mt-6 font-space text-xs font-semibold bg-purple-950 border border-purple-900 px-4 py-2 rounded-xl text-cyan-400"
                      >
                        Reset Catalog Maps
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map(product => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={(p) => handleAddToCart(p, 1)}
                          onQuickView={handleQuickViewTrigger}
                          onSelectProduct={handleSelectProductTrigger}
                        />
                      ))}
                    </div>
                  )}

                  {/* Simulated pagination */}
                  {filteredProducts.length > 0 && (
                    <div className="flex justify-center items-center gap-2 mt-12 font-space text-xs">
                      <button className="px-3.5 py-2 rounded-lg bg-[#090616]/80 text-gray-400 border border-purple-950 cursor-not-allowed">
                        Prev
                      </button>
                      <button className="px-3.5 py-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/80 font-bold">
                        1
                      </button>
                      <button 
                        onClick={() => showToast("🪐 Loading additional catalog sectors in outer orbit lines...")}
                        className="px-3.5 py-2 rounded-lg bg-[#090616]/80 text-gray-300 border border-purple-950 hover:border-purple-800 transition-colors"
                      >
                        2
                      </button>
                      <button 
                        onClick={() => showToast("🪐 Loading additional catalog sectors in outer orbit lines...")}
                        className="px-3.5 py-2 rounded-lg bg-[#090616]/80 text-gray-300 border border-purple-950 hover:border-purple-800 transition-colors"
                      >
                        3
                      </button>
                      <button 
                        onClick={() => showToast("🪐 Loading additional catalog sectors in outer orbit lines...")}
                        className="px-3.5 py-2 rounded-lg bg-[#090616]/80 text-gray-300 border border-purple-950 hover:border-purple-800 transition-colors py-2"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>

              </div>

            </motion.div>
          )}

          {/* PRODUCT DETAIL VIEW */}
          {currentTab === 'product-detail' && selectedProductForDetail && (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductDetail
                product={selectedProductForDetail}
                onAddToCart={(prod, qty, col, stor) => handleAddToCart(prod, qty, col, stor)}
                onSelectProduct={handleSelectProductTrigger}
                onSuccessToast={showToast}
                setCurrentTab={setCurrentTab}
                onBuyNowDirect={(product, quantity, color, storage) => {
                  const singleItem = {
                    id: `${product.id}-${color}-${storage || 'none'}`,
                    product,
                    quantity,
                    selectedColor: color,
                    selectedStorage: storage
                  };
                  setWhatsappCheckoutItems([singleItem]);
                  setWhatsappCheckoutDetails({
                    fullName: '',
                    phoneNumber: '',
                    street: '',
                    city: '',
                    state: 'Lagos',
                    instructions: ''
                  });
                  setWhatsappCheckoutSource('buy-now');
                  setCurrentTab('whatsapp-checkout');
                }}
              />
            </motion.div>
          )}

          {/* SPACE DEALS VIEW */}
          {currentTab === 'deals' && (
            <motion.div
              key="deals"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DealsSection
                onQuickView={handleQuickViewTrigger}
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onSelectProduct={handleSelectProductTrigger}
              />
            </motion.div>
          )}

          {/* CARGO CART VIEW */}
          {currentTab === 'cart' && (
            <motion.div
              key="cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CartView
                cartItems={cartItems}
                onUpdateQty={handleUpdateCartQty}
                onRemoveItem={handleRemoveCartItem}
                onProceedToCheckout={() => {
                  setWhatsappCheckoutItems(cartItems);
                  setWhatsappCheckoutSource('cart');
                  setCurrentTab('whatsapp-checkout');
                }}
                onContinueShopping={() => setCurrentTab('shop')}
                onSuccessToast={showToast}
              />
            </motion.div>
          )}

          {/* SECURE CHECKOUT VIEW */}
          {currentTab === 'checkout' && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckoutView
                cartItems={cartItems}
                onClearCart={handleClearCart}
                onContinueShopping={() => setCurrentTab('shop')}
                onSuccessToast={showToast}
                onSubmitCheckoutDetails={(details) => {
                  setWhatsappCheckoutItems(cartItems);
                  setWhatsappCheckoutDetails(details);
                  setWhatsappCheckoutSource('checkout');
                  setCurrentTab('whatsapp-checkout');
                }}
              />
            </motion.div>
          )}

          {/* WHATSAPP CHECKOUT VIEW */}
          {currentTab === 'whatsapp-checkout' && (
            <motion.div
              key="whatsapp-checkout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WhatsAppCheckoutView
                cartItems={whatsappCheckoutItems}
                deliveryDetails={whatsappCheckoutDetails}
                onContinueShopping={() => setCurrentTab('shop')}
                onClearCart={handleClearCart}
                onSuccessToast={showToast}
              />
            </motion.div>
          )}

          {/* BRAND STORY VIEW */}
          {currentTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AboutView />
            </motion.div>
          )}

          {/* CONTACT INTERFACE VIEW */}
          {currentTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ContactView onSuccessToast={showToast} />
            </motion.div>
          )}

          {/* ACCORDION FAQ VIEW */}
          {currentTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FAQView />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        setCurrentTab={setCurrentTab}
        onSubscribeClick={handleNewsletterSubscribe}
      />

      {/* Floating contact widget visible on all pages */}
      <FloatingContacts />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={(p, qty, col, stor) => handleAddToCart(p, qty, col, stor)}
      />

      {/* Sign In & Sign Up triggers Coming soon modal popup */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccessToast={showToast}
      />

      {/* Dynamic Animated Toasts Panel */}
      <div id="toast-manager" className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              className="bg-[#090616]/96 border border-cyan-500/80 text-white px-4 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)] pointer-events-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-sans"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.95, transition: { duration: 0.2 } }}
            >
              <span>{toast.message}</span>
              <button
                onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                className="text-gray-400 hover:text-white shrink-0 font-bold"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
