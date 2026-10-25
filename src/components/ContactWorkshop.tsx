/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageCircle, Truck, Clock, MapPin, Send, HelpCircle, Check, ChevronDown } from 'lucide-react';
import { WORKSHOP_NAME, WORKSHOP_PHONE } from '../data/products';
import { toPersianDigits } from '../utils/bagCalculator';
import { SocialHub } from './SocialHub';
import { SalesConsultantCard } from './SalesConsultantCard';

export const ContactWorkshop: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const faqs = [
    {
      q: 'آیا امکان سفارش در ابعاد غیرمعمول و اختصاصی وجود دارد؟',
      a: 'بله، تخصص اصلی تولیدی نقش جهان دوخت سفارشی است. شما می‌توانید طول، عرض و ارتفاع دقیق دستگاه یا فضای مورد نظرتان را به سانتی‌متر اعلام کنید تا الگو و برش اختصاصی برای شما انجام شود.',
    },
    {
      q: 'نحوه ارسال به شهرستان‌ها چگونه است؟',
      a: 'سفارشات تک و عمده از طریق تیپاکس، پست پیشتاز، چاپار و باربری‌های معتبر به تمام شهرها و روستاهای سراسر کشور با بسته‌بندی ایمن ارسال می‌گردد.',
    },
    {
      q: 'آیا برای سفارش عمده فروشگاهی یا شرکتی تخفیف دارید؟',
      a: 'بله، برای فروشگاه‌های ابزارآلات، شرکت‌های پیمانکاری، شرکت‌های صنعتی و پروژه‌های عمرانی شرایط قیمت عمده و امکان چاپ نام برند یا شرکت روی کیف‌ها فراهم است.',
    },
    {
      q: 'تفاوت برزنت ۳ لا و ۶ لا چیست؟',
      a: 'برزنت ۳ لا ضخامت استاندارد، وزن سبک‌تر و انعطاف بالا دارد و برای وسایل مسافرتی، جاپتویی و ابزارهای سبک عالی است. برزنت ۶ لا دارای بافت متراکم سنگین و لایه‌دوزی دوبل است و برای دستگاه‌های سنگین مثل اینورتر جوش، سنگ فرز و باربند طراحی شده است.',
    },
  ];

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone.trim()) return;

    const message = `درخواست تماس از سایت:\nنام: ${contactName || 'کاربر سایت'}\nشماره: ${contactPhone}\nپیام: ${contactMessage || 'درخواست استعلام و مشاوره'}`;
    const url = `https://wa.me/989398083851?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-16 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bulk Order Banner */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950 text-white rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-amber-400 text-xs font-bold bg-amber-500/20 px-3 py-1 rounded-md">
                همکاری با فروشگاه‌ها و پروژه‌ها
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                تولید تیراژ و سازمانی با قیمت دست‌اول کارگاه
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed max-w-2xl">
                آمادگی کامل جهت عقد قرارداد با ابزارفروشی‌ها، شرکت‌های صنعتی، پتروشیمی، خودرویی و ارگان‌ها با امکان گلدوزی یا چاپ اختصاصی نام و لوگوی شرکت شما روی کیف‌های برزنتی.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-stone-200">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>تخفیف پله‌ای در سفارش تیراژ</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>امکان نمونه‌گیری اولیه قبل از تولید انبوه</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>تحویل دقیق و به‌موقع</span>
                </span>
              </div>
            </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={`tel:${WORKSHOP_PHONE}`}
                  className="py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-center text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>تماس با مشاور فروش: {toPersianDigits(WORKSHOP_PHONE)}</span>
                </a>

                <a
                  href={`https://wa.me/989398083851?text=${encodeURIComponent('سلام جناب آقای نظری، جهت استعلام قیمت عمده و سفارش تیراژ پیام می‌دهم.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>گفتگو و استعلام واتساپ</span>
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated Sales Consultant Profile Card (Mr. Nazari) */}
          <div className="mb-16">
            <SalesConsultantCard />
          </div>

          {/* Social Media & Messengers Official Hub */}
          <div className="mb-16">
            <SocialHub />
          </div>

        {/* 2 Columns: FAQ & Quick Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-6">
              <div className="text-xs font-bold text-amber-700 mb-1">پرسش‌های متداول خریداران</div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                پاسخ به سوالات متداول در مورد جنس و سفارش
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 text-right font-bold text-sm text-stone-900 flex items-center justify-between gap-3 hover:bg-stone-100 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-500 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-3">
                <Truck className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-stone-900">ارسال سریع سراسری</div>
                  <div className="text-stone-500 mt-0.5">تیپاکس، باربری و پست</div>
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-stone-900">پاسخگویی سریع</div>
                  <div className="text-stone-500 mt-0.5">همه‌روزه از ۸ صبح تا ۲۱</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form Column */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 mb-1">
              ثبت درخواست مشاوره و تماس
            </h3>
            <p className="text-xs text-stone-600 mb-5">
              شماره و درخواست خود را بگذارید؛ در اسرع وقت جهت ارائه مشاوره و محاسبه قیمت با شما تماس می‌گیریم.
            </p>

            {formSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="font-bold text-sm">درخواست شما ارسال شد!</div>
                <div className="text-xs text-emerald-700">
                  جهت پیگیری سریع‌تر می‌توانید مستقیماً با شماره زیر تماس بگیرید:
                </div>
                <a
                  href={`tel:${WORKSHOP_PHONE}`}
                  className="block font-bold text-base text-emerald-900 font-mono mt-2"
                >
                  {toPersianDigits(WORKSHOP_PHONE)}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    نام و نام خانوادگی:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: مهندس کاظمی"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    شماره موبایل:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xxxxxxxxx"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    شرح درخواست یا نوع دستگاه:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="نوع کیف مورد نیاز، ابعاد یا تعداد مورد نظر را بنویسید..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>ارسال پیام به مدیر تولید</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-stone-200 text-center">
              <span className="text-xs text-stone-500">یا ارتباط تلفنی مستقیم هم‌اکنون:</span>
              <a
                href={`tel:${WORKSHOP_PHONE}`}
                className="block text-base font-black text-stone-900 font-mono mt-1 hover:text-amber-700 transition-colors"
              >
                {toPersianDigits(WORKSHOP_PHONE)}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
