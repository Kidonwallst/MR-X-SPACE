import React from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Instagram, 
  Twitter, 
  Youtube, 
  Video, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ViewTab } from '../types';

interface FooterProps {
  setCurrentTab: (tab: ViewTab) => void;
  onSubscribeClick: (email: string) => void;
}

export default function Footer({ setCurrentTab, onSubscribeClick }: FooterProps) {
  const [emailInput, setEmailInput] = React.useState('');

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      onSubscribeClick(emailInput);
      setEmailInput('');
    }
  };

  return (
    <footer id="app-footer" className="bg-[#020205] border-t border-white/10 text-gray-400 font-sans mt-auto relative overflow-hidden">
      
      {/* Absolute background nebula glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-900/10 rounded-full filter blur-[80px] pointer-events-none" />

      {/* Subscription banner */}
      <div className="border-b border-purple-950/25 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <h3 className="font-space font-semibold text-white text-lg sm:text-xl flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Stay Ahead in the Tech Space
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Subscribe to the Mr X Space galaxy newsletter. Get notified about exclusive flash sales, new flagship arrivals, and promotional space deals.
            </p>
          </div>
          <form onSubmit={handleSubscribeSubmit} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full bg-purple-950/15 text-gray-200 placeholder-purple-300/30 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-900/40 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              id="newsletter-subscribe-btn"
              className="bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space font-medium text-xs sm:text-sm px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Col */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-800 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#03000a] rounded-lg flex items-center justify-center font-space font-bold text-white text-sm">
                X
              </div>
            </div>
            <h2 className="font-space font-bold text-white text-md tracking-tight">
              Mr X <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Space</span>
            </h2>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            Phones, Laptops, Gadgets & Accessories. Our mission is to bridge tech enthusiasts with premium, 100% authentic international hardware with unrivaled customer care.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-950/20 hover:bg-purple-950/40 text-gray-400 hover:text-white rounded-lg transition-colors" title="Instagram">
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-950/20 hover:bg-purple-950/40 text-gray-400 hover:text-white rounded-lg transition-colors" title="Twitter/X">
              <Twitter className="w-4.5 h-4.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-950/20 hover:bg-purple-950/40 text-gray-400 hover:text-white rounded-lg transition-colors" title="YouTube">
              <Youtube className="w-4.5 h-4.5" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-950/20 hover:bg-purple-950/40 text-gray-400 hover:text-white rounded-lg transition-colors" title="TikTok">
              <Video className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-space font-semibold text-white text-xs uppercase tracking-wider">
            Quick Navigation
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li>
              <button onClick={() => setCurrentTab('home')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5 text-left">
                <ChevronRight className="w-3 h-3 text-purple-500" /> Home Page
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('shop')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5 text-left">
                <ChevronRight className="w-3 h-3 text-purple-500" /> Explore Gadget Catalog
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('deals')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5 text-left">
                <ChevronRight className="w-3 h-3 text-purple-500" /> Space Deals & Flash Sales
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('about')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5 text-left">
                <ChevronRight className="w-3 h-3 text-purple-500" /> Our Story & Team
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('contact')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5 text-left">
                <ChevronRight className="w-3 h-3 text-purple-500" /> Reach Out / Location
              </button>
            </li>
          </ul>
        </div>

        {/* Help & Support Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-space font-semibold text-white text-xs uppercase tracking-wider">
            Help & Trust
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li>
              <button onClick={() => setCurrentTab('faq')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-purple-500" /> FAQ & Assistance
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('faq')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5 lg:whitespace-nowrap">
                <ChevronRight className="w-3 h-3 text-purple-500" /> Warranty Information
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('faq')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5 text-left">
                <ChevronRight className="w-3 h-3 text-purple-500" /> Product Authenticity Guarantees
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentTab('faq')} className="hover:text-cyan-400 hover:translate-x-1 transition-all flex items-center gap-1.5 text-left">
                <ChevronRight className="w-3 h-3 text-purple-500" /> Return & Exchange Policies
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Column (PROMINENT - Clicking options is verified) */}
        <div className="flex flex-col gap-3.5 border-l border-purple-950/20 pl-0 md:pl-4">
          <h4 className="font-space font-semibold text-white text-xs uppercase tracking-wider">
            Contact Mr X Space
          </h4>
          <div className="flex flex-col gap-2.5 text-xs text-gray-400 font-mono">
            
            {/* Clickable phone link */}
            <a 
              href="tel:07076725564" 
              id="footer-call-link"
              className="flex items-start gap-2.5 hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[10px] text-gray-500 font-sans uppercase">Phone Call</p>
                <p className="text-gray-300">07076725564</p>
              </div>
            </a>

            {/* Clickable WhatsApp link */}
            <a 
              href="https://wa.me/2347076725564" 
              target="_blank" 
              rel="noopener noreferrer"
              id="footer-whatsapp-link"
              className="flex items-start gap-2.5 hover:text-emerald-400 transition-colors group"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]/5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[10px] text-gray-500 font-sans uppercase">WhatsApp Chat</p>
                <p className="text-gray-300">07076725564</p>
              </div>
            </a>

            {/* Clickable Email link */}
            <a 
              href="mailto:techupdateschicago@proton.me" 
              id="footer-email-link"
              className="flex items-start gap-2.5 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="break-all">
                <p className="text-[10px] text-gray-500 font-sans uppercase">Email Address</p>
                <p className="text-gray-300">techupdateschicago@proton.me</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-500 font-sans uppercase">Store Location</p>
                <p className="text-gray-300 font-sans leading-relaxed">
                  116 Aba Road, Garrison, Port Harcourt, Rivers State
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-500 font-sans uppercase">Working Hours</p>
                <p className="text-gray-300 font-sans">Mon-Sat, 9:00 AM - 6:00 PM (WAT)</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Copy & Legal disclaimer */}
      <div className="border-t border-purple-950/20 bg-purple-950/5 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center text-[11px] text-gray-500">
          <p>© 2026 Mr X Space. All Rights Reserved. Specializing in iPhones, Samsung gadgets and laptops.</p>
          <p className="flex items-center gap-3">
            <span>Privacy Policy</span>
            <span className="text-gray-700 font-light">|</span>
            <span>Terms & Conditions</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
