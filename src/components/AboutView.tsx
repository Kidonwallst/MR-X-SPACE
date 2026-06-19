import React from 'react';
import { Space, Sparkles, Trophy, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutView() {
  return (
    <div id="about-us-container" className="py-8 px-4 sm:px-6 relative">
      {/* Visual background nebulae */}
      <div className="cosmic-nebula-left" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Banner Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 bg-purple-950/40 border border-purple-800/40 rounded-full text-xs text-cyan-400 font-mono uppercase tracking-widest mb-3"
          >
            👽 Discover Our Celestial Orbit
          </motion.div>
          
          <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Our Story & Deep Tech Specialty
          </h2>
          <p className="font-sans text-gray-400 text-sm mt-3 max-w-2xl mx-auto">
            Welcome to Mr X Space. Founded with a vision to connect modern Nigerian consumers to state-of-the-art smartphones, masterclass laptops, and original space accessories.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-[#090616]/80 border border-purple-950/40 rounded-3xl p-6 sm:p-10 mb-10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          <h3 className="font-space font-semibold text-white text-xl sm:text-2xl mb-4 border-b border-purple-950/40 pb-4">
            🚀 The Genesis of Mr X Space
          </h3>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-sans">
            <p>
              Founded in Port Harcourt, Rivers State, Nigeria, <strong>Mr X Space</strong> was built by dedicated gadget enthusiasts who grew tired of the high prevalence of clone products, uncredited grey markets, and poor customer warranty protections. Our mission is to secure 100% authentic premium hardware for general consumers.
            </p>
            <p>
              We specialize primarily in high-end flagship devices, featuring custom specs for <strong>Apple iPhones</strong> and <strong>Samsung Galaxy Ultra series</strong>, along with specialized productivity laptops (MacBook Pro and Dell XPS systems). We recognize that buying a high-end gadget is a major capital investment, and we provide corresponding security, rapid deliveries, and continuous technical support.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          <div className="bg-purple-950/10 border border-purple-950/30 rounded-2xl p-6 flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/40 flex items-center justify-center shrink-0 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-space font-semibold text-white text-base">
                100% Guaranteed Authenticity
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1 leading-relaxed">
                We implement serial verification for all devices. When you buy from Mr X Space, you receive original items with official global manufacturer warranty profiles.
              </p>
            </div>
          </div>

          <div className="bg-purple-950/10 border border-purple-950/30 rounded-2xl p-6 flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/40 flex items-center justify-center shrink-0 text-cyan-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-space font-semibold text-white text-base">
                Premium Customer Support
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1 leading-relaxed">
                Our support team is active on WhatsApp and call from Mon-Sat to resolve after-sales setup queries, configuration backups, or coordinate high-priority shipping.
              </p>
            </div>
          </div>

          <div className="bg-purple-950/10 border border-purple-950/30 rounded-2xl p-6 flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/40 flex items-center justify-center shrink-0 text-cyan-400">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-space font-semibold text-white text-base">
                Nigeria-Wide Shipping
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1 leading-relaxed">
                Dispatching from Port Harcourt, Rivers State, we guarantee same-day tracking code generation and safe courier dispatch to cities nationwide.
              </p>
            </div>
          </div>

          <div className="bg-purple-950/10 border border-purple-950/30 rounded-2xl p-6 flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/40 flex items-center justify-center shrink-0 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-space font-semibold text-white text-base">
                Competitive Transparent Prices
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1 leading-relaxed">
                No hidden transaction percentages, fake listings, or unpredictable costs. Our prices represent competitive wholesale rates direct to consumers.
              </p>
            </div>
          </div>

        </div>

        {/* Store Location Info Panel */}
        <div className="bg-gradient-to-r from-purple-950/20 to-cyan-950/10 border border-cyan-900/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-950/55 rounded-2xl border border-cyan-800/30 text-cyan-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-space font-bold text-white text-md">
                Visit Our Headquarters
              </h4>
              <p className="font-sans text-xs text-gray-400 mt-1">
                📍 116 Aba Road, Garrison, Port Harcourt, Rivers State. Coordinate collections with our agent on WhatsApp or Call.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a 
              href="tel:07076725564" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-space px-4 py-2 text-xs rounded-xl transition-colors font-medium text-center"
            >
              Call Manager
            </a>
            <a 
              href="https://wa.me/2347076725564" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-space px-4 py-2 text-xs rounded-xl transition-all font-medium text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
