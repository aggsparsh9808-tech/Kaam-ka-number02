import React, { useState } from 'react';
import { Check, MessageSquare, Loader2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { TranslationStrings } from '../types';
import { ASSETS } from '../data/content';
import { analytics } from '../utils/analytics';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroSectionProps {
  t: TranslationStrings;
  onLeadSuccess: (phone: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t, onLeadSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validatePhone = (phone: string): boolean => {
    const clean = phone.replace(/\D/g, '');
    return clean.length === 10 && /^[6-9]/.test(clean);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const digitsOnly = rawVal.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(digitsOnly);
    if (errorMsg) setErrorMsg('');
    if (digitsOnly.length === 1) {
      analytics.track('registration_form_started');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      setErrorMsg('Please enter your contact number');
      return;
    }
    if (!validatePhone(phoneNumber)) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!agreedToTerms) {
      setErrorMsg('Please accept the terms to continue');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    analytics.track('registration_form_submitted', { phone: `+91${phoneNumber}` });

    // Simulate API registration request
    setTimeout(() => {
      setIsSubmitting(false);
      analytics.track('registration_form_success', { phone: `+91${phoneNumber}` });
      onLeadSuccess(phoneNumber);
    }, 650);
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-black"
    >
      {/* Hero Container with Image and Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center shadow-2xl border border-neutral-800">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              id="hero-delivery-partner-image"
              src={ASSETS.hero}
              alt="89200 89200 Delivery Partner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[75%_center] sm:object-right"
            />
            {/* Desktop Left-to-Right & Mobile Top-to-Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 sm:via-black/75 to-transparent sm:w-[68%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent sm:hidden" />
          </div>

          {/* Floating Badges on Hero Image (matching reference screenshot) */}
          {/* 1. Top-Right Credited Badge */}
          <div
            id="badge-credited-income"
            className="absolute top-6 sm:top-10 right-4 sm:right-1/4 z-20 bg-[#13151A]/85 backdrop-blur-md border border-neutral-700/80 rounded-2xl px-4 py-2.5 shadow-xl flex items-center space-x-3 text-white pointer-events-none transform hover:scale-105 transition-transform"
          >
            <div className="w-6 h-6 rounded-full bg-[#16A34A] flex items-center justify-center text-white shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-none">
                + ₹30,000
              </div>
              <div className="text-[11px] font-medium text-neutral-300 leading-none mt-1">
                {t.hero.badges.credited}
              </div>
            </div>
          </div>

          {/* 2. Middle Badge: Food delivery work */}
          <div
            id="badge-food-delivery-work"
            className="absolute top-1/2 right-6 sm:right-[38%] z-20 hidden sm:inline-flex items-center bg-[#13151A]/90 backdrop-blur-sm border border-neutral-700/80 rounded-full px-4 py-1.5 shadow-lg text-xs font-bold tracking-wide text-white pointer-events-none"
          >
            {t.hero.badges.foodDelivery}
          </div>

          {/* 3. Bottom Right Badge: Pan-India Hiring */}
          <div
            id="badge-pan-india-hiring"
            className="absolute bottom-6 sm:bottom-12 right-4 sm:right-12 z-20 inline-flex items-center bg-[#13151A]/90 backdrop-blur-md border border-neutral-600 rounded-xl px-4 py-2 shadow-xl text-xs sm:text-sm font-bold tracking-wide text-white pointer-events-none"
          >
            {t.hero.badges.panIndia}
          </div>

          {/* Left Column: Hero Typography & Lead Form */}
          <div className="relative z-10 w-full max-w-xl p-6 sm:p-10 lg:p-14 text-white">
            {/* Main Headline */}
            <h1
              id="hero-main-headline"
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white whitespace-pre-line"
            >
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheadline"
              className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-medium text-neutral-300 leading-relaxed max-w-md"
            >
              {t.hero.subheadline}
            </p>

            {/* Registration Card (Pixel-accurate matching approved reference) */}
            <div
              id="hero-registration-card"
              className="mt-6 sm:mt-8 bg-[#181B22]/95 backdrop-blur-md border border-neutral-700/90 rounded-2xl p-5 sm:p-6 shadow-2xl max-w-md"
            >
              <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight mb-3 sm:mb-4">
                {t.hero.formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label
                    htmlFor="hero-phone-input"
                    className="block text-xs font-medium text-neutral-300 mb-1"
                  >
                    {t.hero.phoneLabel}
                  </label>
                  <div className="relative flex items-center rounded-xl bg-neutral-800/90 border border-neutral-600 focus-within:border-white transition-colors overflow-hidden">
                    <span className="pl-3.5 pr-2 text-xs sm:text-sm font-bold text-neutral-200 select-none">
                      +91
                    </span>
                    <div className="h-5 w-px bg-neutral-600 my-auto" />
                    <input
                      id="hero-phone-input"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      placeholder={t.hero.phonePlaceholder}
                      maxLength={10}
                      className="w-full bg-transparent px-3 py-2.5 text-sm sm:text-base font-semibold text-white placeholder-neutral-500 focus:outline-none"
                    />
                  </div>
                  {errorMsg && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errorMsg}</span>
                    </p>
                  )}
                </div>

                {/* T&C Checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    id="hero-terms-checkbox"
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-4 h-4 rounded-sm bg-neutral-800 border-neutral-600 text-[#13151A] focus:ring-0 cursor-pointer accent-white"
                  />
                  <label
                    htmlFor="hero-terms-checkbox"
                    className="text-xs text-neutral-300 select-none cursor-pointer"
                  >
                    {t.hero.termsLabel}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  id="hero-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-white hover:bg-neutral-100 text-[#13151A] font-bold text-sm rounded-xl tracking-wide transition-all shadow-md active:scale-[0.99] disabled:opacity-75 cursor-pointer flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#13151A]" />
                      <span>{t.hero.submittingBtn}</span>
                    </>
                  ) : (
                    <span>{t.hero.submitBtn}</span>
                  )}
                </button>

                {/* WhatsApp instant reply note */}
                <div className="flex items-center space-x-2 pt-1 text-[11px] sm:text-xs text-neutral-300 font-medium">
                  <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-2.5 h-2.5 text-[#25D366]" />
                  </div>
                  <span>{t.hero.whatsappNote}</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
