/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { WORKSHOP_NAME, WORKSHOP_PHONE } from '../data/products';
import { toPersianDigits } from '../utils/bagCalculator';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800 pt-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
          
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-mono text-xs flex items-center justify-center border border-amber-500/40">
                TJ
              </span>
              <span>{WORKSHOP_NAME}</span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-md">
              تولید تخصصی انواع کیف‌های برزنتی ابزارآلات، دستگاه جوش اینورتر، سنگ فرز، دریل و بتن‌کن، کیف‌های مسافرتی، باربند ضد باران، ساک‌های جاپتویی و انواع روکش‌های محافظ با پارچه برزنتی ضخیم ۳ لا و ۶ لا و نخ ۲۳ لا پنبه‌ای صنعتی.
            </p>
            <div className="text-stone-300 font-medium pt-1">
              تلفن سفارش و استعلام مستقیم: <a href={`tel:${WORKSHOP_PHONE}`} className="text-amber-400 font-bold font-mono">{toPersianDigits(WORKSHOP_PHONE)}</a>
            </div>

            {/* Social links row */}
            <div className="pt-2">
              <div className="text-[11px] text-stone-500 mb-2">شبکه‌های اجتماعی و پیام‌رسان‌ها:</div>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="https://eitaa.com/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="ایتا"
                >
                  <span className="w-2 h-2 rounded-full bg-[#EF6C00]" />
                  <span>ایتا</span>
                </a>

                <a
                  href="https://rubika.ir/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="روبیکا"
                >
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                  <span>روبیکا</span>
                </a>

                <a
                  href="https://t.me/+989398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="تلگرام"
                >
                  <span className="w-2 h-2 rounded-full bg-[#24A1DE]" />
                  <span>تلگرام</span>
                </a>

                <a
                  href="https://ble.ir/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="بله"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00A859]" />
                  <span>بله</span>
                </a>

                <a
                  href="https://instagram.com/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="اینستاگرام"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E1306C]" />
                  <span>اینستاگرام</span>
                </a>

                <a
                  href="https://wa.me/989398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded-lg text-xs font-semibold text-stone-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="واتساپ"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>واتساپ</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="text-white font-bold text-sm mb-3">دسترسی سریع</div>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">کاتالوگ محصولات</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">محاسبه‌گر ابعاد سفارشی</a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-amber-400 transition-colors">کیفیت نخ ۲۳ لا و برزنت</a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-amber-400 transition-colors">مقایسه با کیف‌های بازاری</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">سفارش عمده و تیراژ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specifications */}
          <div>
            <div className="text-white font-bold text-sm mb-3">تعهدات کیفی نقش جهان</div>
            <ul className="space-y-2 text-stone-400">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>برزنت اصل ۳ لا و ۶ لا ضد آب</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>نخ ۲۳ لا پنبه‌ای نشکن صنعتی</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>زیپ و سرزیپ فلزی شماره ۱۰ روان</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>تضمین دوخت دوبل و ماندگاری</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-xs">
          <div>
            تمامی حقوق محفوظ است © {toPersianDigits(1403)} {WORKSHOP_NAME}
          </div>
          <div>
            تولید دست‌اول کارگاهی با افتخار در ایران
          </div>
        </div>

      </div>
    </footer>
  );
};
