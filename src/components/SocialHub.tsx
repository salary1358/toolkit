/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';
import { SOCIAL_LINKS, WORKSHOP_PHONE } from '../data/products';
import {
  InstagramIcon,
  TelegramIcon,
  EitaaIcon,
  RubikaIcon,
  BaleIcon,
  WhatsAppIcon,
} from './SocialIcons';
import { toPersianDigits } from '../utils/bagCalculator';

interface SocialHubProps {
  compact?: boolean;
}

export const SocialHub: React.FC<SocialHubProps> = ({ compact = false }) => {
  const [copied, setCopied] = useState(false);

  const renderIcon = (id: string, size = 28) => {
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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(WORKSHOP_PHONE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-stone-800 transition-all hover:scale-110 active:scale-95"
            title={`ورود به ${item.name}`}
          >
            {renderIcon(item.id, 22)}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>ارتباط و سفارش در تمامی پیام‌رسان‌ها</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              کانال‌ها و راه‌های ارتباطی با شماره {toPersianDigits(WORKSHOP_PHONE)}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              با کلیک روی هر پیام‌رسان، مستقیماً وارد پیج یا گفتگوی اختصاصی تولیدی نقش جهان شوید:
            </p>
          </div>

          {/* Quick copy phone button */}
          <button
            onClick={handleCopyPhone}
            className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl border border-stone-700 transition-all flex items-center gap-2 self-start sm:self-auto shrink-0 active:scale-95"
            title="کپی کردن شماره تماس"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">شماره کپی شد!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-400" />
                <span>کپی شماره: <span className="font-mono text-amber-400">{toPersianDigits(WORKSHOP_PHONE)}</span></span>
              </>
            )}
          </button>
        </div>

        {/* 6 Grid Cards for Messengers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-stone-950/80 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/50 rounded-xl transition-all duration-300 flex flex-col items-center text-center gap-2.5 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                {renderIcon(item.id, 36)}
              </div>

              <div className="w-full">
                <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.name}
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5 truncate font-mono">
                  {item.handle}
                </div>
              </div>

              <div className="text-[10px] font-semibold text-amber-400/90 bg-stone-900 px-2 py-0.5 rounded-full border border-stone-800 flex items-center gap-1">
                <span>ورود به پیج</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="text-center text-xs text-stone-400 pt-2">
          همه‌روزه از ۸ صبح تا ۲۱ پاسخگوی سوالات، استعلام قیمت تیراژ و ابعاد سفارشی شما در پیام‌رسان‌های ایرانی و خارجی هستیم.
        </div>

      </div>
    </div>
  );
};
