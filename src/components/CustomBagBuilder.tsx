/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Ruler, Sparkles, Send, CheckCircle2, MessageCircle, Phone, Info } from 'lucide-react';
import {
  CustomBagSpecs,
  calculateCustomBag,
  formatToman,
  toPersianDigits,
  generateOrderWhatsAppUrl,
  generateSmsUrl,
} from '../utils/bagCalculator';
import { WORKSHOP_PHONE } from '../data/products';

interface CustomBagBuilderProps {
  onAddCustomToCart: (specs: CustomBagSpecs, calculatedPrice: number) => void;
}

export const CustomBagBuilder: React.FC<CustomBagBuilderProps> = ({ onAddCustomToCart }) => {
  const [specs, setSpecs] = useState<CustomBagSpecs>({
    lengthCm: 42,
    widthCm: 22,
    heightCm: 28,
    canvasPly: 6,
    hasShoulderStrap: true,
    hasFrontPocket: true,
    zipperGrade: 'no10_double',
    bagType: 'welding_machine',
  });

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [addedToast, setAddedToast] = useState(false);

  const calcResult = calculateCustomBag(specs);

  const handlePresetSelect = (preset: {
    type: CustomBagSpecs['bagType'];
    l: number;
    w: number;
    h: number;
    ply: 3 | 6;
  }) => {
    setSpecs((prev) => ({
      ...prev,
      bagType: preset.type,
      lengthCm: preset.l,
      widthCm: preset.w,
      heightCm: preset.h,
      canvasPly: preset.ply,
    }));
  };

  const handleAddToCart = () => {
    onAddCustomToCart(specs, calcResult.estimatedPriceToman);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const whatsappUrl = generateOrderWhatsAppUrl({
    phone: WORKSHOP_PHONE,
    customerName,
    specs,
    calcResult,
    notes: customNote,
  });

  const smsText = `سلام، استعلام سفارش کیف برزنتی نقش جهان:\nطول: ${specs.lengthCm}cm، عرض: ${specs.widthCm}cm، ارتفاع: ${specs.heightCm}cm، برزنت: ${specs.canvasPly}لا.\nتخمین: ${calcResult.formattedPrice}\nنام: ${customerName || 'مشتری'}`;
  const smsUrl = generateSmsUrl(smsText);

  return (
    <section id="calculator" className="py-16 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-md mb-2">
            <Ruler className="w-3.5 h-3.5" />
            <span>محاسبه‌گر آنلاین اختصاصی ابعاد دلخواه</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
            کیف برزنتی با ابعاد دقیق دستگاه شما
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            طول، عرض و ارتفاع دستگاه یا فضای مورد نظرتان را وارد کنید؛ حجم، تحمل بار و حدود هزینه محاسبه می‌شود و می‌توانید مستقیماً سفارش دهید.
          </p>
        </div>

        {/* Builder Layout: Split 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Presets */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2.5">
                انتخاب سریع بر اساس کاربرد رایج:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handlePresetSelect({ type: 'welding_machine', l: 42, w: 22, h: 28, ply: 6 })}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-right ${
                    specs.bagType === 'welding_machine'
                      ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  دستگاه جوش اینورتر
                </button>

                <button
                  type="button"
                  onClick={() => handlePresetSelect({ type: 'grinder_drill', l: 46, w: 20, h: 24, ply: 6 })}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-right ${
                    specs.bagType === 'grinder_drill'
                      ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  سنگ فرز و بتن‌کن
                </button>

                <button
                  type="button"
                  onClick={() => handlePresetSelect({ type: 'travel_roof', l: 95, w: 55, h: 38, ply: 6 })}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-right ${
                    specs.bagType === 'travel_roof'
                      ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  کیف باربند مسافرتی
                </button>

                <button
                  type="button"
                  onClick={() => handlePresetSelect({ type: 'quilt_blanket', l: 65, w: 45, h: 42, ply: 3 })}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-right ${
                    specs.bagType === 'quilt_blanket'
                      ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  کیف جاپتویی و لحاف
                </button>

                <button
                  type="button"
                  onClick={() => handlePresetSelect({ type: 'round_cover', l: 60, w: 60, h: 22, ply: 6 })}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-right ${
                    specs.bagType === 'round_cover'
                      ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  کاور چادر مسافرتی / گرد
                </button>

                <button
                  type="button"
                  onClick={() => handlePresetSelect({ type: 'tool_box', l: 38, w: 22, h: 22, ply: 3 })}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-right ${
                    specs.bagType === 'tool_box'
                      ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'
                  }`}
                >
                  کیف ابزار عمومی
                </button>
              </div>
            </div>

            {/* Dimensional Sliders & Inputs */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span>ابعاد خارجی کیف (سانتی‌متر):</span>
                <span className="text-xs text-stone-600 font-normal">(پیشنهاد: ۲ تا ۳ سانتی‌متر فضای آزاد برای ابزار در نظر بگیرید)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Length */}
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-stone-700">طول (L):</span>
                    <span className="text-sm font-bold text-amber-700 font-mono">
                      {toPersianDigits(specs.lengthCm)} cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="140"
                    step="1"
                    value={specs.lengthCm}
                    onChange={(e) => setSpecs({ ...specs, lengthCm: Number(e.target.value) })}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 mt-1">
                    <span>۱۵cm</span>
                    <span>۱۴۰cm</span>
                  </div>
                </div>

                {/* Width */}
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-stone-700">عرض (W):</span>
                    <span className="text-sm font-bold text-amber-700 font-mono">
                      {toPersianDigits(specs.widthCm)} cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="1"
                    value={specs.widthCm}
                    onChange={(e) => setSpecs({ ...specs, widthCm: Number(e.target.value) })}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 mt-1">
                    <span>۱۰cm</span>
                    <span>۹۰cm</span>
                  </div>
                </div>

                {/* Height */}
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-stone-700">ارتفاع (H):</span>
                    <span className="text-sm font-bold text-amber-700 font-mono">
                      {toPersianDigits(specs.heightCm)} cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="1"
                    value={specs.heightCm}
                    onChange={(e) => setSpecs({ ...specs, heightCm: Number(e.target.value) })}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 mt-1">
                    <span>۱۰cm</span>
                    <span>۹۰cm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Canvas Ply selection */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-stone-700 mb-2">
                نوع و ضخامت پارچه برزنتی:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpecs({ ...specs, canvasPly: 3 })}
                  className={`p-3 rounded-xl border text-right transition-all ${
                    specs.canvasPly === 3
                      ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20'
                      : 'bg-white border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="font-bold text-sm text-stone-900">برزنت ۳ لا مقاوم</div>
                  <div className="text-xs text-stone-600 mt-1">
                    سبک‌تر، منعطف، مناسب ابزارآلات خانگی، لباس و مسافرتی
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSpecs({ ...specs, canvasPly: 6 })}
                  className={`p-3 rounded-xl border text-right transition-all ${
                    specs.canvasPly === 6
                      ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20'
                      : 'bg-white border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="font-bold text-sm text-stone-900 flex items-center justify-between">
                    <span>برزنت ۶ لا سنگین صنعتی</span>
                    <span className="text-[10px] bg-amber-500 text-stone-950 font-bold px-1.5 py-0.5 rounded">پیشنهادی</span>
                  </div>
                  <div className="text-xs text-stone-600 mt-1">
                    فوق‌العاده ضخیم، ضد سایش کامل، ویژه دستگاه جوش و فرز سنگین
                  </div>
                </button>
              </div>
            </div>

            {/* Accessories checkboxes */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-stone-700 mb-2">
                امکانات و آپشن‌های درخواستی:
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-2.5 bg-white rounded-lg border border-stone-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specs.hasShoulderStrap}
                    onChange={(e) => setSpecs({ ...specs, hasShoulderStrap: e.target.checked })}
                    className="w-4 h-4 text-amber-600 accent-amber-500 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900">بند دوشی ارگونومیک تقویتی</span>
                    <span className="text-stone-600 mr-1.5">(جابجایی آسان روی شانه با سگک فلزی نشکن)</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-2.5 bg-white rounded-lg border border-stone-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specs.hasFrontPocket}
                    onChange={(e) => setSpecs({ ...specs, hasFrontPocket: e.target.checked })}
                    className="w-4 h-4 text-amber-600 accent-amber-500 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900">جیب بیرونی زیپ‌دار یا دکمه‌دار</span>
                    <span className="text-stone-600 mr-1.5">(دسترسی سریع به کابل، متر، مته و لوازم کوچک)</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-2.5 bg-white rounded-lg border border-stone-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specs.zipperGrade === 'no10_double'}
                    onChange={(e) =>
                      setSpecs({
                        ...specs,
                        zipperGrade: e.target.checked ? 'no10_double' : 'no10_heavy',
                      })
                    }
                    className="w-4 h-4 text-amber-600 accent-amber-500 rounded"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900">دو عدد سرزیپ روان شماره ۱۰ (بازشوی دوطرفه)</span>
                    <span className="text-stone-600 mr-1.5">(باز و بسته شدن بسیار آسان و قرار دادن قفل کوچک)</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Optional Customer Inputs */}
            <div className="pt-2 border-t border-stone-200 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">نام یا نام کارگاه:</label>
                  <input
                    type="text"
                    placeholder="مثال: مهندس حسینی / کارگاه تراشکاری"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">شماره تماس (جهت هماهنگی):</label>
                  <input
                    type="tel"
                    placeholder="مثال: 0913xxxxxxx"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">توضیحات تکمیلی (اختیاری):</label>
                <input
                  type="text"
                  placeholder="مثال: برای اینورتر ۲۰۰ آمپر ایران ترانس با ۱۰ متر کابل می‌خواهم"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

          </div>

          {/* Results & Live Quote Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Visual Spec Box */}
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-7 border border-stone-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="font-bold text-sm text-stone-200">پیش‌فاکتور زنده کارگاهی</span>
                </div>
                <span className="text-xs text-amber-400 font-mono">نقش جهان</span>
              </div>

              {/* Dimension Graphic Badge */}
              <div className="my-5 p-4 rounded-xl bg-stone-950/70 border border-stone-800 text-center">
                <div className="text-xs text-stone-400 mb-1">ابعاد درخواستی شما:</div>
                <div className="text-lg sm:text-xl font-black text-amber-400 font-mono" dir="ltr">
                  {toPersianDigits(specs.lengthCm)} × {toPersianDigits(specs.widthCm)} × {toPersianDigits(specs.heightCm)} cm
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-stone-300 mt-3 pt-2 border-t border-stone-800/80">
                  <div>
                    حجم داخلی: <strong className="text-white font-mono">{toPersianDigits(calcResult.volumeLiters)}</strong> لیتر
                  </div>
                  <div>·</div>
                  <div>
                    تحمل بار: <strong className="text-white font-mono">تا {toPersianDigits(calcResult.estimatedWeightCapacityKg)}</strong> کیلوگرم
                  </div>
                </div>
              </div>

              {/* Specs Summary List */}
              <div className="space-y-2 text-xs text-stone-300 border-b border-stone-800 pb-4">
                <div className="flex justify-between">
                  <span className="text-stone-400">جنس برزنت:</span>
                  <span className="font-bold text-stone-100">{specs.canvasPly} لا ضد آب و سایش</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">نخ دوخت:</span>
                  <span className="font-bold text-amber-300">۲۳ لا پنبه‌ای صنعتی (دوبل)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">زیپ و سرزیپ:</span>
                  <span className="font-bold text-stone-100">
                    {specs.zipperGrade === 'no10_double' ? 'زیپ ۱۰ با ۲ سرزیپ فلزی روان' : 'زیپ شماره ۱۰ صنعتی'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">بند دوشی:</span>
                  <span className="font-bold text-stone-100">{specs.hasShoulderStrap ? 'دارد (تقویت‌شده)' : 'ندارد'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">جیب بیرونی:</span>
                  <span className="font-bold text-stone-100">{specs.hasFrontPocket ? 'دارد' : 'ندارد'}</span>
                </div>
              </div>

              {/* Price Inquiry Strip (Direct phone call for quote) */}
              <div className="py-4 border-b border-stone-800">
                <div className="text-xs text-stone-400">استعلام فوری قیمت این ابعاد:</div>
                <a
                  href={`tel:${WORKSHOP_PHONE}`}
                  className="mt-2 py-3 px-4 bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-black text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group text-center"
                  title="برقراری تماس مستقیم تلفنی جهت استعلام قیمت این ابعاد"
                >
                  <Phone className="w-4 h-4 text-stone-950 animate-bounce" />
                  <span>برای قیمت تماس بگیرید ({toPersianDigits(WORKSHOP_PHONE)})</span>
                </a>
                <div className="text-[11px] text-stone-400 mt-2 text-center sm:text-right">
                  با کلیک روی دکمه بالا، تماس تلفنی فوری جهت استعلام قیمت و تخفیف تیراژ با کارشناس فروش (آقای نظری) برقرار می‌شود.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-3 bg-stone-800 hover:bg-stone-700 text-amber-400 border border-stone-700 font-bold text-sm rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>افزودن این ابعاد به لیست استعلام و خرید</span>
                </button>

                {addedToast && (
                  <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs text-center rounded-lg animate-fadeIn flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>سفارش با ابعاد دلخواه به پیش‌فاکتور شما افزوده شد!</span>
                  </div>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ارسال مستقیم این ابعاد به واتساپ کارگاه (09398083851)</span>
                </a>

                <a
                  href={smsUrl}
                  className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded-xl transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>ارسال پیامکی ابعاد به کارگاه (SMS)</span>
                </a>
              </div>

              {/* Support note */}
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>تلفن مشاوره مستقیم ابعاد:</span>
                </span>
                <a href={`tel:${WORKSHOP_PHONE}`} className="text-amber-400 font-mono font-bold hover:underline">
                  {toPersianDigits(WORKSHOP_PHONE)}
                </a>
              </div>

            </div>

            {/* Dimension Guide Infobox with user photo */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-white border border-stone-200 shrink-0">
                <img
                  src="/assets/aistudio/photo_21334228053_y_6d42d873.jpg"
                  alt="راهنمای اندازه گیری"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="text-xs text-stone-600 leading-relaxed">
                <div className="font-bold text-stone-900 mb-1">چگونه اندازه بگیریم؟</div>
                دستگاه خود را روی یک سطح صاف قرار دهید و بیشترین برجستگی‌ها (مانند دسته یا کلید دستگاه جوش و فرز) را اندازه بزنید تا کیف کاملاً فیت و ایمن باشد.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
