/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, XCircle, Award, ShieldAlert, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'جنس و ضخامت پارچه',
      workshop: 'برزنت ضخیم ۳ لا و ۶ لا صنعتی مقاوم در برابر کشش، تیزی ابزار و نفوذ آب و روغن',
      market: 'پارچه‌های پلاستیکی نازک یا برزنت نامرغوب که در اثر کوچک‌ترین خراش و تیزی پاره می‌شوند',
    },
    {
      feature: 'نوع نخ و دوخت',
      workshop: 'دوخته شده با نخ ۲۳ لا پنبه‌ای صنعتی با دوخت ضربدری و دوبل در محل اتصالات بار',
      market: 'نخ‌های پلی‌استر معمولی خیاطی که با کشش بار یا تماس با گریس و آفتاب فوراً می‌پوسند',
    },
    {
      feature: 'کیفیت زیپ و سرزیپ',
      workshop: 'زیپ شماره ۱۰ دنده درشت صنعتی با سرزیپ‌های فلزی آبکاری شده بسیار روان و بدون گیر',
      market: 'زیپ‌های پلاستیکی نازک شماره ۵ که بعد از مدتی دندانه خالی می‌کنند و در می‌روند',
    },
    {
      feature: 'تحمل وزن بار سنگین',
      workshop: 'تسمه‌دوزی پیوسته تا زیر کفی؛ تحمل بار مطمئن تا ۵۰ کیلوگرم ابزارآلات و دستگاه',
      market: 'اتصال سطحی دسته‌ها به لبه؛ در رفتن دسته با بارهای بالای ۱۰ کیلوگرم',
    },
    {
      feature: 'سفارشی‌سازی ابعاد',
      workshop: 'امکان تولید در ابعاد اختصاصی دقیق به سانتی‌متر برای هر نوع دستگاه، دریل و باربند',
      market: 'فقط سایزهای محدود و آماده وارداتی، اکثراً بدون فضای کافی برای کابل و ملحقات',
    },
    {
      feature: 'قیمت و اصالت خرید',
      workshop: 'خرید مستقیم از دست اول کارگاه تولیدی بدون واسطه دلال با قیمت منصفانه و ضمانت دوخت',
      market: 'واسطه‌های متعدد، قیمت‌های کاذب و عدم پاسخگویی در صورت بروز پارگی و خرابی زیپ',
    },
  ];

  return (
    <section id="comparison" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>راهنمای خرید هوشمندانه ابزارکار</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            چرا برزنت نقش جهان؟ مقایسه با کیف‌های متفرقه بازار
          </h2>
          <p className="text-sm text-stone-400 mt-2 leading-relaxed">
            یک کیف ابزار بی‌کیفیت می‌تواند با باز شدن ناگهانی زیپ یا بریدن دسته در حین حمل، خسارت میلیونی به دستگاه جوش یا سنگ فرز شما بزند.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="bg-stone-950/70 rounded-2xl border border-stone-800 overflow-hidden shadow-2xl">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 bg-stone-800/80 text-xs sm:text-sm font-bold border-b border-stone-700 py-4 px-4 sm:px-6">
            <div className="col-span-4 text-stone-300">شاخص فنی و کیفیت</div>
            <div className="col-span-4 text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>تولیدی نقش جهان (Tool Kit)</span>
            </div>
            <div className="col-span-4 text-stone-400 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
              <span>کیف‌های بی‌کیفیت بازاری</span>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-stone-800/60 text-xs sm:text-sm">
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 py-4 px-4 sm:px-6 items-center hover:bg-stone-900/40 transition-colors"
              >
                <div className="col-span-4 font-bold text-stone-200 pl-2">
                  {item.feature}
                </div>

                <div className="col-span-4 text-stone-200 pl-3 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.workshop}</span>
                </div>

                <div className="col-span-4 text-stone-400 pl-2 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400/80 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.market}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Trust Quote */}
        <div className="mt-8 text-center text-xs text-stone-400">
          «سرمایه‌گذاری روی یک کیف مقاوم، ضامن سلامت دستگاه‌های گران‌قیمت کارگاهی شماست.»
        </div>

      </div>
    </section>
  );
};
