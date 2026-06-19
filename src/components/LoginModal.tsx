import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (message: string) => void;
}

export default function LoginModal({ isOpen, onClose, onSuccessToast }: LoginModalProps) {
  const [isLoginState, setIsLoginState] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginState) {
      onSuccessToast("🔐 Login & Account creation coming soon! Stay tuned for full space integration.");
    } else {
      onSuccessToast("📝 Account creation coming soon! We will contact you once registration is online.");
    }
    onClose();
  };

  return (
    <div id="login-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md bg-[#090616] border border-purple-900/60 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.3)] font-sans"
      >
        {/* Pulsing visual halo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-purple-800 to-cyan-500 rounded-full filter blur-[50px] opacity-20 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-login-modal-btn"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-purple-950/40 rounded-xl transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header logo/name */}
        <div className="text-center mb-6 relative z-10">
          <div className="mx-auto w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-800 to-cyan-500 p-[1px] flex items-center justify-center mb-3">
            <span className="font-space font-bold text-white text-base">X</span>
          </div>
          <h3 className="font-space font-bold text-white text-xl">
            {isLoginState ? 'Access the Tech Space' : 'Launch New Account'}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {isLoginState ? 'Sign in to access secure checkout and orders' : 'Register your terminal coordinates'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
          
          {!isLoginState && (
            <div>
              <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
                />
                <User className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-purple-400/70" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. pilot@galaxy.com"
                className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
              />
              <Mail className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-purple-400/70" />
            </div>
          </div>

          {!isLoginState && (
            <div>
              <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1.5">
                Phone Number (WhatsApp Verified)
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 07076725564"
                  className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
                />
                <Phone className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-purple-400/70" />
              </div>
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-gray-400 text-[10px] uppercase font-bold tracking-wider">
                Access Code / Password *
              </label>
              {isLoginState && (
                <button
                  type="button"
                  onClick={() => onSuccessToast("🔑 Password recovery coming soon!")}
                  className="text-[10px] text-cyan-400 hover:underline"
                >
                  Forgot Password?
                </button>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500"
              />
              <Lock className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-purple-400/70" />
            </div>
          </div>

          {!isLoginState && (
            <div className="flex items-start gap-2 mt-1">
              <input
                type="checkbox"
                required
                id="terms"
                className="w-4 h-4 bg-[#03000b] border border-purple-950 rounded Accent-cyan-500 mt-0.5"
              />
              <label htmlFor="terms" className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                I accept the cosmic Terms of Service & Privacy protocols for Lagos & Nigeria operations.
              </label>
            </div>
          )}

          {/* Submit Action */}
          <button
            type="submit"
            id={`submit-auth-btn`}
            className="mt-2 bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space text-xs sm:text-sm font-semibold py-3.5 rounded-xl shadow-lg transition-all"
          >
            {isLoginState ? 'Authenticate Signal' : 'Launch Orbit Registry'}
          </button>

          {/* Notice Banner */}
          <div className="bg-purple-950/20 text-purple-400 border border-purple-900/30 text-[10px] sm:text-xs p-3 rounded-xl text-center flex items-center justify-center gap-1.5 font-sans">
            <span>{isLoginState ? '🔐 Login & Account services and persistent tracking are Coming Soon!' : '📝 Account registration and cloud synchronization are Coming Soon!'}</span>
          </div>

          {/* Link to other action state */}
          <div className="text-center mt-3 text-xs">
            <span className="text-gray-400">
              {isLoginState ? "Don't have a terminal account?" : "Ready to sign in?"}
            </span>{' '}
            <button
              type="button"
              onClick={() => setIsLoginState(!isLoginState)}
              className="text-cyan-400 font-semibold hover:underline"
            >
              {isLoginState ? 'Sign Up Now →' : 'Sign In Now →'}
            </button>
          </div>

        </form>

      </motion.div>
    </div>
  );
}
