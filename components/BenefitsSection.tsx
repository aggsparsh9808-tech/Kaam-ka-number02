import React from 'react';
import {
  Clock,
  Banknote,
  Bike,
  Gift,
  ShieldCheck,
  Headphones,
  CheckCircle2,
} from 'lucide-react';
import { TranslationStrings } from '../types';
import { ASSETS } from '../data/content';

interface BenefitsSectionProps {
  t: TranslationStrings;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ t }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="w-6 h-6 text-white" />;
      case 'cash':
        return <Banknote className="w-6 h-6 text-white" />;
      case 'bike':
        return <Bike className="w-6 h-6 text-white" />;
      case 'gift':
        return <Gift className="w-6 h-6 text-white" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case 'support':
      default:
        return <Headphones className="w-6 h-6 text-white" />;
    }
  };

  const leftItems = t.benefits.items.filter((item) => item.position === 'left');
  const rightItems = t.benefits.items.filter((item) => item.position === 'right');

  return (
    <section
      id="benefits"
      className="py-16 sm:py-24 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p
            id="benefits-eyebrow"
            className="text-xs sm:text-sm font-bold tracking-widest text-[#13151A]/70 uppercase"
          >
            {t.benefits.eyebrow}
          </p>
          <h2
            id="benefits-heading"
            className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-[#13151A] tracking-tight"
          >
            {t.benefits.heading}
          </h2>
        </div>

        {/* 3-Column Desktop Grid / Responsive Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column (3 Benefit Items) */}
          <div className="lg:col-span-4 flex flex-col space-y-8 sm:space-y-12 items-center lg:items-center text-center">
            {leftItems.map((item, idx) => (
              <div
                key={idx}
                id={`benefit-left-${idx}`}
                className="flex flex-col items-center group max-w-xs transition-transform hover:-translate-y-1"
              >
                {/* Black Circular Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#13151A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3 sm:mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#13151A] leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Center Column: Team Image with "work part-time or full time" */}
          <div className="lg:col-span-4 flex justify-center order-first lg:order-none mb-6 lg:mb-0">
            <div
              id="benefits-center-card"
              className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden shadow-2xl bg-[#F3F3F3] border border-neutral-200"
            >
              {/* Header Title inside card */}
              <div className="pt-6 pb-4 px-6 text-center bg-white">
                <h3 className="text-xl sm:text-2xl font-black text-[#13151A] tracking-tight leading-tight whitespace-pre-line">
                  {t.benefits.centerTitle}
                </h3>
              </div>

              {/* Team Group Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  id="benefits-team-image"
                  src={ASSETS.benefitsTeam}
                  alt="Delivery Partners Team"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column (3 Benefit Items) */}
          <div className="lg:col-span-4 flex flex-col space-y-8 sm:space-y-12 items-center lg:items-center text-center">
            {rightItems.map((item, idx) => (
              <div
                key={idx}
                id={`benefit-right-${idx}`}
                className="flex flex-col items-center group max-w-xs transition-transform hover:-translate-y-1"
              >
                {/* Black Circular Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#13151A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3 sm:mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#13151A] leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
