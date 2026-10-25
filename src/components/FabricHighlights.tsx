/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layers, ShieldCheck, Zap, Ruler, Check } from 'lucide-react';
import { WORKSHOP_ADVANTAGES } from '../data/products';

export const FabricHighlights: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-16 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-700 tracking-wider">
            استاندارد کارگاهی نقش جهان
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
            تمایز فنی و کیفیت ساخت کیف‌های برزنتی نقش جهان
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            ما در تولیدی نقش جهان تفاوت را در جزئیات رقم می‌زنیم. استفاده از متریال صنعتی اصل باعث شده کیف‌های ما سال‌ها در سخت‌ترین محیط‌های کارگاهی، پروژه‌های ساختمانی و سفرهای جاده‌ای همراه مطمئن شما باشند.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 3-la and 6-la canvas */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              برزنت ضخیم ۳ لا و ۶ لا
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              تراکم بافت استثنایی با مقاومت در برابر سایش، آب‌گریز بودن کامل و عدم سوراخ شدن در برابر لبه‌های تیز آهن، سنگ فرز و سرمته‌ها.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>۱۰۰٪ ضد آب و ضد روغن</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>ضد کشش و بدون تغییر فرم</span>
              </li>
            </ul>
          </div>

          {/* Card 2: 23-ply cotton thread */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              دوخت با نخ ۲۳ لا پنبه‌ای
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              نخ‌های معمولی خیاطی به مرور زمان و زیر بار سنگین پاره می‌شوند؛ ما از نخ ۲۳ لا پنبه‌ای صنعتی با دوخت دوبل و ضربدری استفاده می‌کنیم.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>تحمل کشش بار سنگین تا ۵۰ کیلو</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>دوخت تقویتی در محل اتصال دسته‌ها</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Zipper No. 10 */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              زیپ و سرزیپ ۱۰ روان و مقاوم
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              بزرگ‌ترین نقطه ضعف کیف‌های متفرقه زیپ ضعیف است. زیپ دنده‌درشت شماره ۱۰ با سرزیپ‌های فلزی روان هرگز در برابر فشار در نمی‌رود.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>حرکت نرم حتی در صورت وجود گرد و خاک</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>سرزیپ‌های فلزی آبکاری شده دوقلو</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Custom Dimensions */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 mb-4">
              <Ruler className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">
              سفارش در ابعاد اختصاصی
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              کافیست ابعاد دستگاه خود (طول، عرض، ارتفاع) را به سانتی‌متر اعلام کنید تا کیفی با اندازه فیت و بدون لقی برای شما تولید کنیم.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>برای انواع دستگاه جوش، سنگ فرز، بتن‌کن</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>سفارش تکی یا تیراژ بدون محدودیت</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
