import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, MessageCircle, Mail } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQView() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-view-container" className="py-8 px-4 sm:px-6 max-w-4xl mx-auto relative">
      
      {/* Page Title */}
      <div className="text-center mb-10">
        <h2 className="font-space font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
          Help Desk & Frequently Answered Questions
        </h2>
        <p className="font-sans text-gray-450 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Equip yourself with knowledge regarding our product origination, order shipments, Lagos priority delivery, and custom device warranty protection.
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3.5 mb-12 font-sans">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              id={`faq-item-${index}`}
              className="bg-[#090616]/80 border border-purple-950/40 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-purple-950/15"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider font-space bg-purple-950 px-2 py-0.5 rounded text-cyan-400">
                    {faq.category}
                  </span>
                  <h3 className="font-space font-medium text-white text-xs sm:text-sm leading-snug">
                    {faq.q}
                  </h3>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-purple-400 shrink-0" />
                )}
              </button>
              
              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-purple-950/20 text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Contact Box */}
      <div className="bg-purple-950/10 border border-purple-900/30 rounded-3xl p-6 sm:p-8 text-center">
        <HelpCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
        <h4 className="font-space font-semibold text-white text-md sm:text-lg">
          Still Have Cosmic Questions?
        </h4>
        <p className="font-sans text-xs text-gray-400 mt-1.5 max-w-md mx-auto">
          Our customer happiness officers are online and ready to assist you. Ask us directly about live prices or specific space accessories color variations.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <a 
            href="tel:07076725564" 
            className="flex items-center justify-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs px-5 py-3 rounded-xl transition-all w-full sm:w-auto font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>Call 07076725564</span>
          </a>

          <a 
            href="https://wa.me/2347076725564"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-mono text-xs px-5 py-3 rounded-xl transition-all w-full sm:w-auto font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Agent</span>
          </a>

          <a 
            href="mailto:techupdateschicago@proton.me" 
            className="flex items-center justify-center gap-2 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/30 text-purple-400 font-mono text-xs px-5 py-3 rounded-xl transition-all w-full sm:w-auto font-medium"
          >
            <Mail className="w-4 h-4" />
            <span>Email Us</span>
          </a>
        </div>
      </div>

    </div>
  );
}
