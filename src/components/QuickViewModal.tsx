import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Star, Shield, Truck, BadgeAlert, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, color: string, storage?: string) => void;
}

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}: QuickViewModalProps) {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Sync state with selected product
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || '');
      setSelectedStorage(product.storageOptions ? product.storageOptions[0] : '');
      setQuantity(1);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleQtyChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  const handleAddClick = () => {
    onAddToCart(product, quantity, selectedColor, selectedStorage || undefined);
    onClose();
  };

  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(product.price);

  return (
    <div id="quick-view-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-3xl bg-[#090616] border border-purple-900/60 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] font-sans grid grid-cols-1 md:grid-cols-2"
      >
        {/* Glow orbit background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full filter blur-[60px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-quick-view-btn"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-purple-950/40 rounded-xl transition-all z-30"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large visual */}
        <div className="bg-gradient-to-b from-purple-950/15 to-[#05030e] p-8 flex flex-col items-center justify-center min-h-[300px] select-none border-b md:border-b-0 md:border-r border-purple-950/30">
          <div className="text-8xl sm:text-9xl drop-shadow-[0_0_20px_rgba(147,51,234,0.35)] animate-pulse">
            {product.image}
          </div>
          <div className="mt-8 text-center bg-purple-950/20 px-4 py-2 border border-purple-900/10 rounded-xl">
            <span className="font-mono text-[11px] text-purple-400 uppercase tracking-widest block font-bold">
              Brand Coordinates
            </span>
            <span className="text-white text-xs font-semibold">{product.brand} Original</span>
          </div>
        </div>

        {/* Right Side: Product configuration forms */}
        <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
          <div>
            <span className="text-[10px] bg-cyan-950/40 border border-cyan-800/20 text-cyan-400 px-2.5 py-1 rounded font-space font-semibold uppercase tracking-wider">
              {product.category}
            </span>

            <h3 className="font-space font-bold text-white text-lg sm:text-xl leading-tight mt-2.5">
              {product.name}
            </h3>

            {/* Ratings row */}
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-mono text-xs text-gray-200 font-bold ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-gray-500">|</span>
              <span className="text-xs text-gray-400">{product.reviewsCount} Space Evaluators</span>
            </div>

            {/* Price tag */}
            <p className="font-mono text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 mt-4">
              {formattedPrice}
            </p>

            {/* Short Dec */}
            <p className="text-xs text-gray-400 mt-4 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Configuration options if applicable */}
            <div className="flex flex-col gap-4 mt-6 border-t border-purple-950/25 pt-4">
              
              {/* Variant Selector: Color */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1.5">
                    Select Cosmic Armor Color:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-sans transition-all border ${
                          selectedColor === color
                            ? 'bg-purple-900/30 text-cyan-400 border-cyan-500/80 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                            : 'bg-[#03000b] border-purple-950 text-gray-400 hover:text-white'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Variant Selector: Storage */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1.5">
                    Storage Capacity:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.storageOptions.map(storage => (
                      <button
                        key={storage}
                        onClick={() => setSelectedStorage(storage)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                          selectedStorage === storage
                            ? 'bg-purple-900/30 text-cyan-400 border-cyan-500/80 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                            : 'bg-[#03000b] border-purple-950 text-gray-400 hover:text-white'
                        }`}
                      >
                        {storage}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity selectors */}
              <div>
                <label className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1.5">
                  Quantity Level:
                </label>
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center bg-[#03000b] border border-purple-950 rounded-xl p-1">
                    <button
                      onClick={() => handleQtyChange(quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-purple-950/40 text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-mono text-xs text-white font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQtyChange(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-purple-950/40 text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                  
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-800/10">
                    <Sparkles className="w-3 h-3 text-emerald-400 inline-block" /> In Stock
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Action Row */}
          <div className="mt-8 pt-4 border-t border-purple-950/20 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddClick}
              id={`quick-add-to-cart-action-${product.id}`}
              className="flex-1 bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Load Into Cart</span>
            </button>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
