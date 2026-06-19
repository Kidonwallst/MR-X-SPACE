import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Phone, ArrowLeft, ClipboardCheck, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import brandLogo from '../assets/images/logo_1781904397940.jpg';

interface WhatsAppCheckoutViewProps {
  cartItems: CartItem[];
  deliveryDetails: {
    fullName: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    instructions: string;
  };
  onContinueShopping: () => void;
  onClearCart: () => void;
  onSuccessToast: (msg: string) => void;
}

export default function WhatsAppCheckoutView({
  cartItems,
  deliveryDetails,
  onContinueShopping,
  onClearCart,
  onSuccessToast,
}: WhatsAppCheckoutViewProps) {
  // Allow editing right on this page if details are missing or if user wants to change them
  const [details, setDetails] = useState({
    fullName: deliveryDetails?.fullName || '',
    phoneNumber: deliveryDetails?.phoneNumber || '',
    street: deliveryDetails?.street || '',
    city: deliveryDetails?.city || '',
    state: deliveryDetails?.state || 'Rivers',
    instructions: deliveryDetails?.instructions || '',
  });

  const [isCopied, setIsCopied] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal > 150000 ? 0 : 15000;
  const total = subtotal + deliveryFee;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(val);
  };

  const hasFilledDetails = details.fullName && details.phoneNumber && details.street && details.city;

  const getWhatsAppLink = () => {
    const itemsText = cartItems
      .map(item => `• ${item.product.name} [Size/Storage: ${item.selectedStorage || 'Default'}] (ARMOR: ${item.selectedColor}) - ${formatCurrency(item.product.price)} x ${item.quantity}`)
      .join('\n');

    const addressFull = `${details.street}, ${details.city}, ${details.state} State`;

    const message = `Hello Mr X Space! 👋

I would like to place an order. Here are my details:

📦 Order Items:
${itemsText}

💰 Total Amount: ${formatCurrency(total)} (Subtotal: ${formatCurrency(subtotal)}${deliveryFee === 0 ? ' + Free Shipping' : ` + ${formatCurrency(deliveryFee)} Shipping`})

📍 Delivery Address:
${addressFull || 'To be provided'}

👤 Full Name:
${details.fullName || 'To be provided'}

📱 Phone Number:
${details.phoneNumber || 'To be provided'}

📝 Special Instructions:
${details.instructions || 'None'}

Please confirm my order and let me know how to proceed with payment. Thanks! 🙏`;

    return `https://wa.me/2347076725564?text=${encodeURIComponent(message)}`;
  };

  const handleWhatsAppRedirect = () => {
    if (!hasFilledDetails) {
      onSuccessToast("⚠️ Please supply your delivery coords before launching Chat!");
      return;
    }

    setIsRedirecting(true);
    setTimeout(() => {
      window.open(getWhatsAppLink(), '_blank');
      setIsRedirecting(false);
      onSuccessToast("🔄 Teleporting you to Mr X Space WhatsApp Channel...");
    }, 1200);
  };

  const handleCopySummary = () => {
    const textToCopy = cartItems
      .map(item => `${item.product.name} - ${item.quantity}x (${formatCurrency(item.product.price)})`)
      .join('\n') + `\nTotal: ${formatCurrency(total)}`;
    
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    onSuccessToast("📋 Order Cargo Summary copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div id="whatsapp-checkout-container" className="py-8 px-4 sm:px-6 max-w-4xl mx-auto font-sans relative">
      <div className="cosmic-nebula-right" />

      {/* Back to Shopping button */}
      <button 
        onClick={onContinueShopping}
        className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-cyan-400 font-space font-medium mb-6 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Shopping Space</span>
      </button>

      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Forms / static cards */}
        <div className="md:col-span-7 flex flex-col gap-6">
          
          {/* Order Greeting Header */}
          <div className="bg-[#090616]/75 border border-purple-950/70 p-6 rounded-3xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F0FF]/10 rounded-full filter blur-xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-lg">
                <img src={brandLogo} alt="Mr X Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <span className="text-[10px] bg-emerald-950/45 text-[#25D366] px-2.5 py-0.5 rounded-full font-mono font-bold tracking-wide uppercase border border-emerald-800/15">
                  OFFICIAL ORDER LINE
                </span>
                <h2 className="font-space font-extrabold text-xl sm:text-2xl text-white tracking-tight mt-1">
                  Complete Your Order on WhatsApp
                </h2>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                  We are ready to process your tech! Complete this step to instantly submit your order variables directly to our support channel.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery form / coordinates card */}
          <div className="bg-[#090616]/75 border border-purple-950/70 p-6 rounded-3xl backdrop-blur-xl">
            <h3 className="font-space font-bold text-white text-sm sm:text-base mb-4 flex items-center gap-2 border-b border-purple-950/20 pb-3">
              <span className="p-1.5 bg-cyan-950/40 border border-cyan-800/10 text-[#00F0FF] rounded-lg text-xs leading-none">📍</span>
              Delivery Coordinates
            </h3>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={details.fullName}
                    onChange={(e) => setDetails({ ...details, fullName: e.target.value })}
                    placeholder="e.g. Ebube James"
                    className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                    Your Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={details.phoneNumber}
                    onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
                    placeholder="e.g. 08031234567"
                    className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                  Physical Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={details.street}
                  onChange={(e) => setDetails({ ...details, street: e.target.value })}
                  placeholder="e.g. Suite 42, Allen Avenue"
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={details.city}
                    onChange={(e) => setDetails({ ...details, city: e.target.value })}
                    placeholder="e.g. Garrison / GRA"
                    className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                    State / Region
                  </label>
                  <input
                    type="text"
                    value={details.state}
                    onChange={(e) => setDetails({ ...details, state: e.target.value })}
                    placeholder="e.g. Rivers"
                    className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-[#00F0FF] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                  Special Dispatch Notes (e.g. best time to deliver)
                </label>
                <textarea
                  value={details.instructions}
                  onChange={(e) => setDetails({ ...details, instructions: e.target.value })}
                  rows={2}
                  placeholder="e.g. Call before delivery, leave with receptionist..."
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary Card & Action redirection */}
        <div className="md:col-span-5 flex flex-col gap-6">

          {/* Cargo Order Summary Box */}
          <div className="bg-[#090616]/80 border border-purple-950/70 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-purple-950/20">
              <h3 className="font-space font-bold text-white text-sm uppercase tracking-wide flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#00F0FF]" />
                Cargo Summary
              </h3>
              <button 
                onClick={handleCopySummary}
                className="text-[10px] text-gray-500 hover:text-cyan-400 font-mono flex items-center gap-1 transition-colors border border-purple-950/30 px-2.5 py-1 rounded-lg"
              >
                <ClipboardCheck className="w-3 h-3" />
                <span>{isCopied ? "Copied" : "Copy Items"}</span>
              </button>
            </div>

            {/* List items */}
            <div className="flex flex-col gap-3.5 max-h-[220px] overflow-y-auto mb-5 scrollbar-thin">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <p className="font-semibold text-white truncate">{item.product.name}</p>
                    <div className="flex gap-1.5 text-[9px] text-[#00F0FF]/80 mt-0.5">
                      <span>ARMOR: {item.selectedColor}</span>
                      {item.selectedStorage && (
                        <>
                          <span className="text-gray-700">•</span>
                          <span>{item.selectedStorage}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-right shrink-0 font-mono">
                    <span className="text-gray-500">x{item.quantity}</span>
                    <p className="text-white font-bold mt-0.5">{formatCurrency(item.product.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price values summary block */}
            <div className="border-t border-purple-950/30 pt-4 flex flex-col gap-2 font-mono text-[11px] text-gray-400">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="text-white">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Rivers Dispatch:</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-400 uppercase font-bold text-[9px] tracking-wider">Free Priority</span>
                  ) : (
                    formatCurrency(deliveryFee)
                  )}
                </span>
              </div>
              <div className="border-t border-purple-950/20 my-1 pt-2 flex justify-between text-sm sm:text-base font-bold text-white">
                <span className="font-space">Total Cargo:</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-cyan-300">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Chat Redirect Column */}
          <div className="bg-gradient-to-b from-[#25D366]/5 via-[#020205] to-[#020205] border border-[#25D366]/20 rounded-3xl p-6 shadow-xl flex flex-col gap-4 text-center">
            
            <div className="w-12 h-12 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-2xl mx-auto">
              💬
            </div>

            <div>
              <h4 className="font-space font-bold text-white text-sm">Send Order via WhatsApp</h4>
              <p className="text-xs text-gray-450 mt-1 leading-relaxed">
                Prepares a verified dispatch package code. Tap below to launch WhatsApp and finalize details.
              </p>
            </div>

            {/* Instant Redirect Button */}
            <button
              onClick={handleWhatsAppRedirect}
              disabled={isRedirecting}
              className={`w-full py-4 px-5 rounded-2xl text-white font-space font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(37,211,102,0.2)] hover:scale-[1.02] active:scale-[0.99] transition-all bg-[#25D366] hover:bg-[#20ba59] disabled:opacity-50`}
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{isRedirecting ? "Compressing Payload..." : "Chat on WhatsApp"}</span>
            </button>

            {/* Quick backup parameters */}
            <div className="border-t border-purple-950/20 pt-4 text-left">
              <div className="flex items-center gap-2.5 text-xs text-gray-450 mt-1">
                <span className="text-[10px] bg-cyan-950 text-cyan-400 font-bold px-2 py-0.5 rounded">⏱️ RESPONSE TIME</span>
                <span className="font-semibold text-white">Within 5 Minutes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-450 mt-2.5">
                <span className="text-[10px] bg-purple-950 text-purple-400 font-bold px-2 py-0.5 rounded">📞 DIRECT DIAL</span>
                <a href="tel:07076725564" className="font-mono text-[#00F0FF] hover:underline">07076725564</a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
