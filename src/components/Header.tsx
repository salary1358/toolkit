/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { WORKSHOP_NAME, WORKSHOP_PHONE } from '../data/products';
import { toPersianDigits } from '../utils/bagCalculator';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-amber-600 text-stone-950 text-[11px] sm:text-xs font-semibold py-1 px-3 text-center truncate">
        <span className="hidden md:inline">تولید تخصصی انواع کیف‌های برزنتی ابزار، دستگاه جوش و کاور با نخ ۲۳ لا پنبه‌ای | </span>
        <span>مشاوره و سفارش مستقیم کارگاه: </span>
        <a href={`tel:${WORKSHOP_PHONE}`} className="underline font-bold font-mono">
          {toPersianDigits(WORKSHOP_PHONE)}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-16 sm:h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-sm sm:text-lg font-black tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-mono text-xs sm:text-sm shrink-0">
              TJ
            </span>
            <span className="truncate max-w-[150px] sm:max-w-[260px] md:max-w-none">
              تولیدی نقش جهان (Tool Kit)
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-stone-300">
            <a
              href="#products"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              کاتالوگ محصولات
            </a>
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                onOpenCalculator();
                document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 text-amber-300"
            >
              <span>محاسبه‌گر ابعاد</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1 py-0.5 rounded font-mono">سفارشی</span>
            </a>
            <a
              href="#craftsmanship"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              برزنت و نخ ۲۳ لا
            </a>
            <a
              href="#comparison"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              مقایسه کیفیت
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              سفارش و تماس
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`tel:${WORKSHOP_PHONE}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-300 hover:text-white border border-stone-700 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
              title="تماس مستقیم با مدیر تولید"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{toPersianDigits(WORKSHOP_PHONE)}</span>
            </a>

            <button
              onClick={onOpenCart}
              className="relative px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-500 rounded-lg hover:bg-amber-400 active:scale-95 transition-all shadow-sm flex items-center gap-1 whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-4 h-4 text-stone-950" />
              <span className="hidden xs:inline">پیش‌فاکتور</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-stone-950 text-amber-400 text-[10px] sm:text-xs font-bold font-mono">
                  {toPersianDigits(cartCount)}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-stone-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="باز کردن منوی موبایل"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-800 flex flex-col gap-3 text-sm font-medium">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              کاتالوگ و تصاویر محصولات
            </a>
            <a
              href="#calculator"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
                document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-2 text-amber-400 hover:bg-stone-800 rounded-md flex items-center justify-between"
            >
              <span>محاسبه‌گر و سفارش ابعاد سفارشی</span>
              <span className="text-xs bg-amber-500/20 px-2 py-0.5 rounded">طول، عرض، ارتفاع</span>
            </a>
            <a
              href="#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              برزنت ۳لا و ۶لا و نخ ۲۳ لا
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              مقایسه با کیف‌های بازاری
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-stone-200 hover:bg-stone-800 rounded-md"
            >
              سفارش تیراژ و اطلاعات کارگاه
            </a>
            <div className="pt-2 border-t border-stone-800 space-y-2">
              <div className="text-[11px] text-stone-400 px-1">
                شبکه‌های اجتماعی با شماره {toPersianDigits(WORKSHOP_PHONE)}:
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[11px] font-bold">
                <a
                  href="https://eitaa.com/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-center text-orange-400 flex items-center justify-center gap-1"
                >
                  <span className="w-2 h-2 rounded-full bg-[#EF6C00]" />
                  <span>ایتا</span>
                </a>
                <a
                  href="https://rubika.ir/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-center text-purple-400 flex items-center justify-center gap-1"
                >
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                  <span>روبیکا</span>
                </a>
                <a
                  href="https://t.me/+989398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-center text-sky-400 flex items-center justify-center gap-1"
                >
                  <span className="w-2 h-2 rounded-full bg-[#24A1DE]" />
                  <span>تلگرام</span>
                </a>
                <a
                  href="https://ble.ir/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-center text-emerald-400 flex items-center justify-center gap-1"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00A859]" />
                  <span>بله</span>
                </a>
                <a
                  href="https://instagram.com/09398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-center text-pink-400 flex items-center justify-center gap-1"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E1306C]" />
                  <span>اینستاگرام</span>
                </a>
                <a
                  href="https://wa.me/989398083851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-stone-700 rounded-lg text-center text-emerald-400 flex items-center justify-center gap-1"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>واتساپ</span>
                </a>
              </div>

              <a
                href={`tel:${WORKSHOP_PHONE}`}
                className="flex items-center justify-center gap-2 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-center font-bold text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>تماس مستقیم: {toPersianDigits(WORKSHOP_PHONE)}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
