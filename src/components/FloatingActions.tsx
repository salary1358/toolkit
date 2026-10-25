/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, ShoppingBag, MessageSquare, X, ChevronUp } from 'lucide-react';
import { WORKSHOP_PHONE, SOCIAL_LINKS } from '../data/products';
import { toPersianDigits } from '../utils/bagCalculator';
import {
  InstagramIcon,
  TelegramIcon,
  EitaaIcon,
  RubikaIcon,
  BaleIcon,
  WhatsAppIcon,
} from './SocialIcons';

interface FloatingActionsProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCalculator: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  cartCount,
  onOpenCart,
}) => {
  const [showMessengerDrawer, setShowMessengerDrawer] = useState(false);

  const renderIcon = (id: string, size = 20) => {
    switch (id) {
      case 'instagram':
        return <InstagramIcon size={size} />;
      case 'telegram':
        return <TelegramIcon size={size} />;
      case 'eitaa':
        return <EitaaIcon size={size} />;
      case 'rubika':
        return <RubikaIcon size={size} />;
      case 'bale':
        return <BaleIcon size={size} />;
      case 'whatsapp':
        return <WhatsAppIcon size={size} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile Sticky Bottom Cap (Under 15% viewport height, max 56px) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${WORKSHOP_PHONE}`}
          className="flex-1 py-2 px-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span className="whitespace-nowrap">تماس تلفنی</span>
        </a>

        {/* Messengers Drawer Trigger button */}
        <button
          onClick={() => setShowMessengerDrawer(!showMessengerDrawer)}
          className="flex-1 py-2 px-2 bg-stone-800 hover:bg-stone-700 active:scale-95 text-amber-400 font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all border border-stone-700"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0 text-amber-400" />
          <span className="whitespace-nowrap">شبکه‌های اجتماعی</span>
        </button>

        <button
          onClick={onOpenCart}
          className="relative py-2 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1 shrink-0 border border-stone-700"
          aria-label="پیش‌فاکتور"
        >
          <ShoppingBag className="w-4 h-4 text-amber-400" />
          <span className="text-[11px] font-bold">فاکتور</span>
          {cartCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-amber-500 text-stone-950 font-mono text-[10px] font-bold flex items-center justify-center">
              {toPersianDigits(cartCount)}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Messenger Slide-up Drawer */}
      {showMessengerDrawer && (
        <div className="lg:hidden fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-end">
          <div className="w-full bg-stone-900 border-t border-stone-800 rounded-t-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <span>پیام‌رسان مورد نظرتان را انتخاب کنید</span>
              </div>
              <button
                onClick={() => setShowMessengerDrawer(false)}
                className="w-7 h-7 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowMessengerDrawer(false)}
                  className="p-3 bg-stone-950 hover:bg-stone-800 border border-stone-800 rounded-xl flex flex-col items-center gap-2 text-center active:scale-95 transition-all"
                >
                  {renderIcon(item.id, 28)}
                  <span className="text-[11px] font-bold text-stone-200">{item.nameEn}</span>
                </a>
              ))}
            </div>

            <div className="text-[11px] text-stone-400 text-center pt-1">
              پاسخگویی سریع با شماره ۰۹۳۹۸۰۸۳۸۵۱
            </div>
          </div>
        </div>
      )}

      {/* Desktop Floating Speed Dial in Bottom-Left corner (RTL) */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-40 flex-col items-center gap-2.5">
        
        {/* Expanded Messenger icons on desktop */}
        {showMessengerDrawer && (
          <div className="flex flex-col gap-2 bg-stone-900/90 backdrop-blur-md p-2 rounded-2xl border border-stone-800 shadow-2xl animate-fadeIn">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 flex items-center gap-2.5 transition-all hover:scale-105 group"
                title={`ورود به ${item.name}`}
              >
                {renderIcon(item.id, 24)}
                <span className="text-xs font-bold text-stone-200 group-hover:text-amber-400 pl-2">
                  {item.nameEn}
                </span>
              </a>
            ))}
          </div>
        )}

        {/* Speed Dial Main Toggle */}
        <button
          onClick={() => setShowMessengerDrawer(!showMessengerDrawer)}
          className={`w-13 h-13 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-stone-700 ${
            showMessengerDrawer ? 'bg-stone-800 text-amber-400' : 'bg-amber-500 text-stone-950'
          }`}
          title="مشاهده شبکه‌های اجتماعی و پیام‌رسان‌ها"
        >
          {showMessengerDrawer ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>

        {/* Direct Call Button */}
        <a
          href={`tel:${WORKSHOP_PHONE}`}
          className="w-13 h-13 rounded-full bg-stone-900 border border-stone-700 text-amber-400 shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          title="تماس مستقیم با مدیر تولید (09398083851)"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};
