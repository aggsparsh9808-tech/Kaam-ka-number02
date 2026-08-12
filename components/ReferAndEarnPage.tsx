import React, { useState } from 'react';
import {
  ArrowLeft,
  Share2,
  Calculator,
  Users,
  Award,
  CheckCircle2,
  MessageSquare,
  Gift,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';
import { TranslationStrings } from '../types';
import { ASSETS, BRAND_CONFIG } from '../data/content';
import { openWhatsApp, getWhatsAppUrl } from '../utils/whatsapp';
import { analytics } from '../utils/analytics';

interface ReferAndEarnPageProps {
  t: TranslationStrings;
  onBackToHome: () => void;
}

export const ReferAndEarnPage: React.FC<ReferAndEarnPageProps> = ({
  t,
  onBackToHome,
}) => {
  const [referralCount, setReferralCount] = useState<number>(5);
  const [referrerName, setReferrerName] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Earning calculation: ₹3,000 per base referral + milestone bonus
  const calculateEarnings = (count: number): { base: number; bonus: number; total: number } => {
    const baseRate = 3000;
    const base = count * baseRate;
    let bonus = 0;
    if (count >= 15) {
      bonus = 25000;
    } else if (count >= 10) {
      bonus = 12000;
    } else if (count >= 5) {
      bonus = 5000;
    }
    return {
      base,
      bonus,
      total: Math.min(100000, base + bonus),
    };
  };

  const earnings = calculateEarnings(referralCount);

  const referralMessage = referrerName.trim()
    ? `Hi! Mere dost ${referrerName} ne mujhe 89200 89200 par delivery partner banne ke liye refer kiya hai. Mujhe 10-minute onboarding link bhejein.`
    : `Hi! Mere dost ne mujhe 89200 89200 par delivery partner banne ke liye refer kiya hai. Mujhe 10-minute onboarding link bhejein.`;

  const handleShareWhatsApp = () => {
    analytics.track('refer_page_share_whatsapp', {
      referralCount,
      hasCustomName: Boolean(referrerName),
    });
    openWhatsApp(referralMessage);
  };

  const handleCopyLink = () => {
    const url = getWhatsAppUrl(referralMessage);
    navigator.clipboard?.writeText(url);
    setCopied(true);
    analytics.track('refer_page_copy_link');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="refer-and-earn-page" className="pt-24 pb-20 bg-white">
      {/* Top Breadcrumb / Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          id="refer-back-to-home-btn"
          onClick={() => {
            analytics.track('refer_page_back_click');
            onBackToHome();
          }}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#13151A] hover:text-neutral-600 transition-colors p-2 rounded-lg hover:bg-neutral-100 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Banner Section for Refer & Earn */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-[#13151A] text-white shadow-2xl border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 z-10 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-neutral-800 border border-neutral-700 rounded-full px-3.5 py-1.5 text-xs font-extrabold tracking-wider text-green-400 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Referral Programme</span>
              </div>

              <h1
                id="refer-page-headline"
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
              >
                {t.referPage.headline}
              </h1>

              <p
                id="refer-page-subheadline"
                className="text-base sm:text-lg lg:text-xl text-neutral-300 font-medium max-w-xl leading-relaxed"
              >
                {t.referPage.subheadline}
              </p>

              {/* Direct WhatsApp Share button */}
              <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  id="refer-page-main-whatsapp-btn"
                  onClick={handleShareWhatsApp}
                  className="px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-[#13151A] font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center space-x-3 transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <span>{t.referPage.cta}</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[320px]">
              <img
                src={ASSETS.referGroup}
                alt="Refer and Earn Delivery Partners"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#13151A] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Referral Rewards Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#F3F3F3] rounded-3xl p-6 sm:p-10 lg:p-12 border border-neutral-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
              <Calculator className="w-4 h-4" />
              <span>Earnings Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#13151A] tracking-tight">
              {t.referPage.calculatorTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
              {t.referPage.calculatorSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider & Controls (Left) */}
            <div className="lg:col-span-7 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label
                    htmlFor="referral-count-slider"
                    className="text-sm sm:text-base font-bold text-[#13151A]"
                  >
                    Number of Friends to Refer:
                  </label>
                  <span className="text-2xl font-black text-[#13151A] bg-[#F3F3F3] px-4 py-1 rounded-xl">
                    {referralCount} {referralCount === 1 ? 'Friend' : 'Friends'}
                  </span>
                </div>

                <input
                  id="referral-count-slider"
                  type="range"
                  min="1"
                  max="25"
                  value={referralCount}
                  onChange={(e) => setReferralCount(parseInt(e.target.value, 10))}
                  className="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#13151A]"
                />

                <div className="flex justify-between text-[11px] font-bold text-neutral-400 mt-2">
                  <span>1 friend</span>
                  <span>5 friends (Bonus)</span>
                  <span>10 friends (Super Bonus)</span>
                  <span>25 friends</span>
                </div>
              </div>

              {/* Personalize Share Box */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <label className="block text-xs font-bold text-neutral-700">
                  Add your name to customize your referral link (optional):
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={referrerName}
                    onChange={(e) => setReferrerName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-300 text-sm font-semibold text-[#13151A] focus:outline-none focus:border-[#13151A]"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2.5 bg-[#F3F3F3] hover:bg-neutral-200 text-[#13151A] rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied' : 'Copy Link'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Estimated Total Calculation (Right) */}
            <div className="lg:col-span-5 bg-[#13151A] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Total Referral Earning
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1 tracking-tight">
                  ₹{earnings.total.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-neutral-400 mt-1 font-medium">
                  Direct transfer to your bank account after delivery milestones
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-neutral-800 text-xs sm:text-sm">
                <div className="flex justify-between text-neutral-300">
                  <span>Base Reward ({referralCount} × ₹3,000):</span>
                  <span className="font-bold text-white">₹{earnings.base.toLocaleString('en-IN')}</span>
                </div>
                {earnings.bonus > 0 && (
                  <div className="flex justify-between text-green-400 font-semibold">
                    <span>Milestone Milestone Bonus:</span>
                    <span>+ ₹{earnings.bonus.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleShareWhatsApp}
                className="w-full py-3.5 bg-white hover:bg-neutral-100 text-[#13151A] font-extrabold text-sm rounded-xl tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#13151A]" />
                <span>Share on WhatsApp to Claim</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#13151A] tracking-tight">
            {t.referPage.howItWorksTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.referPage.steps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#13151A] text-white font-black text-lg flex items-center justify-center mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#13151A] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits & Who Can Refer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Referral Benefits */}
          <div className="bg-[#F3F3F3] p-8 sm:p-10 rounded-3xl border border-neutral-200">
            <h3 className="text-xl sm:text-2xl font-black text-[#13151A] mb-6 tracking-tight flex items-center space-x-2.5">
              <Gift className="w-6 h-6 text-[#13151A]" />
              <span>{t.referPage.benefitsTitle}</span>
            </h3>
            <ul className="space-y-4">
              {t.referPage.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who Can Refer */}
          <div className="bg-[#F3F3F3] p-8 sm:p-10 rounded-3xl border border-neutral-200">
            <h3 className="text-xl sm:text-2xl font-black text-[#13151A] mb-6 tracking-tight flex items-center space-x-2.5">
              <Users className="w-6 h-6 text-[#13151A]" />
              <span>{t.referPage.whoCanReferTitle}</span>
            </h3>
            <ul className="space-y-4">
              {t.referPage.whoCanRefer.map((who, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{who}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#13151A] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            Ready to start referring?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 font-medium max-w-md mx-auto">
            Connect directly with 89200 89200 to track referral payouts and bonuses in real-time.
          </p>
          <div className="pt-2">
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-[#13151A] hover:bg-neutral-100 font-extrabold text-sm rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Start Referring on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
