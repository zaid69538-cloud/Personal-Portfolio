import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { TestimonialItem } from '../../types/portfolio';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Endorsements"
          title="What Collaborators & Clients Say"
          subtitle="Direct feedback from product executives, engineering leaders, and visionary founders."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <TiltCard maxTilt={8} className="h-full bg-slate-900/60 border border-white/10 p-7 rounded-3xl backdrop-blur-xl flex flex-col justify-between hover:border-purple-400/40 transition-colors">
                <div>
                  {/* Top Quote & Rating */}
                  <div className="flex items-center justify-between mb-5">
                    <Quote className="w-8 h-8 text-cyan-400 opacity-60" />
                    <div className="flex items-center gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-cyan-400/40"
                  />
                  <div>
                    <div className="font-bold text-white text-sm">{item.name}</div>
                    <div className="text-xs text-slate-400">
                      {item.role}, <span className="text-cyan-300">{item.company}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
