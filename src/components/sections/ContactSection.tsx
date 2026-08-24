import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Send, Sparkles, MessageSquare, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import GlowingButton from '../ui/GlowingButton';
import { PortfolioData } from '../../types/portfolio';

interface ContactSectionProps {
  personal: PortfolioData['personal'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#8b5cf6', '#ec4899', '#38bdf8'],
      });

      // Reset after a moment
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="Connect & Collaborate"
          subtitle="Have a question, technical discussion, or project inquiry? Feel free to send a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Details & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard maxTilt={6} className="p-8 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl">
              <h3 className="text-2xl font-extrabold text-white mb-3">
                Direct Channels
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Feel free to reach out for machine learning discussions, open-source projects, or general inquiries.
              </p>

              <div className="space-y-6">
                {/* Email Box with Copy */}
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                      <div className="text-sm font-semibold text-white truncate group-hover:text-cyan-300 transition-colors">
                        {personal.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-slate-700/60 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-600 transition-all shrink-0 ml-2"
                    title="Copy Email to Clipboard"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personal.location}
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Current Availability</div>
                    <div className="text-sm font-semibold text-emerald-300">
                      {personal.availability}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Your transmission has been received and I will reply to your inbox shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. New WebGL Experience & Full-Stack Platform"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, timeline, and tech requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <GlowingButton
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                      icon={isSubmitting ? <Sparkles className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    >
                      {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
                    </GlowingButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
