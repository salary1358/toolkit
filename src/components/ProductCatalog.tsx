/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Eye, X, Check, MessageCircle, Phone, ArrowLeft, Ruler } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS, WORKSHOP_PHONE } from '../data/products';
import { formatToman, toPersianDigits, generateOrderWhatsAppUrl } from '../utils/bagCalculator';

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
  onOpenCalculator: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onAddToCart, onOpenCalculator }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: 'همه محصولات' },
    { key: 'tools', label: 'کیف ابزار و کارگاهی' },
    { key: 'travel', label: 'مسافرتی و باربند' },
    { key: 'covers', label: 'کاور و روکش سفارشی' },
    { key: 'rolls', label: 'کیف رولی و آچار' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        p.title.includes(searchQuery) ||
        p.description.includes(searchQuery) ||
        p.bestFor.includes(searchQuery) ||
        p.dimensions.includes(searchQuery);
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddWithFeedback = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    onAddToCart(product);
    setToastMessage(`«${product.title}» به لیست استعلام افزوده شد`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="products" className="py-16 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-stone-100 border border-amber-500/50 shadow-2xl px-5 py-3 rounded-xl flex items-center gap-3 text-sm animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold text-amber-700 tracking-wide mb-1">
              کاتالوگ جامع تولیدی نقش جهان
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              مدل‌های برزنتی کارگاهی، مسافرتی و کاور
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              تمامی عکس‌ها از تولیدات واقعی کارگاه گرفته شده و با ابعاد درخواستی شما نیز قابل دوخت است.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="جستجو در نام، کاربرد یا ابزار..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs sm:text-sm pr-9 pl-3 py-2.5 rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-stone-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
              >
                پاک کردن
              </button>
            )}
          </div>
        </div>

        {/* Category Filters (Interactive buttons compliant with Section 1.A) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/80 rounded-xl overflow-x-auto mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-stone-900 text-amber-400 shadow-sm'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <div className="text-stone-400 text-lg mb-2">محصولی با این مشخصات یافت نشد!</div>
            <p className="text-xs text-stone-500 max-w-md mx-auto mb-4">
              می‌توانید مدل مورد نظرتان را در هر اندازه دلخواه با محاسبه‌گر ابعاد سفارشی طراحی و سفارش دهید.
            </p>
            <button
              onClick={onOpenCalculator}
              className="px-4 py-2 bg-amber-500 text-stone-950 font-bold text-xs rounded-lg hover:bg-amber-400"
            >
              طراحی با ابعاد دلخواه
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveModalProduct(product)}
                className="group bg-white rounded-2xl border border-stone-200/80 hover:border-amber-500/50 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Product Image Area with Studio Pedestal & Realistic Depth */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-stone-50 via-stone-100/60 to-stone-200/40 overflow-hidden flex items-center justify-center p-4">
                  {/* Studio ambient spotlight behind product */}
                  <div 
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
                    }}
                  />

                  {/* Enhanced Product Image (slight contrast, vibrant color, and soft contact shadow) */}
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="relative z-10 max-h-full max-w-full object-contain filter contrast-[1.04] saturate-[1.08] brightness-[1.02] drop-shadow-[0_12px_16px_rgba(0,0,0,0.12)] group-hover:scale-105 group-hover:drop-shadow-[0_16px_22px_rgba(0,0,0,0.18)] transition-all duration-500"
                  />

                  {/* Clean unboxed tag */}
                  <div className="absolute top-3 right-3 z-20 bg-stone-900/85 backdrop-blur-sm text-stone-200 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-sm">
                    <span>{product.ply}</span>
                  </div>

                  {product.isPopular && (
                    <div className="absolute top-3 left-3 z-20 bg-amber-500 text-stone-950 font-bold text-[10px] px-2 py-0.5 rounded shadow-sm">
                      پرتقاضا
                    </div>
                  )}

                  {/* Studio Quality Badge watermark */}
                  <div className="absolute bottom-2 right-3 z-20 text-[9px] text-stone-400 font-mono tracking-wider opacity-60">
                    تصویر واقعی کارگاه نقش جهان
                  </div>

                  {/* Quick Action Overlay on desktop */}
                  <div className="absolute inset-0 z-30 bg-stone-950/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <span className="px-4 py-2 bg-white text-stone-950 text-xs font-bold rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-amber-600" />
                      <span>مشاهده مشخصات و زوم</span>
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="text-amber-700 font-semibold">{product.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>زیپ ۱۰ روان</span>
                      <span aria-hidden="true">·</span>
                      <span>نخ ۲۳ لا</span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                      {product.title}
                    </h3>

                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.subtitle}
                    </p>

                    <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-stone-600">
                      <span className="text-stone-500">ابعاد: </span>
                      <span className="font-medium text-stone-800">{product.dimensions}</span>
                    </div>
                  </div>

                  {/* Inquiry & Buy Bar (No numeric price - direct phone dialer) */}
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${WORKSHOP_PHONE}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60"
                      title="برای قیمت تماس بگیرید"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-600 animate-pulse shrink-0" />
                      <span>برای قیمت تماس بگیرید</span>
                    </a>

                    <button
                      type="button"
                      onClick={(e) => handleAddWithFeedback(product, e)}
                      className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 active:scale-95 text-amber-400 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap shrink-0"
                      title="افزودن به لیست استعلام و خرید"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>استعلام و خرید</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Order Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl text-stone-100 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-700">
          <div className="space-y-1.5 text-center md:text-right">
            <div className="text-amber-400 text-xs font-bold flex items-center justify-center md:justify-start gap-1.5">
              <Ruler className="w-3.5 h-3.5" />
              <span>سفارش با ابعاد کاملاً اختصاصی</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              دستگاه یا ابزار شما اندازه استانداردی ندارد؟
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              ما در کارگاه نقش جهان برای هر دستگاه، کپسول یا باربند، الگوی برش و دوخت اختصاصی میلیمتری می‌زنیم.
            </p>
          </div>

          <button
            onClick={onOpenCalculator}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl active:scale-95 transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>محاسبه‌گر آنلاین ابعاد دلخواه</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Area with Studio Stage & Zoom */}
            <div className="relative aspect-[16/10] bg-gradient-to-b from-stone-100 via-stone-50 to-stone-200 border-b border-stone-200 overflow-hidden flex items-center justify-center p-4 group select-none">
              <div 
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                  background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, transparent 75%)',
                }}
              />
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.title}
                referrerPolicy="no-referrer"
                className="relative z-10 max-h-full max-w-full object-contain filter contrast-[1.05] saturate-[1.08] brightness-[1.02] drop-shadow-[0_16px_25px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-125 cursor-zoom-in"
                title="برای بزرگنمایی نشانگر را روی تصویر حرکت دهید"
              />
              <div className="absolute top-4 right-4 z-20 bg-stone-900/90 text-amber-400 text-xs px-3 py-1.5 rounded-lg font-mono font-bold shadow-md">
                تولیدی نقش جهان - Tool Kit
              </div>
              <div className="absolute bottom-3 left-3 z-20 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>عکاسی با نورپردازی استودیویی (بدون تغییر ساختار)</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                  <span className="font-semibold text-amber-700">{activeModalProduct.categoryLabel}</span>
                  <span>·</span>
                  <span>کد محصول: {activeModalProduct.id}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  {activeModalProduct.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {activeModalProduct.description}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-2 text-xs">
                <div className="font-bold text-stone-900 mb-2 border-b border-stone-200 pb-1.5">
                  مشخصات فنی و مواد اولیه کارگاهی:
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">جنس پارچه:</span>
                  <span className="font-semibold text-stone-900">برزنت {activeModalProduct.ply} اصل و ضخیم</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">مشخصات نخ دوخت:</span>
                  <span className="font-semibold text-amber-700">{activeModalProduct.stitching}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">نوع زیپ و سرزیپ:</span>
                  <span className="font-semibold text-stone-900">{activeModalProduct.zipper}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">ابعاد مدل آماده:</span>
                  <span className="font-semibold text-stone-900 font-mono">{activeModalProduct.dimensions}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">بهترین کاربرد:</span>
                  <span className="font-semibold text-stone-900">{activeModalProduct.bestFor}</span>
                </div>
              </div>

              {/* Key Features Bullet Points */}
              <div>
                <div className="text-xs font-bold text-stone-900 mb-2">ویژگی‌های برجسته محصول:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                  {activeModalProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order in Messengers Strip */}
              <div className="bg-stone-100/80 rounded-xl p-3 border border-stone-200">
                <div className="text-xs font-bold text-stone-800 mb-2">
                  استعلام قیمت و سفارش «{activeModalProduct.title}» در پیام‌رسان‌ها:
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  <a
                    href={`https://wa.me/989398083851?text=${encodeURIComponent(`سلام، جهت استعلام قیمت و خرید ${activeModalProduct.title} پیام می‌دهم.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-300 rounded-lg flex flex-col items-center gap-1 text-[11px] font-bold text-emerald-800 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                    <span>واتساپ</span>
                  </a>

                  <a
                    href={`https://eitaa.com/09398083851`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white hover:bg-orange-50 border border-stone-200 hover:border-orange-400 rounded-lg flex flex-col items-center gap-1 text-[11px] font-bold text-stone-700 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF6C00]" />
                    <span>ایتا</span>
                  </a>

                  <a
                    href={`https://rubika.ir/09398083851`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white hover:bg-purple-50 border border-stone-200 hover:border-purple-400 rounded-lg flex flex-col items-center gap-1 text-[11px] font-bold text-stone-700 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                    <span>روبیکا</span>
                  </a>

                  <a
                    href={`https://t.me/+989398083851`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white hover:bg-sky-50 border border-stone-200 hover:border-sky-400 rounded-lg flex flex-col items-center gap-1 text-[11px] font-bold text-stone-700 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#24A1DE]" />
                    <span>تلگرام</span>
                  </a>

                  <a
                    href={`https://ble.ir/09398083851`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-400 rounded-lg flex flex-col items-center gap-1 text-[11px] font-bold text-stone-700 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A859]" />
                    <span>بله</span>
                  </a>

                  <a
                    href={`https://instagram.com/09398083851`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white hover:bg-pink-50 border border-stone-200 hover:border-pink-400 rounded-lg flex flex-col items-center gap-1 text-[11px] font-bold text-stone-700 transition-colors shadow-sm"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E1306C]" />
                    <span>اینستاگرام</span>
                  </a>
                </div>
              </div>

              {/* Price & Action Row (No numeric price - direct phone dialer and WhatsApp) */}
              <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-stone-500">قیمت محصول:</div>
                  <a
                    href={`tel:${WORKSHOP_PHONE}`}
                    className="text-sm sm:text-base font-black text-amber-700 hover:text-amber-800 transition-colors flex items-center gap-1.5 mt-0.5"
                    title="برقراری تماس مستقیم تلفنی جهت استعلام قیمت"
                  >
                    <Phone className="w-4 h-4 text-amber-600 animate-pulse" />
                    <span>برای قیمت تماس بگیرید ({toPersianDigits(WORKSHOP_PHONE)})</span>
                  </a>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  <button
                    onClick={() => {
                      handleAddWithFeedback(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>استعلام و خرید</span>
                  </button>

                  <a
                    href={generateOrderWhatsAppUrl({
                      phone: WORKSHOP_PHONE,
                      productTitle: activeModalProduct.title,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>استعلام در واتساپ</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
