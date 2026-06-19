import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingContacts() {
  return (
    <div id="floating-contact-widget" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/2347076725564"
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:bg-[#20ba59] hover:scale-105 transition-all group font-medium text-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap">
          WhatsApp Chat
        </span>
      </motion.a>

      {/* Phone Call Floating Button */}
      <motion.a
        href="tel:07076725564"
        id="floating-phone-btn"
        className="flex items-center gap-2 bg-black/60 border border-[#00F0FF]/60 text-[#00F0FF] px-4 py-3 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:bg-[#00F0FF]/15 hover:scale-105 transition-all group font-medium text-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        title="Call Us Now"
      >
        <Phone className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap">
          Call 07076725564
        </span>
      </motion.a>

      {/* Email Floating Button */}
      <motion.a
        href="mailto:techupdateschicago@proton.me"
        id="floating-email-btn"
        className="flex items-center gap-2 bg-black/60 border border-[#BC00FF]/60 text-[#BC00FF] px-4 py-3 rounded-full shadow-[0_0_15px_rgba(188,0,255,0.25)] hover:bg-[#BC00FF]/15 hover:scale-105 transition-all group font-medium text-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        title="Email Us"
      >
        <Mail className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap font-sans">
          Email Support
        </span>
      </motion.a>
    </div>
  );
}
