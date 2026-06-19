import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  MapPin, 
  Truck, 
  Check, 
  Phone, 
  MessageCircle, 
  Mail, 
  Copy,
  ChevronRight,
  Info
} from 'lucide-react';
import { CartItem, Product } from '../types';

interface CheckoutViewProps {
  cartItems: CartItem[];
  onClearCart: () => void;
  onContinueShopping: () => void;
  onSuccessToast: (message: string) => void;
  onSubmitCheckoutDetails: (details: {
    fullName: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    instructions: string;
  }) => void;
}

export default function CheckoutView({
  cartItems,
  onClearCart,
  onContinueShopping,
  onSuccessToast,
  onSubmitCheckoutDetails,
}: CheckoutViewProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 'success'>(1);
  const [orderId, setOrderId] = useState('');

  // Step 1: Delivery
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    street: '',
    city: '',
    state: 'Rivers',
    zipCode: '',
    instructions: '',
  });

  // Step 2: Payment
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer' | 'ussd'>('bank_transfer');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
  });

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

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deliveryInfo.fullName || !deliveryInfo.email || !deliveryInfo.phoneNumber || !deliveryInfo.street || !deliveryInfo.city) {
      alert('Please fill out all required fields marked with *');
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === 'card') {
      onSuccessToast("💳 Card payment integration is Coming Soon (UI demo active)!");
    }
    setStep(3);
  };

  const handlePlaceOrder = () => {
    onSubmitCheckoutDetails({
      fullName: deliveryInfo.fullName,
      phoneNumber: deliveryInfo.phoneNumber,
      street: deliveryInfo.street,
      city: deliveryInfo.city,
      state: deliveryInfo.state,
      instructions: deliveryInfo.instructions,
    });
  };

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    onSuccessToast("📋 Tracker order code copied successfully to clipboard!");
  };

  return (
    <div id="checkout-view-container" className="py-8 px-4 sm:px-6 max-w-4xl mx-auto font-sans relative">
      <div className="cosmic-nebula-right" />

      {/* Checkout Steps Header Indicator */}
      {step !== 'success' && (
        <div className="flex items-center justify-center gap-2 sm:gap-6 mb-10 text-xs sm:text-sm font-space select-none border-b border-purple-950/20 pb-6 overflow-x-auto">
          <div 
            onClick={() => step > 1 && setStep(1)}
            className={`flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${step === 1 ? 'text-cyan-400 font-bold' : 'text-gray-550'}`}
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs ${step === 1 ? 'bg-cyan-950 text-cyan-400 border border-cyan-500' : 'bg-purple-950/30 text-gray-500 border border-purple-950'}`}>1</span>
            <span>Delivery Info</span>
          </div>

          <ChevronRight className="w-4 h-4 text-purple-950" />

          <div 
            onClick={() => step > 2 && setStep(2)}
            className={`flex items-center gap-1.5 whitespace-nowrap ${step === 2 ? 'text-cyan-400 font-bold' : 'text-gray-550'} ${step > 1 ? 'cursor-pointer' : ''}`}
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs ${step === 2 ? 'bg-cyan-950 text-cyan-400 border border-cyan-500' : step > 2 ? 'bg-emerald-950 text-emerald-400' : 'bg-purple-950/30 text-gray-500 border border-purple-950'}`}>2</span>
            <span>Payment Method</span>
          </div>

          <ChevronRight className="w-4 h-4 text-purple-950" />

          <div className={`flex items-center gap-1.5 whitespace-nowrap ${step === 3 ? 'text-cyan-400 font-bold' : 'text-gray-550'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs ${step === 3 ? 'bg-cyan-950 text-cyan-400 border border-cyan-500' : 'bg-purple-950/30 text-gray-500 border border-purple-950'}`}>3</span>
            <span>Review Order</span>
          </div>
        </div>
      )}

      {/* Step 1: Delivery Form */}
      {step === 1 && (
        <form onSubmit={handleDeliverySubmit} className="bg-[#090616]/75 border border-purple-950 rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="font-space font-bold text-white text-md sm:text-lg mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-purple-400" />
            1. Deliver Terminal Coordinates
          </h3>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={deliveryInfo.fullName}
                  onChange={(e) => setDeliveryInfo({ ...deliveryInfo, fullName: e.target.value })}
                  placeholder="e.g. Ebube James"
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                  E-mail Address *
                </label>
                <input
                  type="email"
                  required
                  value={deliveryInfo.email}
                  onChange={(e) => setDeliveryInfo({ ...deliveryInfo, email: e.target.value })}
                  placeholder="e.g. james@gmail.com"
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                Verifiable Phone Number (WhatsApp Enabled preferred) *
              </label>
              <input
                type="tel"
                required
                value={deliveryInfo.phoneNumber}
                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phoneNumber: e.target.value })}
                placeholder="e.g. 08031234567"
                className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 font-mono"
              />
              <p className="text-[10px] text-gray-550 mt-1">We will contact you on this number to confirm the dispatch address prior to driver release.</p>
            </div>

            <div>
              <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                Physical Street Delivery Address *
              </label>
              <input
                type="text"
                required
                value={deliveryInfo.street}
                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, street: e.target.value })}
                placeholder="e.g. Suite 42, Allen Avenue"
                className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={deliveryInfo.city}
                  onChange={(e) => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
                  placeholder="e.g. Garrison / GRA"
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                  State / Territory *
                </label>
                <input
                  type="text"
                  required
                  value={deliveryInfo.state}
                  onChange={(e) => setDeliveryInfo({ ...deliveryInfo, state: e.target.value })}
                  placeholder="e.g. Lagos"
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                  Postal ZIP Code / Code
                </label>
                <input
                  type="text"
                  value={deliveryInfo.zipCode}
                  onChange={(e) => setDeliveryInfo({ ...deliveryInfo, zipCode: e.target.value })}
                  placeholder="e.g. 100001"
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                Special Delivery Instructions (Optional)
              </label>
              <textarea
                value={deliveryInfo.instructions}
                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, instructions: e.target.value })}
                rows={2}
                placeholder="Mention gate keys, best hours to call, color duplicates..."
                className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space font-semibold text-xs sm:text-sm py-4 rounded-xl shadow-lg transition-all"
            >
              Secure & Continue to Payment →
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Payment Selector */}
      {step === 2 && (
        <form onSubmit={handlePaymentSubmit} className="bg-[#090616]/75 border border-purple-950 rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="font-space font-bold text-white text-md sm:text-lg mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-purple-400" />
            2. Choose Secure Payment Gateway
          </h3>

          <div className="flex flex-col gap-6">
            
            {/* Payment Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div 
                onClick={() => setPaymentMethod('bank_transfer')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between min-h-[90px] ${
                  paymentMethod === 'bank_transfer'
                    ? 'border-cyan-400 bg-cyan-950/15'
                    : 'border-purple-950 bg-purple-950/5 hover:border-purple-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-space font-semibold text-xs sm:text-sm text-white">Bank Transfer</span>
                  <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${paymentMethod === 'bank_transfer' ? 'border-cyan-400 text-cyan-400' : 'border-gray-600'}`}>
                    {paymentMethod === 'bank_transfer' && <Check className="w-3 h-3" />}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2">Instant transfer verification for prior dispatch release.</p>
              </div>

              <div 
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between min-h-[90px] ${
                  paymentMethod === 'card'
                    ? 'border-cyan-400 bg-cyan-950/15'
                    : 'border-purple-950 bg-purple-950/5 hover:border-purple-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-space font-semibold text-xs sm:text-sm text-white">Card Payment</span>
                  <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${paymentMethod === 'card' ? 'border-cyan-400 text-cyan-400' : 'border-gray-600'}`}>
                    {paymentMethod === 'card' && <Check className="w-3 h-3" />}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2">Pay securely using Visa, Mastercard, or Verve cards (Demo Mode).</p>
              </div>

              <div 
                onClick={() => setPaymentMethod('ussd')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between min-h-[90px] ${
                  paymentMethod === 'ussd'
                    ? 'border-cyan-400 bg-cyan-950/15'
                    : 'border-purple-950 bg-purple-950/5 hover:border-purple-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-space font-semibold text-xs sm:text-sm text-white">USSD Shortcode</span>
                  <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${paymentMethod === 'ussd' ? 'border-cyan-400 text-cyan-400' : 'border-gray-600'}`}>
                    {paymentMethod === 'ussd' && <Check className="w-3 h-3" />}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2">Generate instant unique shortcodes for direct dial verification.</p>
              </div>

            </div>

            {/* Detailed view per option */}
            {paymentMethod === 'bank_transfer' && (
              <div className="bg-[#03000b] border border-purple-950 p-4 sm:p-5 rounded-2xl">
                <h4 className="font-space font-semibold text-xs sm:text-sm text-white mb-2 flex items-center gap-1">
                  <Info className="w-4 h-4 text-cyan-400" />
                  Direct Bank Coordinates
                </h4>
                <p className="text-xs text-gray-400 mb-4 font-sans max-w-lg">
                  Please proceed with transfer after review. We will manually contact you on WhatsApp/Phone to request transfer receipt proof before cargo release:
                </p>
                <div className="grid grid-cols-2 gap-3.5 font-mono text-[10px] sm:text-xs text-gray-300">
                  <div className="bg-purple-950/15 p-3 rounded-xl border border-purple-950">
                    <span className="text-gray-500 block uppercase font-sans text-[9px]">Bank Name</span>
                    <strong>GTBank (Guaranty Trust Co.)</strong>
                  </div>
                  <div className="bg-purple-950/15 p-3 rounded-xl border border-purple-950">
                    <span className="text-gray-500 block uppercase font-sans text-[9px]">Account Number</span>
                    <strong>07076725564</strong>
                  </div>
                  <div className="bg-purple-950/15 p-3 rounded-xl border border-purple-950 col-span-2">
                    <span className="text-gray-500 block uppercase font-sans text-[9px]">Account Beneficiary Name</span>
                    <strong>Mr X Space Retail Limited</strong>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="bg-[#03000b] border border-purple-950 p-5 rounded-2xl flex flex-col gap-4">
                <div className="bg-purple-950/30 p-3 rounded-xl text-purple-300 text-xs font-sans">
                  💳 Enter details. Note: payment gateway is running in offline prototype mode (No charges).
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-gray-450 text-[10px] uppercase font-bold tracking-wider mb-1">
                      Debit Card Number
                    </label>
                    <input
                      type="text"
                      maxLength={19}
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      placeholder="4321 •••• •••• 8888"
                      className="w-full bg-purple-950/15 text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-gray-450 text-[10px] uppercase font-bold tracking-wider mb-1">
                          Expiry
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          className="w-full bg-purple-950/15 text-gray-200 text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-purple-950 focus:outline-none text-center"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-450 text-[10px] uppercase font-bold tracking-wider mb-1">
                          CVV
                        </label>
                        <input
                          type="password"
                          maxLength={3}
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          placeholder="•••"
                          className="w-full bg-purple-950/15 text-gray-200 text-xs sm:text-sm px-3.5 py-3 rounded-xl border border-purple-950 focus:outline-none text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'ussd' && (
              <div className="bg-[#03000b] border border-purple-950 p-4 rounded-2xl text-xs text-gray-450">
                <p>USSD verification string generation is active on your selected bank. Dial specific coordinates displayed upon order placement.</p>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-purple-950/30 hover:bg-purple-950 border border-purple-950 text-gray-300 font-space text-xs sm:text-sm py-4 px-6 rounded-xl transition-all"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space font-semibold text-xs sm:text-sm py-4 rounded-xl shadow-lg transition-all"
              >
                Review Items and Finalize →
              </button>
            </div>

          </div>
        </form>
      )}

      {/* Step 3: Review Order Page */}
      {step === 3 && (
        <div className="bg-[#090616]/75 border border-purple-950 rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="font-space font-bold text-white text-md sm:text-lg mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            3. Final Review of Active Coordinates
          </h3>

          {/* Details split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xs font-sans text-gray-300 leading-relaxed border-b border-purple-950/20 pb-6">
            
            <div className="bg-purple-950/10 p-5 rounded-2xl border border-purple-950/30">
              <h4 className="font-space font-bold text-white uppercase text-[10px] tracking-wider mb-2.5">
                Delivery Coordinates
              </h4>
              <p className="font-semibold text-white">{deliveryInfo.fullName}</p>
              <p>{deliveryInfo.street}, {deliveryInfo.city}</p>
              <p>{deliveryInfo.state} State, Nigeria</p>
              <p className="font-mono mt-2 text-[11px] text-cyan-400">📞 {deliveryInfo.phoneNumber}</p>
              <p className="font-mono text-[11px] text-gray-550">✉️ {deliveryInfo.email}</p>
            </div>

            <div className="bg-purple-950/10 p-5 rounded-2xl border border-purple-950/30 flex flex-col justify-between">
              <div>
                <h4 className="font-space font-bold text-white uppercase text-[10px] tracking-wider mb-2.5">
                  Selected Payment Gateway
                </h4>
                <p className="capitalize text-white font-semibold">
                  {paymentMethod.replace('_', ' ')}
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  {paymentMethod === 'bank_transfer' 
                    ? 'Receipt verified prior to cargo dispatch.' 
                    : 'Transaction cleared under demo mode protocols.'}
                </p>
              </div>

              <span className="text-[10px] bg-cyan-950 text-cyan-400 font-mono py-1 px-2 border border-cyan-800/10 rounded uppercase mt-2 w-fit">
                AUTHENTIC SEALS ENCRYPTED
              </span>
            </div>

          </div>

          {/* Cart review items list */}
          <div className="mb-8">
            <h4 className="font-space font-bold text-white uppercase text-[10px] tracking-wider mb-3">
              Items Scheduled for Dispatch
            </h4>
            <div className="flex flex-col gap-3">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between text-xs sm:text-sm font-sans border-b border-purple-950/10 pb-2">
                  <div className="text-gray-300 flex items-center gap-2">
                    <span className="text-xl">{item.product.image}</span>
                    <div>
                      <p className="font-medium text-white text-xs sm:text-sm line-clamp-1">{item.product.name}</p>
                      <span className="text-[9px] text-gray-500 uppercase font-bold">Qty: {item.quantity} • {item.selectedColor}</span>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-white">
                    {formatCurrency(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing summ */}
          <div className="bg-purple-950/15 border border-purple-950/45 p-5 rounded-2xl font-mono text-xs sm:text-sm text-gray-300 flex flex-col gap-2 mb-8">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Lagos Shipping & Dispatch:</span>
              <span>{deliveryFee === 0 ? 'Free Shipping (Lagos Zone)' : formatCurrency(deliveryFee)}</span>
            </div>
            <hr className="border-purple-950/20 my-1" />
            <div className="flex justify-between text-base font-bold text-white">
              <span>Total Scheduled:</span>
              <span className="text-cyan-400 font-extrabold">{formatCurrency(total)}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="bg-purple-950/30 hover:bg-purple-950 border border-purple-950 text-gray-300 font-space text-xs sm:text-sm py-4 px-6 rounded-xl transition-all"
            >
              Adjust payment
            </button>
            <button
              onClick={handlePlaceOrder}
              id="checkout-place-order-final"
              className="flex-1 bg-gradient-to-r from-purple-800 to-[#25D366] hover:from-purple-700 hover:to-emerald-500 text-white font-space font-semibold text-xs sm:text-sm py-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
            >
              Place Order on WhatsApp →
            </button>
          </div>

        </div>
      )}

      {/* Success Order Confirmation Page */}
      {step === 'success' && (
        <div className="bg-[#090616]/80 border border-purple-950 rounded-3xl p-6 sm:p-10 shadow-2xl text-center max-w-xl mx-auto select-none font-sans">
          <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-3xl mx-auto mb-5">
            ✓
          </div>
          <h2 className="font-space font-extrabold text-white text-xl sm:text-2xl leading-snug">
            Your Cargo Order Has Been Received!
          </h2>
          <p className="text-gray-450 text-xs sm:text-sm mt-2 max-w-sm mx-auto leading-relaxed">
            Thank you! Your order registration has been completed successfully under offline tracking protocols.
          </p>

          {/* Tracking Panel */}
          <div className="mt-8 bg-[#03000b] border border-purple-950/65 p-4 rounded-2xl max-w-xs mx-auto text-center font-mono">
            <span className="text-[10px] text-gray-500 block uppercase font-sans font-semibold tracking-wider">
              Autonomous Tracking ID
            </span>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                {orderId}
              </span>
              <button
                onClick={handleCopyOrderId}
                className="p-1.5 text-cyan-400 hover:bg-cyan-950/30 rounded-lg transition-colors"
                title="Copy order confirmation code"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-purple-950/15 border border-purple-950/40 rounded-2xl p-4 mt-6 text-xs text-gray-300 leading-relaxed font-sans text-left max-w-md mx-auto">
            <p className="font-bold font-space text-white mb-1 flex items-center gap-1">
              <Phone className="w-4 h-4 text-cyan-400" />
              Next Verification Steps:
            </p>
            <p className="mb-2">
              Our direct customer fulfillment officer will contact you shortly on your provided coordinates: <span className="text-cyan-400 font-mono font-bold text-xs">{deliveryInfo.phoneNumber}</span> to verify the delivery details and prepare driver dispatch!
            </p>
            <p className="text-[10px] text-gray-500">
              For immediate self-authorization, you can click on the WhatsApp icon or Call <strong>07076725564</strong> quoting track-key: {orderId}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center mt-8 gap-3.5 max-w-md mx-auto">
            <a 
              href={`https://wa.me/2347076725564?text=Hi%2520Mr%2520X%2520Space%20I've%2520placed%2520order%2520${orderId}%2520and%2520would%2520like%2520to%2520confirm!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-space font-semibold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Confirm on WhatsApp</span>
            </a>

            <button
              onClick={onContinueShopping}
              className="flex-1 bg-purple-950 hover:bg-purple-900 border border-purple-800 text-white font-space font-semibold text-xs py-3 px-5 rounded-xl transition-colors"
            >
              Continue Shopping
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
