import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingCart, Bomb, Hourglass, Zap } from 'lucide-react';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../data';
import { motion } from 'motion/react';

interface DealsSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export default function DealsSection({
  onQuickView,
  onAddToCart,
  onSelectProduct,
}: DealsSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 30,
  });

  // Countdown timer simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset countdown timer
          return { hours: 3, minutes: 45, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dealProducts = MOCK_PRODUCTS.filter(p => p.isHot || p.discountPercent);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div id="space-deals-page" className="py-8 px-4 sm:px-6 relative">
      <div className="cosmic-nebula-left" />

      {/* Head section */}
      <div className="max-w-6xl mx-auto relative z-10 mb-10">
        <div className="bg-gradient-to-r from-purple-950/40 via-[#0a0518]/90 to-cyan-950/20 border border-purple-900/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-950 border border-red-900/30 text-xs text-red-400 font-mono rounded-full font-bold uppercase tracking-widest mb-2.5 animate-pulse">
              <Zap className="w-3.5 h-3.5" /> High-Voltage Flash Sale
            </span>
            <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Hyper-Drive Space Deals
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-400 mt-1.5 max-w-xl">
              Strictly authentic iPhones, Samsung Galaxys, and premium accessories offered at stellar discounts. Prices return back to standard orbits when the timer runs dry!
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 bg-[#03000b] border border-purple-900/60 p-4 rounded-2xl shrink-0 shadow-lg">
            <Hourglass className="w-5 h-5 text-purple-400 animate-spin mr-1" />
            <div className="flex flex-col items-center">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white bg-purple-950 px-2.5 py-1 rounded-xl border border-purple-900/30">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="font-sans text-[9px] text-gray-500 uppercase font-bold mt-1">Hours</span>
            </div>
            <span className="text-purple-400 text-xl font-bold animate-pulse">:</span>
            <div className="flex flex-col items-center">
              <span className="font-mono text-xl sm:text-2xl font-bold text-white bg-purple-950 px-2.5 py-1 rounded-xl border border-purple-900/30">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="font-sans text-[9px] text-gray-500 uppercase font-bold mt-1">Mins</span>
            </div>
            <span className="text-purple-400 text-xl font-bold animate-pulse">:</span>
            <div className="flex flex-col items-center">
              <span className="font-mono text-xl sm:text-2xl font-bold text-teal-400 bg-purple-950 px-2.5 py-1 rounded-xl border border-purple-900/30">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="font-sans text-[9px] text-gray-500 uppercase font-bold mt-1">Secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of deal products */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {dealProducts.map(product => {
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

          return (
            <motion.div
              key={product.id}
              className="bg-[#090616]/75 border border-purple-950 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all flex flex-col justify-between h-full group"
              whileHover={{ y: -4 }}
            >
              {/* Image banner with discount badge */}
              <div 
                onClick={() => onSelectProduct(product)}
                className="relative aspect-square bg-purple-950/15 flex items-center justify-center p-6 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <span className="bg-gradient-to-r from-red-650 to-orange-550 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    -{product.discountPercent || 15}% OFF
                  </span>
                </div>
                <div className="text-6xl group-hover:scale-110 transition-transform">{product.image}</div>
              </div>

              {/* info layout */}
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[10px] uppercase font-bold text-purple-400 font-sans tracking-widest">
                  {product.brand}
                </span>

                <h3 
                  onClick={() => onSelectProduct(product)}
                  className="font-space font-medium text-white text-sm hover:text-cyan-400 transition-colors cursor-pointer mt-1 mb-2 line-clamp-2 min-h-[36px]"
                >
                  {product.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mt-auto mb-4">
                  <span className="font-mono text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#06b6d4]">
                    {formattedPrice}
                  </span>
                  {formattedOriginalPrice && (
                    <span className="font-mono text-xs text-gray-500 line-through">
                      {formattedOriginalPrice}
                    </span>
                  )}
                </div>

                {/* Buy buttons */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button
                    onClick={() => onQuickView(product)}
                    className="py-2.5 border border-purple-900 bg-purple-950/15 hover:bg-purple-950/45 text-purple-300 text-xs font-semibold rounded-xl"
                  >
                    Configure
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    id={`add-to-cart-deal-${product.id}`}
                    className="py-2.5 bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1 shadow-lg"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
