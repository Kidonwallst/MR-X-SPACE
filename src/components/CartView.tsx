import React from 'react';
import { ShoppingCart, Trash2, ArrowRight, ShieldCheck, Truck, RefreshCw, Sparkles, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartViewProps {
  cartItems: CartItem[];
  onUpdateQty: (itemId: string, increment: boolean) => void;
  onRemoveItem: (itemId: string) => void;
  onProceedToCheckout: () => void;
  onContinueShopping: () => void;
  onSuccessToast: (message: string) => void;
}

export default function CartView({
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onProceedToCheckout,
  onContinueShopping,
  onSuccessToast,
}: CartViewProps) {
  const isCartEmpty = cartItems.length === 0;

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const calculateSubtotalOriginal = () => {
    return cartItems.reduce((acc, item) => {
      const orig = item.product.originalPrice || item.product.price;
      return acc + orig * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const subtotalOriginal = calculateSubtotalOriginal();
  const savings = subtotalOriginal - subtotal;

  const deliveryFee = subtotal > 150000 ? 0 : 15000; // Free delivery over ₦150k

  const total = subtotal + deliveryFee;

  const [promoCode, setPromoCode] = React.useState('');

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim()) {
      onSuccessToast("🎟️ Propeller discount codes and promo integration Coming Soon!");
      setPromoCode('');
    }
  };

  return (
    <div id="shopping-cart-container" className="py-8 px-4 sm:px-6 max-w-7xl mx-auto relative font-sans">
      <div className="cosmic-nebula-left" />

      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center justify-center sm:justify-start gap-2.5">
          <ShoppingCart className="w-6 h-6 text-cyan-400" />
          Terminal Cargo Cart
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-1">
          Review premium phone terminals and accessories configured for dispatch.
        </p>
      </div>

      {isCartEmpty ? (
        /* Empty State */
        <div className="max-w-md mx-auto text-center py-16 px-4 bg-[#090616]/75 border border-purple-950/40 rounded-3xl backdrop-blur-xl select-none">
          <div className="w-16 h-16 rounded-full bg-purple-950/50 flex items-center justify-center text-cyan-400 text-3xl mx-auto mb-4 border border-purple-900/30">
            🛒
          </div>
          <h3 className="font-space font-semibold text-white text-lg">
            Your Cargo Cart is Empty
          </h3>
          <p className="text-gray-550 text-xs mt-2 max-w-sm mx-auto leading-relaxed">
            There are currently no Apple flagships, Samsung Galaxy Ultras, Dell Laptops, or chargers loaded in your active coordinates.
          </p>
          <button
            onClick={onContinueShopping}
            className="mt-6 inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            Start Shopping →
          </button>
        </div>
      ) : (
        /* Grid Layout */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cart Items List - Left */}
          <div className="lg:col-span-8 flex flex-col gap-4 font-sans">
            {cartItems.map((item) => {
              const itemFormattedPrice = formatCurrency(item.product.price);
              const itemLineTotal = formatCurrency(item.product.price * item.quantity);

              return (
                <div 
                  key={item.id}
                  id={`cart-item-${item.id}`}
                  className="bg-[#090616]/75 border border-purple-950 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between"
                >
                  {/* Image block */}
                  <div className="aspect-square w-16 h-16 bg-purple-950/25 border border-purple-950 rounded-xl flex items-center justify-center text-3xl shrink-0">
                    {item.product.image}
                  </div>

                  {/* Info block */}
                  <div className="flex-grow text-center sm:text-left min-w-0">
                    <h4 className="font-space font-semibold text-white text-xs sm:text-sm leading-snug line-clamp-1">
                      {item.product.name}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-sans uppercase mt-0.5 font-semibold">
                      Brand: {item.product.brand}
                    </p>
                    
                    {/* Selected variants */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mt-2">
                      <span className="text-[10px] bg-purple-950 text-gray-300 px-2.5 py-0.5 rounded border border-purple-900/30">
                        Color: {item.selectedColor}
                      </span>
                      {item.selectedStorage && (
                        <span className="text-[10px] bg-cyan-950/40 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-800/10 font-mono">
                          Storage: {item.selectedStorage}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing block */}
                  <div className="text-center sm:text-right shrink-0">
                    <p className="font-mono text-xs text-gray-400">
                      {itemFormattedPrice} each
                    </p>
                    <p className="font-mono text-sm sm:text-base text-white font-bold mt-1">
                      {itemLineTotal}
                    </p>
                  </div>

                  {/* Controls: Qty + Remove */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center bg-[#03000b] border border-purple-950 rounded-xl p-1">
                      <button
                        onClick={() => onUpdateQty(item.id, false)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-purple-950/40"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-mono text-xs text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, true)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-purple-950/40"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      id={`cart-item-remove-btn-${item.id}`}
                      className="p-2 text-gray-500 hover:text-rose-500 hover:bg-rose-950/10 border border-transparent hover:border-rose-950/20 rounded-xl transition-all"
                      title="Remove product from cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}

            {/* Back action */}
            <button
              onClick={onContinueShopping}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-space font-semibold flex items-center gap-1.5 self-start mt-2"
            >
              <span>← Continue Browsing Tech Space</span>
            </button>
          </div>

          {/* Checkout pricing panel - Right */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-[#090616]/75 border border-purple-950 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <h3 className="font-space font-bold text-white text-md border-b border-purple-950/30 pb-3 mb-4">
                Grand Summary
              </h3>

              {/* Pricing values */}
              <div className="flex flex-col gap-3 font-mono text-xs sm:text-sm text-gray-350">
                <div className="flex justify-between">
                  <span className="font-sans">Subtotal:</span>
                  <span className="text-white font-medium">{formatCurrency(subtotal)}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-teal-400">
                    <span className="font-sans">Space Deal Savings:</span>
                    <span className="font-medium">-{formatCurrency(savings)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="font-sans">Lagos Delivery Fee:</span>
                  <span className="text-white font-medium">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded text-[10px] font-sans border border-emerald-800/10 uppercase font-bold">
                        Free delivery
                      </span>
                    ) : (
                      formatCurrency(deliveryFee)
                    )}
                  </span>
                </div>

                {/* Subsidized announcement */}
                <div className="bg-purple-950/10 border border-purple-950 text-[10px] text-purple-300 p-3 rounded-xl font-sans mt-1 leading-snug">
                  📌 {subtotal > 150000 
                    ? "Congratulations! Your order exceeds ₦150k limit. Free priority delivery has been successfully unlocked." 
                    : "Add items worth ₦150,000 or more to unlock Free priority shipping inside Lagos State."}
                </div>

                <hr className="border-purple-950/30 my-2" />

                <div className="flex justify-between text-base sm:text-lg font-bold">
                  <span className="font-sans text-white font-semibold">Order Total:</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 font-extrabold">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={onProceedToCheckout}
                id="cart-proceed-checkout-btn"
                className="w-full mt-6 bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="mt-6 pt-4 border-t border-purple-950/30">
                <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1.5">
                  Have a Promo Code?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="e.g. SPACE50"
                    className="w-full bg-[#03000b] text-gray-200 placeholder-purple-300/20 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-purple-950 focus:outline-none focus:border-purple-600 font-mono"
                  />
                  <button
                    type="submit"
                    className="bg-purple-950/40 hover:bg-purple-950 border border-purple-900/60 text-purple-300 hover:text-white px-4 text-xs font-space font-semibold rounded-xl transition-all whitespace-nowrap"
                  >
                    Apply code
                  </button>
                </div>
              </form>

            </div>

            {/* Quick Contact Help Desk */}
            <div className="bg-[#090616]/50 border border-purple-950/40 rounded-2xl p-4 text-center">
              <p className="text-gray-450 text-xs font-semibold font-space">
                Need Help with Your Order?
              </p>
              <p className="text-[11px] text-gray-500 font-sans mt-0.5">
                Speak directly with one of our Lagos tech admins:
              </p>
              <div className="flex justify-center gap-3 mt-3">
                <a 
                  href="tel:07076725564" 
                  className="p-1 px-3 bg-blue-950/15 hover:bg-blue-900/35 border border-blue-950 text-blue-400 text-[11px] font-mono rounded-lg transition-colors"
                >
                  Call 07076725564
                </a>
                <a 
                  href="https://wa.me/2347076725564" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 px-3 bg-emerald-950/15 hover:bg-emerald-900/35 border border-emerald-950 text-emerald-400 text-[11px] font-mono rounded-lg transition-all flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
