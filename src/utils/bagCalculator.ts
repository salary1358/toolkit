/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CustomBagSpecs {
  lengthCm: number; // طول
  widthCm: number; // عرض
  heightCm: number; // ارتفاع
  canvasPly: 3 | 6; // 3-la or 6-la
  hasShoulderStrap: boolean; // بند دوشی
  hasFrontPocket: boolean; // جیب بیرونی زیپ‌دار
  zipperGrade: 'no10_heavy' | 'no10_double'; // زیپ ۱۰ مقاوم
  bagType: 'tool_box' | 'welding_machine' | 'grinder_drill' | 'travel_roof' | 'quilt_blanket' | 'round_cover';
}

export interface CalculationResult {
  volumeLiters: number;
  estimatedWeightCapacityKg: number;
  recommendedUse: string;
  estimatedPriceToman: number;
  formattedPrice: string;
}

export function toPersianDigits(num: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/[0-9]/g, (w) => persianDigits[parseInt(w, 10)]);
}

export function formatToman(amount: number): string {
  const formatted = amount.toLocaleString('en-US');
  return `${toPersianDigits(formatted)} تومان`;
}

export function validateIranianMobile(phone: string): boolean {
  // Normalize Persian/Arabic digits
  const normalized = phone
    .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
    .trim();
  const regex = /^(\+98|0)?9\d{9}$/;
  return regex.test(normalized);
}

export function calculateCustomBag(specs: CustomBagSpecs): CalculationResult {
  const length = Math.max(10, Math.min(300, specs.lengthCm || 10));
  const width = Math.max(10, Math.min(300, specs.widthCm || 10));
  const height = Math.max(10, Math.min(300, specs.heightCm || 10));

  // Volume in Liters
  const volumeLiters = Math.round((length * width * height) / 1000);

  // Surface area in sq meters (approximate for box: 2*(lw + lh + wh))
  const surfaceAreaSqM = (2 * (length * width + length * height + width * height)) / 10000;

  // Base price calculation based on genuine Iranian canvas artisanal cost
  // 3-la canvas: base rate per sq meter ~ 320,000 Toman with cotton 23-ply stitching
  // 6-la canvas: base rate ~ 480,000 Toman (heavy industrial)
  const plyFactor = specs.canvasPly === 6 ? 480000 : 330000;
  let price = Math.round(surfaceAreaSqM * plyFactor + 140000); // 140,000 base for zipper #10, webbing, handles

  if (specs.hasShoulderStrap) {
    price += 45000;
  }
  if (specs.hasFrontPocket) {
    price += 35000;
  }
  if (specs.zipperGrade === 'no10_double') {
    price += 25000;
  }

  // Round to nearest 5,000 Toman
  price = Math.ceil(price / 5000) * 5000;

  // Weight capacity
  const baseCapacity = specs.canvasPly === 6 ? 45 : 22;
  const estimatedWeightCapacityKg = specs.canvasPly === 6
    ? Math.min(65, Math.round(baseCapacity + volumeLiters * 0.4))
    : Math.min(30, Math.round(baseCapacity + volumeLiters * 0.25));

  let recommendedUse = 'ابزارآلات سبک و نیمه‌سنگین';
  if (specs.bagType === 'welding_machine') {
    recommendedUse = 'انواع اینورتر جوشکاری، کابل و انبر با پارچه ضد سایش';
  } else if (specs.bagType === 'grinder_drill') {
    recommendedUse = 'فرز آهنگری و سنگ‌بری، دریل تخریب و بتن‌کن';
  } else if (specs.bagType === 'travel_roof') {
    recommendedUse = 'باربند ماشین، ضد آب و ضد باران و باد شدید جاده';
  } else if (specs.bagType === 'quilt_blanket') {
    recommendedUse = 'جاپتویی، لحاف، لباس‌های فصلی و وسایل کمپینگ ضد غبار';
  } else if (specs.bagType === 'round_cover') {
    recommendedUse = 'کاور چرخ زاپاس، کپسول گاز و تجهیزات مدور';
  } else if (specs.canvasPly === 6) {
    recommendedUse = 'صنعتی فوق سنگین، آچارهای سنگین کارگاهی و مکانیکی';
  }

  return {
    volumeLiters,
    estimatedWeightCapacityKg,
    recommendedUse,
    estimatedPriceToman: price,
    formattedPrice: formatToman(price),
  };
}

export function generateOrderWhatsAppUrl(params: {
  phone: string;
  productTitle?: string;
  specs?: CustomBagSpecs;
  calcResult?: CalculationResult;
  customerName?: string;
  notes?: string;
}): string {
  const targetPhone = '989398083851'; // 09398083851
  let text = `سلام، از طریق وب‌سایت تولیدی کیف ابزار نقش جهان پیام می‌دهم.\n`;

  if (params.customerName) {
    text += `نام سفارش‌دهنده: ${params.customerName}\n`;
  }

  if (params.productTitle) {
    text += `قصد استعلام / خرید محصول: ${params.productTitle}\n`;
  }

  if (params.specs && params.calcResult) {
    text += `📐 مشخصات سفارش سفارشی:\n` +
      `- ابعاد: ${params.specs.lengthCm} × ${params.specs.widthCm} × ${params.specs.heightCm} سانتی‌متر\n` +
      `- نوع برزنت: ${params.specs.canvasPly} لا مقاوم\n` +
      `- بند دوشی: ${params.specs.hasShoulderStrap ? 'دارد' : 'ندارد'}\n` +
      `- جیب بیرونی: ${params.specs.hasFrontPocket ? 'دارد' : 'ندارد'}\n` +
      `- تخمین قیمت: ${params.calcResult.formattedPrice}\n`;
  }

  if (params.notes) {
    text += `توضیحات تکمیلی: ${params.notes}\n`;
  }

  text += `\nلطفاً راهنمایی و تایید بفرمایید. با تشکر.`;

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
}

export function generateSmsUrl(text: string): string {
  const targetPhone = '09398083851';
  return `sms:${targetPhone}?body=${encodeURIComponent(text)}`;
}
