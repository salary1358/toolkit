/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Send, Phone, CheckCircle2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { formatToman, toPersianDigits, validateIranianMobile } from '../utils/bagCalculator';
import { WORKSHOP_PHONE } from '../data/products';

interface CustomerInquiryCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CustomerInquiryCartModal: React.FC<CustomerInquiryCartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.priceToman * item.quantity,
    0
  );

  const handleGenerateWhatsAppLink = () => {
    let text = `سلام و احترام،\nپیش‌فاکتور استعلام و خرید از تولیدی نقش جهان (Tool Kit):\n\n`;
    if (customerName) text += `👤 خریدار: ${customerName}\n`;
    if (customerPhone) text += `📞 شماره تماس: ${customerPhone}\n`;
    if (city) text += `📍 شهر / آدرس: ${city} ${address ? `- ${address}` : ''}\n\n`;

    text += `📦 اقلام درخواستی جهت استعلام قیمت و خرید:\n`;
    cartItems.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.title}\n`;
      text += `   - تعداد: ${item.quantity} عدد\n`;
      text += `   - مشخصات: ${item.product.ply} | ${item.product.dimensions}\n`;
      text += `   - وضعیت: استعلام قیمت کارگاهی\n`;
    });

    text += `\nلطفاً قیمت نهایی، زمان تحویل و هماهنگی ارسال را بفرمایید.`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/989398083851?text=${encoded}`;
  };

  const handleGenerateSmsLink = () => {
    let text = `استعلام سفارش تولیدی نقش جهان (Tool Kit):\n`;
    cartItems.forEach((item) => {
      text += `${item.product.title} (${item.quantity} عدد)\n`;
    });
    text += `تلفن: ${customerPhone || 'مشتری'}\nجهت استعلام قیمت تماس بگیرید.`;
    return `sms:${WORKSHOP_PHONE}?body=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-hidden flex flex-col border border-stone-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base text-white">
              پیش‌فاکتور و استعلام اقلام انتخابی
            </h3>
            <span className="text-xs text-amber-400 font-mono">
              ({toPersianDigits(cartItems.length)} قلم)
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-stone-800">
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-stone-700">لیست استعلام شما خالی است</h4>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                از کاتالوگ محصولات یا بخش محاسبه‌گر ابعاد سفارشی، کیف‌های مورد نظر خود را اضافه کنید.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2.5 bg-amber-500 text-stone-950 font-bold text-xs rounded-xl hover:bg-amber-400"
              >
                مشاهده کاتالوگ محصولات
              </button>
            </div>
          ) : (
            <>
              {/* Itemized List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 font-bold">
                  <span>محصولات درخواستی</span>
                  <button
                    onClick={onClearCart}
                    className="text-stone-400 hover:text-rose-600 transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>خالی کردن لیست</span>
                  </button>
                </div>

                <div className="divide-y divide-stone-100 border border-stone-200 rounded-xl overflow-hidden bg-stone-50">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="p-3.5 flex items-center gap-3 bg-white">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-lg object-contain bg-stone-100 border border-stone-200 shrink-0 p-1"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-stone-900 truncate">
                          {item.product.title}
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5 truncate">
                          {item.product.ply} · {item.product.dimensions}
                        </div>
                        <a
                          href={`tel:${WORKSHOP_PHONE}`}
                          className="text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors mt-1 inline-flex items-center gap-1"
                          title="تماس جهت قیمت"
                        >
                          <Phone className="w-3 h-3 text-amber-600" />
                          <span>برای قیمت تماس بگیرید</span>
                        </a>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-lg border border-stone-200 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-white hover:bg-stone-200 flex items-center justify-center text-stone-700"
                          aria-label="کاهش تعداد"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold font-mono">
                          {toPersianDigits(item.quantity)}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-white hover:bg-stone-200 flex items-center justify-center text-stone-700"
                          aria-label="افزایش تعداد"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-400 hover:text-rose-600 p-1 rounded transition-colors shrink-0"
                        title="حذف"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Calculation Strip */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-amber-900 font-bold">وضعیت پیش‌فاکتور اقلام انتخابی:</div>
                  <div className="text-[11px] text-amber-700">تولید مستقیم کارگاهی با تخفیف سفارش عمده و تیراژ</div>
                </div>
                <a
                  href={`tel:${WORKSHOP_PHONE}`}
                  className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
                  title="تماس مستقیم برای قیمت نهایی"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>برای قیمت تماس بگیرید ({toPersianDigits(WORKSHOP_PHONE)})</span>
                </a>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-stone-800">
                  اطلاعات جهت ثبت فاکتور و ارسال:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-stone-600 mb-1">نام و نام خانوادگی:</label>
                    <input
                      type="text"
                      placeholder="مثال: محمد امینی"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-stone-600 mb-1">شماره تماس (الزامی):</label>
                    <input
                      type="tel"
                      placeholder="مثال: 0912xxxxxxx"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-stone-600 mb-1">شهر مقصد:</label>
                    <input
                      type="text"
                      placeholder="اصفهان، تهران، مشهد..."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-stone-600 mb-1">آدرس کارگاه یا منزل (اختیاری):</label>
                    <input
                      type="text"
                      placeholder="خیابان، پلاک یا مشخصات تحویل..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={handleGenerateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 active:scale-95 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ارسال پیش‌فاکتور به واتساپ کارگاه (09398083851)</span>
                </a>

                {/* Iranian & Global Messengers Strip */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-3">
                  <div className="text-xs font-bold text-stone-700 mb-2">
                    ارسال به سایر پیام‌رسان‌ها با شماره {toPersianDigits(WORKSHOP_PHONE)}:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <a
                      href="https://eitaa.com/09398083851"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-2.5 bg-white hover:bg-orange-50 border border-stone-200 hover:border-orange-400 rounded-lg text-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF6C00]" />
                      <span>ایتا (Eitaa)</span>
                    </a>

                    <a
                      href="https://rubika.ir/09398083851"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-2.5 bg-white hover:bg-purple-50 border border-stone-200 hover:border-purple-400 rounded-lg text-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                      <span>روبیکا (Rubika)</span>
                    </a>

                    <a
                      href="https://t.me/+989398083851"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-2.5 bg-white hover:bg-sky-50 border border-stone-200 hover:border-sky-400 rounded-lg text-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#24A1DE]" />
                      <span>تلگرام (Telegram)</span>
                    </a>

                    <a
                      href="https://ble.ir/09398083851"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-2.5 bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-400 rounded-lg text-stone-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00A859]" />
                      <span>بله (Bale)</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={handleGenerateSmsLink()}
                    className="py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 text-center border border-stone-200"
                  >
                    <Send className="w-3.5 h-3.5 text-stone-600" />
                    <span>ارسال پیامک (SMS)</span>
                  </a>

                  <a
                    href={`tel:${WORKSHOP_PHONE}`}
                    className="py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-400 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>تماس تلفنی مستقیم</span>
                  </a>
                </div>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
