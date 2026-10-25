/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProductCategory = 'all' | 'tools' | 'travel' | 'covers' | 'rolls';

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: ProductCategory;
  categoryLabel: string;
  image: string;
  priceToman: number;
  dimensions: string; // e.g., "۴۰ × ۲۲ × ۲۸ سانتی‌متر"
  ply: '۳ لا' | '۶ لا' | '۳ لا و ۶ لا';
  stitching: string;
  zipper: string;
  description: string;
  features: string[];
  bestFor: string;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customNote?: string;
}
