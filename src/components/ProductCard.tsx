import React from 'react';
import { ShoppingCart, Star, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  onSelectProduct,
}: ProductCardProps) {
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
      id={`product-card-${product.id}`}
      className="group relative bg-[#090616]/75 border border-purple-950/40 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all flex flex-col h-full"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      {/* Badges container */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
        {product.isHot && (
          <span className="flex items-center gap-1 bg-gradient-to-r from-red-600 to-amber-500 text-white font-space font-medium text-[9px] uppercase tracking-wider px-2 py-1 rounded-md shadow-md animate-pulse">
            <Sparkles className="w-2.5 h-2.5" />
            Space Deal
          </span>
        )}
        {product.discountPercent && (
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-md">
            -{product.discountPercent}%
          </span>
        )}
      </div>

      {/* Product Image Section - Space Tech-Themed Placeholder Canvas */}
      <div 
        id={`product-card-img-container-${product.id}`}
        onClick={() => onSelectProduct(product)}
        className="relative aspect-square bg-gradient-to-b from-purple-950/20 to-purple-950/5 flex items-center justify-center p-6 cursor-pointer overflow-hidden group/img select-none"
      >
        {/* Glow orbit background */}
        <div className="absolute inset-0 bg-radial-gradient from-purple-900/10 to-transparent group-hover/img:scale-125 transition-transform duration-500" />
        
        {/* Main visual emoji wrapper styled like a floating cosmic relic */}
        <div className="relative z-10 text-5xl sm:text-6xl drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover/img:scale-115">
          {product.image}
        </div>

        {/* Hover quick action panel */}
        <div className="absolute inset-0 bg-transparent/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm z-25">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            id={`quick-view-btn-${product.id}`}
            className="p-3 bg-purple-950 border border-purple-500/30 hover:border-cyan-400 text-cyan-400 hover:text-white rounded-xl transition-all"
            title="Quick View"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            id={`add-to-cart-quick-${product.id}`}
            className="p-3 bg-gradient-to-r from-purple-700 to-cyan-500 hover:from-purple-600 hover:to-cyan-400 text-white rounded-xl transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]"
            title="Add instantly to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 flex flex-col flex-1 bg-gradient-to-b from-transparent to-[#04020c]">
        
        {/* Brand & Category row */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-sans font-medium text-[10px] text-purple-400 uppercase tracking-widest bg-purple-950/35 px-2 py-0.5 rounded border border-purple-900/20">
            {product.brand}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="font-mono text-[11px] text-gray-300">{product.rating}</span>
            <span className="font-sans text-[10px] text-gray-500">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => onSelectProduct(product)}
          className="font-space font-medium text-white text-sm sm:text-base leading-snug hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2 min-h-[40px] mb-3"
        >
          {product.name}
        </h3>

        {/* Price Tag with discount handling */}
        <div className="mt-auto mb-4 flex items-baseline gap-2 flex-wrap">
          <span className="font-mono text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
            {formattedPrice}
          </span>
          {formattedOriginalPrice && (
            <span className="font-mono text-xs text-gray-500 line-through">
              {formattedOriginalPrice}
            </span>
          )}
        </div>

        {/* Direct Actions */}
        <div className="grid grid-cols-5 gap-2">
          <button
            onClick={() => onSelectProduct(product)}
            className="col-span-3 text-center py-2.5 rounded-xl border border-purple-900 bg-purple-950/10 hover:bg-purple-950/45 text-purple-300 hover:text-white transition-colors font-space text-xs font-semibold"
          >
            Explore View
          </button>
          
          <button
            onClick={() => onAddToCart(product)}
            id={`btn-add-to-cart-${product.id}`}
            className="col-span-2 bg-gradient-to-r from-purple-800 to-cyan-600 hover:from-purple-700 hover:to-cyan-500 text-white py-2.5 rounded-xl flex items-center justify-center gap-1 transition-all"
            title="Add to Cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline font-space text-xs font-medium">Add</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
