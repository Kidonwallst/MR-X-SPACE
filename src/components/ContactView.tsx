import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactViewProps {
  onSuccessToast: (message: string) => void;
}

export default function ContactView({ onSuccessToast }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Sales Enquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out the required files!');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast("✅ Your message has been sent. We'll get back to you within 24 hours.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Sales Enquiry',
        message: ''
      });
    }, 1200);
  };

  return (
    <div id="contact-us-page-container" className="py-8 px-4 sm:px-6 relative">
      <div className="cosmic-nebula-right" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Head */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-purple-950/40 border border-purple-800/40 rounded-full text-xs text-cyan-400 font-mono uppercase tracking-widest mb-3 animate-pulse">
            🛸 Communication Link Established
          </div>
          <h2 className="font-space font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Connect With Our Tech Support
          </h2>
          <p className="font-sans text-gray-450 text-sm mt-3 max-w-2xl mx-auto">
            Do you have inquiries regarding flagships, bulk company orders, accessories availability, or warranty services? Reach out directly via form or clickable contact methods.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left panel: Info & Clickables */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-[#090616]/80 border border-purple-950/40 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
              <h3 className="font-space font-bold text-white text-lg tracking-tight mb-2">
                Click to Connect
              </h3>

              <div className="flex flex-col gap-4 font-mono">
                {/* Phone Link */}
                <a 
                  href="tel:07076725564" 
                  id="contact-page-phone-btn"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-blue-950/10 hover:bg-blue-950/30 border border-blue-900/10 hover:border-blue-500/30 text-blue-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-sans font-semibold text-gray-400 text-xs uppercase tracking-wider">
                      Direct Voice Call
                    </h4>
                    <p className="text-white text-base font-bold mt-1">07076725564</p>
                    <p className="font-sans text-xs text-gray-500 mt-1">Click to call immediately</p>
                  </div>
                </a>

                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/2347076725564" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="contact-page-whatsapp-btn"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-950/10 hover:bg-emerald-950/30 border border-emerald-900/10 hover:border-emerald-500/30 text-emerald-400 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-500/5 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-sans font-semibold text-gray-400 text-xs uppercase tracking-wider">
                      WhatsApp Live Chat
                    </h4>
                    <p className="text-white text-base font-bold mt-1">07076725564</p>
                    <p className="font-sans text-xs text-gray-500 mt-1">Instant replies from support team</p>
                  </div>
                </a>

                {/* Email Link */}
                <a 
                  href="mailto:techupdateschicago@proton.me" 
                  id="contact-page-email-btn"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/10 hover:bg-purple-950/30 border border-purple-900/10 hover:border-purple-500/30 text-purple-400 transition-all group"
                >
                  <Mail className="w-5 h-5 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div className="break-all">
                    <h4 className="font-sans font-semibold text-gray-400 text-xs uppercase tracking-wider">
                      E-Mail Address
                    </h4>
                    <p className="text-white text-sm sm:text-base font-bold mt-1 font-mono">
                      techupdateschicago@proton.me
                    </p>
                    <p className="font-sans text-xs text-gray-500 mt-1">Verified primary business mailbox</p>
                  </div>
                </a>
              </div>

              {/* Base Location & Timings */}
              <div className="border-t border-purple-950/30 pt-6 mt-2 flex flex-col gap-4 font-sans text-xs text-gray-450 leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-300">HQ Store Address:</strong>
                    <p className="text-gray-450 mt-1">116 Aba Road, Garrison, Port Harcourt, Rivers State, Nigeria.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-300">Space Working Hours:</strong>
                    <p className="text-gray-450 mt-0.5">Monday – Saturday: 9:00 AM – 6:00 PM (WAT)</p>
                    <p className="text-gray-550 italic mt-0.5">Closed on Sundays & Federal Public Holidays</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7">
            
            <div className="bg-[#090616]/80 border border-purple-950/40 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-space font-bold text-white text-lg tracking-tight mb-2">
                Transmit Transceiver Message
              </h3>
              <p className="font-sans text-xs text-gray-400 mb-6">
                Fill the fields below to dispatch encrypted message packages directly into our administrative space.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold mb-1.5">
                      Phone Number (Nigeria)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 08031234567"
                      className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. customer@domain.com"
                    className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5">
                    Enquiry Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Sales Enquiry">Sales / Purchase Enquiry</option>
                    <option value="Technical Support">Technical Support / After-sales</option>
                    <option value="Warranty Status">Warranty & Accessories Returns</option>
                    <option value="Partnership / Bulk">Partnership & Bulk Enterprise procurement</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-1.5">
                    Message Body *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="State the devices or specifications you are querying about..."
                    className="w-full bg-[#03000b] text-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl border border-purple-950 focus:outline-none focus:border-cyan-500 transition-colors"
                  ></textarea>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-gradient-to-r from-purple-800 to-cyan-500 hover:from-purple-700 hover:to-cyan-400 text-white font-space text-xs sm:text-sm font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4.5 h-4.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Transmitting signal...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-300" />
                      <span>Send Signal Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
