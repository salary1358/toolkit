/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WORKSHOP_PHONE } from '../data/products';
import { toPersianDigits } from '../utils/bagCalculator';

interface SalesConsultantCardProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export const SalesConsultantCard: React.FC<SalesConsultantCardProps> = ({
  className = '',
  variant = 'full',
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden ${className}`}
    >
      <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* Consultant Photo with White Background Pedestal */}
        <div className="relative shrink-0">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-white border-2 border-stone-100 shadow-md p-1 flex items-center justify-center">
            <img
              src="/assets/aistudio/500_08da55d5.jpg"
              alt="کارشناس و مشاور فروش آقای نظری"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top rounded-xl filter contrast-[1.03] brightness-[1.02]"
            />
          </div>
          {/* Verified Official Consultant Badge */}
          <div className="absolute -bottom-2 -left-2 bg-emerald-600 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg shadow flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-white" />
            <span>مشاور رسمی کارگاه</span>
          </div>
        </div>

        {/* Consultant Information & Direct Dialing */}
        <div className="flex-1 text-center md:text-right space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
            <span>پاسخگویی مستقیم و ثبت سفارشات کارگاهی</span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900">
              کارشناس و مشاور فروش: آقای نظری
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
              جهت استعلام قیمت روز محصولات، سفارش در ابعاد اختصاصی دستگاه، مشاوره انتخاب ضخامت برزنت (۳ لا و ۶ لا) و خرید عمده و تیراژ با من در ارتباط باشید.
            </p>
          </div>

          {/* Direct Dialing Link (Triggers phone call on mobile) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <a
              href={`tel:${WORKSHOP_PHONE}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-black text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
              title="برقراری تماس مستقیم تلفنی"
            >
              <Phone className="w-4 h-4 text-stone-950 animate-bounce" />
              <span>تماس مستقیم: {toPersianDigits(WORKSHOP_PHONE)}</span>
            </a>

            <a
              href={`https://wa.me/989398083851?text=${encodeURIComponent('سلام جناب آقای نظری، جهت مشاوره و استعلام قیمت پیام می‌دهم.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 bg-emerald-700 hover:bg-emerald-600 active:scale-95 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              title="ارتباط مستقیم در واتساپ"
            >
              <MessageCircle className="w-4 h-4" />
              <span>پیام در واتساپ</span>
            </a>
          </div>

          {/* Quick Messengers Bar */}
          <div className="pt-3 border-t border-stone-100 flex items-center justify-center md:justify-start gap-2 flex-wrap text-xs">
            <span className="text-stone-500 text-[11px]">ارتباط مستقیم در پیام‌رسان‌ها:</span>
            <a
              href="https://eitaa.com/09398083851"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-stone-50 hover:bg-orange-50 border border-stone-200 rounded text-stone-700 hover:text-orange-700 font-semibold text-[11px] transition-colors flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF6C00]" />
              <span>ایتا</span>
            </a>
            <a
              href="https://rubika.ir/09398083851"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-stone-50 hover:bg-purple-50 border border-stone-200 rounded text-stone-700 hover:text-purple-700 font-semibold text-[11px] transition-colors flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span>روبیکا</span>
            </a>
            <a
              href="https://t.me/+989398083851"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-stone-50 hover:bg-sky-50 border border-stone-200 rounded text-stone-700 hover:text-sky-700 font-semibold text-[11px] transition-colors flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#24A1DE]" />
              <span>تلگرام</span>
            </a>
            <a
              href="https://ble.ir/09398083851"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-stone-50 hover:bg-emerald-50 border border-stone-200 rounded text-stone-700 hover:text-emerald-700 font-semibold text-[11px] transition-colors flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
              <span>بله</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
