/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Ruler, Sparkles, PhoneCall, ArrowDown, Scissors, CheckCircle2 } from 'lucide-react';
import { WORKSHOP_NAME, WORKSHOP_PHONE } from '../data/products';
import { toPersianDigits } from '../utils/bagCalculator';

interface HeroProps {
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white pt-10 pb-16 lg:py-20 border-b border-stone-800">
      {/* Subtle industrial grid background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (in RTL: Right side content): Text & Offerings */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-md">
              <Scissors className="w-3.5 h-3.5" />
              <span>تولید دست‌اول کارگاهی بدون واسطه در اصفهان و ارسال سراسر کشور</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight text-balance">
              {WORKSHOP_NAME}
              <span className="block text-amber-400 mt-2 text-2xl sm:text-3xl lg:text-4xl">
                تولیدی تخصصی کیف‌های برزنتی ابزار و همه‌کاره
              </span>
            </h1>

            {/* Subtitle with user's core exact requirements */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              تولید حرفه‌ای انواع کیف برای 
              <strong className="text-white font-bold"> دستگاه جوش، سنگ فرز، دریل، کیف‌های مسافرتی، باربند ضدباران و ساک‌های جاپتویی</strong>
              . دوخته شده با 
              <span className="text-amber-300 font-semibold"> پارچه برزنتی ضخیم و مقاوم ۳ لا و ۶ لا</span>
              ، 
              <span className="text-amber-300 font-semibold"> نخ ۲۳ لا پنبه‌ای نشکن</span>
              {' '}و 
              <span className="text-amber-300 font-semibold"> زیپ و سرزیپ فوق‌العاده مقاوم و روان شماره ۱۰</span>.
            </p>

            {/* 4 Key Pillars Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-stone-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>برزنت ضد آب و ضد سایش سنگین کارگاهی</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>دوخت فوق‌العاده مستحکم با نخ ۲۳ لا پنبه‌ای</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>زیپ شماره ۱۰ دنده درشت با سرزیپ‌های فلزی روان</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>امکان دوخت در ابعاد دلخواه (طول، عرض، ارتفاع)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#products"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all text-center inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <span>مشاهده کاتالوگ و مدل‌ها</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCalculator}
                className="px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700 font-bold rounded-xl active:scale-95 transition-all text-center inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <Ruler className="w-4 h-4 text-amber-400" />
                <span>محاسبه‌گر ابعاد سفارشی</span>
              </button>

              <a
                href={`tel:${WORKSHOP_PHONE}`}
                className="px-4 py-3.5 text-stone-300 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>مشاوره: {toPersianDigits(WORKSHOP_PHONE)}</span>
              </a>
            </div>

            {/* Quick Messenger Channels Strip */}
            <div className="pt-2 border-t border-stone-800/80">
              <div className="text-xs text-stone-400 mb-2 flex items-center gap-1.5">
                <span>پیام مستقیم در شبکه‌های اجتماعی (۰۹۳۹۸۰۸۳۸۵۱):</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="https://eitaa.com/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-orange-500/50 rounded-lg text-xs font-semibold text-stone-200 transition-all flex items-center gap-1.5 hover:scale-105"
                  title="پیام به ایتا"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF6C00]" />
                  <span>ایتا</span>
                </a>

                <a
                  href="https://rubika.ir/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-purple-500/50 rounded-lg text-xs font-semibold text-stone-200 transition-all flex items-center gap-1.5 hover:scale-105"
                  title="پیام به روبیکا"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                  <span>روبیکا</span>
                </a>

                <a
                  href="https://t.me/+989398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-sky-500/50 rounded-lg text-xs font-semibold text-stone-200 transition-all flex items-center gap-1.5 hover:scale-105"
                  title="پیام به تلگرام"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#24A1DE]" />
                  <span>تلگرام</span>
                </a>

                <a
                  href="https://ble.ir/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-emerald-500/50 rounded-lg text-xs font-semibold text-stone-200 transition-all flex items-center gap-1.5 hover:scale-105"
                  title="پیام به بله"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A859]" />
                  <span>بله</span>
                </a>

                <a
                  href="https://instagram.com/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-pink-500/50 rounded-lg text-xs font-semibold text-stone-200 transition-all flex items-center gap-1.5 hover:scale-105"
                  title="پیج اینستاگرام"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E1306C]" />
                  <span>اینستاگرام</span>
                </a>

                <a
                  href="https://wa.me/989398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-emerald-500/50 rounded-lg text-xs font-semibold text-stone-200 transition-all flex items-center gap-1.5 hover:scale-105"
                  title="گفتگو در واتساپ"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                  <span>واتساپ</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Studio Illumination */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background ambient gold/green glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-emerald-600/15 to-amber-600/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
              
              <div className="relative bg-stone-800/90 border border-stone-700/80 rounded-2xl overflow-hidden shadow-2xl p-4">
                
                {/* Main Hero Photo: User's image with studio pedestal illumination & realistic depth */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-stone-800 via-stone-900 to-stone-950 border border-stone-700/60 group flex items-center justify-center p-3">
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.18) 0%, transparent 70%)',
                    }}
                  />
                  <img
                    src="/assets/aistudio/photo_21334228053_y_6d42d873.jpg"
                    alt="کیف ابزار برزنتی با ابعاد سفارشی نقش جهان"
                    referrerPolicy="no-referrer"
                    className="relative z-10 max-h-full max-w-full object-contain filter contrast-[1.05] saturate-[1.08] brightness-[1.03] drop-shadow-[0_16px_22px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-3 right-3 left-3 z-20 bg-stone-950/85 backdrop-blur-md px-3 py-2 rounded-lg border border-stone-700/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-200">سفارش دقیق بر اساس طول، عرض و ارتفاع</span>
                    <span className="text-amber-400 font-mono font-bold">برزنت ۶ لا</span>
                  </div>
                </div>

                {/* Secondary Mini Thumbnails strip */}
                <div className="grid grid-cols-3 gap-2.5 mt-3">
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-stone-700 bg-stone-900">
                    <img
                      src="/assets/aistudio/photo_22734003112_y_401cd545.jpg"
                      alt="کیف برزنتی TOOL KIT"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 left-1 text-[9px] bg-stone-900/90 text-stone-300 text-center py-0.5 rounded truncate">
                      طرح TOOL KIT
                    </span>
                  </div>

                  <div className="relative aspect-square rounded-lg overflow-hidden border border-stone-700 bg-stone-900">
                    <img
                      src="/assets/aistudio/photo_22337402922_y_f93e7a92.jpg"
                      alt="کیف رولی آچار برزنتی"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 left-1 text-[9px] bg-stone-900/90 text-stone-300 text-center py-0.5 rounded truncate">
                      رولی ۱۴ خانه
                    </span>
                  </div>

                  <div className="relative aspect-square rounded-lg overflow-hidden border border-stone-700 bg-stone-900">
                    <img
                      src="/assets/aistudio/photo_21334228500_y_db9a75ba.jpg"
                      alt="کاور گرد زاپاس و کپسول"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 left-1 text-[9px] bg-stone-900/90 text-stone-300 text-center py-0.5 rounded truncate">
                      کاور گرد کوله‌ای
                    </span>
                  </div>
                </div>

                {/* Bottom warranty badge */}
                <div className="mt-3.5 pt-3 border-t border-stone-700/80 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>تضمین اصالت پارچه و دوخت نشکن</span>
                  </span>
                  <span className="text-amber-400 font-mono font-medium">نخ ۲۳ لا پنبه‌ای</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
