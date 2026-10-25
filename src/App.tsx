/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FabricHighlights } from './components/FabricHighlights';
import { CustomBagBuilder } from './components/CustomBagBuilder';
import { ProductCatalog } from './components/ProductCatalog';
import { ComparisonSection } from './components/ComparisonSection';
import { ContactWorkshop } from './components/ContactWorkshop';
import { Footer } from './components/Footer';
import { CustomerInquiryCartModal } from './components/CustomerInquiryCartModal';
import { FloatingActions } from './components/FloatingActions';
import { CartItem, Product } from './types';
import { CustomBagSpecs, toPersianDigits } from './utils/bagCalculator';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleAddCustomToCart = (specs: CustomBagSpecs, calculatedPrice: number) => {
    const customId = `custom-${Date.now()}`;
    const customProduct: Product = {
      id: customId,
      title: `کیف برزنتی سفارشی (${toPersianDigits(specs.lengthCm)} × ${toPersianDigits(specs.widthCm)} × ${toPersianDigits(specs.heightCm)} cm)`,
      subtitle: `دوخت اختصاصی ${specs.canvasPly} لا با نخ ۲۳ لا پنبه‌ای`,
      category: 'tools',
      categoryLabel: 'سفارش اختصاصی',
      image: '/assets/aistudio/photo_21334228053_y_6d42d873.jpg',
      priceToman: calculatedPrice,
      dimensions: `${toPersianDigits(specs.lengthCm)} × ${toPersianDigits(specs.widthCm)} × ${toPersianDigits(specs.heightCm)} سانتی‌متر`,
      ply: `${specs.canvasPly} لا` as any,
      stitching: 'نخ ۲۳ لا پنبه‌ای دوبل',
      zipper: specs.zipperGrade === 'no10_double' ? 'زیپ شماره ۱۰ دو سر روان' : 'زیپ شماره ۱۰ صنعتی',
      description: `سفارش دست‌دوز با ابعاد اختصاصی بر مبنای طول ${specs.lengthCm}cm، عرض ${specs.widthCm}cm، ارتفاع ${specs.heightCm}cm.`,
      features: [
        `برزنت ضخیم ${specs.canvasPly} لا ضد آب و سایش`,
        'دوخت ضربدری نخ ۲۳ لا پنبه‌ای',
        specs.hasShoulderStrap ? 'بند دوشی تقویتی' : 'بدون بند دوشی',
        specs.hasFrontPocket ? 'جیب بیرونی زیپ‌دار' : 'بدون جیب بیرونی',
      ],
      bestFor: 'دستگاه و ابزار اختصاصی خریدار',
    };

    setCartItems((prev) => [...prev, { product: customProduct, quantity: 1 }]);
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCalculator={handleScrollToCalculator}
      />

      <main className="flex-1">
        <Hero onOpenCalculator={handleScrollToCalculator} />
        <FabricHighlights />
        <CustomBagBuilder onAddCustomToCart={handleAddCustomToCart} />
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onOpenCalculator={handleScrollToCalculator}
        />
        <ComparisonSection />
        <ContactWorkshop />
      </main>

      <Footer />

      <CustomerInquiryCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <FloatingActions
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCalculator={handleScrollToCalculator}
      />
    </div>
  );
}
