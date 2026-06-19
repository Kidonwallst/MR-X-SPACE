import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Search, 
  ShoppingCart, 
  User, 
  Sparkles, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { ViewTab } from '../types';
import { CATEGORIES } from '../data';
import brandLogo from '../assets/images/logo_1781904397940.jpg';

interface HeaderProps {
  currentTab: ViewTab;
  setCurrentTab: (tab: ViewTab) => void;
  cartCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onLoginClick: () => void;
  onSelectCategory: (catId: string) => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  cartCount,
  searchQuery,
  setSearchQuery,
  onLoginClick,
  onSelectCategory,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);

  const handleNavClick = (tab: ViewTab) => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
  };

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    setCurrentTab('shop');
    setIsCategoriesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-[#020205]/40 backdrop-blur-md border-b border-white/10 glass-card">
      {/* Top Bar - Call, Email, WhatsApp, and Announcements */}
      <div id="header-top-bar" className="bg-purple-950/20 text-gray-400 text-xs py-2 px-4 sm:px-6 border-b border-purple-950/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-mono tracking-wider text-[10px] uppercase text-emerald-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Fast same-day delivery in Rivers State • Nationwide delivery
          </div>
          
          <div className="flex items-center gap-4">
            {/* Clickable Phone Number */}
            <a 
              href="tel:07076725564" 
              id="top-phone-link"
              className="flex items-center gap-1 hover:text-white transition-colors group"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>07076725564</span>
            </a>

            {/* Clickable Email */}
            <a 
              href="mailto:techupdateschicago@proton.me" 
              id="top-email-link"
              className="flex items-center gap-1 hover:text-white transition-colors group"
              title="Email Us"
            >
              <Mail className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">techupdateschicago@proton.me</span>
            </a>

            {/* Clickable WhatsApp */}
            <a 
              href="https://wa.me/2347076725564" 
              target="_blank" 
              rel="noopener noreferrer"
              id="top-whatsapp-link"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors group"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-emerald-500/10 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div id="header-main-bar" className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo with Stylized Planet / X */}
          <div 
            id="brand-logo-container"
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(147,51,234,0.3)] group-hover:border-cyan-400 transition-colors">
              <img 
                src={brandLogo} 
                alt="Mr X Space Logo" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-space font-bold tracking-tight text-lg text-white leading-tight">
                Mr X <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Space</span>
              </h1>
              <p className="font-sans text-[9px] uppercase tracking-widest text-cyan-400/90 font-semibold">
                Phones • Laptops • Gadgets
              </p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div id="search-desktop-container" className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Search iPhones, Samsung, accessories..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentTab !== 'shop') setCurrentTab('shop');
              }}
              className="w-full bg-purple-950/20 text-gray-200 placeholder-purple-300/40 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-purple-900/40 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans"
            />
            <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-purple-400/70" />
          </div>

          {/* Actions & Utilities */}
          <div id="action-icons-container" className="flex items-center gap-3 sm:gap-4">
            
            {/* Quick Contact Icons with Tooltips */}
            <div className="hidden lg:flex items-center gap-2.5 border-r border-purple-950/40 pr-4">
              <a 
                href="tel:07076725564"
                id="header-phone-icon"
                className="relative group p-2 rounded-lg bg-blue-900/10 hover:bg-blue-900/30 text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-purple-950 text-[10px] text-white px-2 py-1 rounded border border-purple-700/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Call Us
                </span>
              </a>

              <a 
                href="https://wa.me/2347076725564"
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-icon"
                className="relative group p-2 rounded-lg bg-emerald-900/10 hover:bg-emerald-900/30 text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366]/5" />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-purple-950 text-[10px] text-white px-2 py-1 rounded border border-purple-700/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Chat on WhatsApp
                </span>
              </a>

              <a 
                href="mailto:techupdateschicago@proton.me"
                id="header-email-icon"
                className="relative group p-2 rounded-lg bg-purple-900/10 hover:bg-purple-900/30 text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-purple-950 text-[10px] text-white px-2 py-1 rounded border border-purple-700/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Email Us
                </span>
              </a>
            </div>

            {/* Shopping Cart Icon */}
            <button
              onClick={() => handleNavClick('cart')}
              id="header-cart-icon-btn"
              className="relative p-2.5 rounded-xl hover:bg-cyan-950/20 text-cyan-400/90 hover:text-cyan-400 transition-all group"
              title="View Cart"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-mono text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse border border-[#060312]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account / Profile */}
            <button
              onClick={onLoginClick}
              id="header-login-btn"
              className="flex items-center gap-1.5 p-2 rounded-xl text-purple-300 hover:text-white hover:bg-purple-950/20 transition-all font-medium text-xs sm:text-sm"
              title="Login / Register"
            >
              <User className="w-4.5 h-4.5" />
              <span className="hidden sm:inline">Account</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="header-mobile-menu-btn"
              className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-purple-950/20 rounded-xl"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Categories / Links - Desktop Navigation */}
        <nav id="desktop-navbar" className="hidden md:flex items-center justify-between mt-4 pt-4 border-t border-purple-950/15">
          <div className="flex items-center gap-6">
            
            <button
              onClick={() => handleNavClick('home')}
              className={`font-space text-sm tracking-wide transition-colors ${
                currentTab === 'home' 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('shop')}
              className={`font-space text-sm tracking-wide transition-colors ${
                currentTab === 'shop' 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Shop All
            </button>

            {/* Categories Dropdown triggers */}
            <div className="relative">
              <button
                onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
                className={`font-space text-sm tracking-wide flex items-center gap-1 text-gray-300 hover:text-white transition-colors`}
              >
                Categories
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoriesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2.5 w-60 bg-[#090616]/96 border border-purple-900/50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] backdrop-blur-xl p-2 z-50 grid grid-cols-1 gap-1"
                  onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
                >
                  {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="flex items-center gap-2.5 w-full text-left px-3.5 py-2.5 rounded-lg text-xs text-gray-300 hover:text-cyan-300 hover:bg-cyan-900/10 transition-colors font-sans"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('deals')}
              className={`font-space text-sm tracking-wide transition-colors ${
                currentTab === 'deals' 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              🚀 Space Deals
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`font-space text-sm tracking-wide transition-colors ${
                currentTab === 'faq' 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Help & FAQ
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`font-space text-sm tracking-wide transition-colors ${
                currentTab === 'about' 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Our Story
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`font-space text-sm tracking-wide transition-colors ${
                currentTab === 'contact' 
                  ? 'text-cyan-400 font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact Us
            </button>

          </div>

          <div className="font-mono text-[11px] text-cyan-400/80 bg-cyan-950/20 px-3 py-1 rounded-full border border-cyan-800/10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Store Location: Port Harcourt, Rivers State</span>
          </div>
        </nav>

        {/* Search Bar & Links - Mobile View */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pt-4 border-t border-purple-950/30 flex flex-col gap-4">
            
            {/* Mobile Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search premium gadgets..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (currentTab !== 'shop') setCurrentTab('shop');
                }}
                className="w-full bg-purple-950/30 text-gray-200 placeholder-purple-300/40 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-purple-900/40 focus:outline-none"
              />
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-purple-400/70" />
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2 p-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left px-3 py-2.5 rounded-xl font-space text-sm text-gray-300 ${currentTab === 'home' ? 'bg-purple-950/30 text-cyan-400 font-semibold' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('shop')}
                className={`text-left px-3 py-2.5 rounded-xl font-space text-sm text-gray-300 ${currentTab === 'shop' ? 'bg-purple-950/30 text-cyan-400 font-semibold' : ''}`}
              >
                Shop All
              </button>
              <button
                onClick={() => handleNavClick('deals')}
                className={`text-left px-3 py-2.5 rounded-xl font-space text-sm text-gray-300 ${currentTab === 'deals' ? 'bg-purple-950/30 text-cyan-400 font-semibold' : ''}`}
              >
                🚀 Space Deals
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className={`text-left px-3 py-2.5 rounded-xl font-space text-sm text-gray-300 ${currentTab === 'faq' ? 'bg-purple-950/30 text-cyan-400 font-semibold' : ''}`}
              >
                Help & FAQ
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left px-3 py-2.5 rounded-xl font-space text-sm text-gray-300 ${currentTab === 'about' ? 'bg-purple-950/30 text-cyan-400 font-semibold' : ''}`}
              >
                Our Story
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left px-3 py-2.5 rounded-xl font-space text-sm text-gray-300 ${currentTab === 'contact' ? 'bg-purple-950/30 text-cyan-400 font-semibold' : ''}`}
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Categories Accordion Section */}
            <div className="border-t border-purple-950/20 pt-2 mt-1">
              <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold font-space px-3 mb-2">
                Browse Categories
              </p>
              <div className="grid grid-cols-2 gap-2 p-1">
                {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex items-center gap-2 px-3 py-2.5 bg-purple-950/15 hover:bg-cyan-950/15 border border-purple-950/30 rounded-xl text-left text-xs text-gray-300"
                  >
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Contacts Quick Access */}
            <div className="border-t border-purple-950/20 pt-4 flex flex-col gap-2 px-1 pb-4">
              <a 
                href="tel:07076725564"
                className="flex items-center gap-3 bg-blue-950/20 border border-blue-900/30 text-blue-400 p-3 rounded-xl text-xs font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: 07076725564</span>
              </a>
              <a 
                href="https://wa.me/2347076725564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-950/20 border border-emerald-900/30 text-emerald-400 p-3 rounded-xl text-xs font-mono"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: Chat with Us</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </header>
  );
}
