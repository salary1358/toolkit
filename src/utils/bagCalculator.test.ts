/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  toPersianDigits,
  formatToman,
  validateIranianMobile,
  calculateCustomBag,
  generateOrderWhatsAppUrl,
} from './bagCalculator.ts';

test('toPersianDigits converts English numbers to Persian glyphs', () => {
  assert.equal(toPersianDigits(1234567890), '۱۲۳۴۵۶۷۸۹۰');
  assert.equal(toPersianDigits('09398083851'), '۰۹۳۹۸۰۸۳۸۵۱');
});

test('formatToman formats currency with separator and suffix', () => {
  assert.equal(formatToman(450000), '۴۵۰,۰۰۰ تومان');
  assert.equal(formatToman(1250000), '۱,۲۵۰,۰۰۰ تومان');
});

test('validateIranianMobile verifies proper format', () => {
  assert.equal(validateIranianMobile('09398083851'), true);
  assert.equal(validateIranianMobile('+989398083851'), true);
  assert.equal(validateIranianMobile('۰۹۳۹۸۰۸۳۸۵۱'), true); // Persian numerals
  assert.equal(validateIranianMobile('12345'), false);
  assert.equal(validateIranianMobile('091234567'), false);
});

test('calculateCustomBag correctly calculates volume and pricing', () => {
  // A standard welding inverter bag: 40cm x 20cm x 25cm (20 Liters)
  const result3ply = calculateCustomBag({
    lengthCm: 40,
    widthCm: 20,
    heightCm: 25,
    canvasPly: 3,
    hasShoulderStrap: true,
    hasFrontPocket: true,
    zipperGrade: 'no10_heavy',
    bagType: 'welding_machine',
  });

  assert.equal(result3ply.volumeLiters, 20);
  assert.ok(result3ply.estimatedPriceToman > 200000);
  assert.ok(result3ply.estimatedWeightCapacityKg >= 22);

  // Compare with 6-ply
  const result6ply = calculateCustomBag({
    lengthCm: 40,
    widthCm: 20,
    heightCm: 25,
    canvasPly: 6,
    hasShoulderStrap: true,
    hasFrontPocket: true,
    zipperGrade: 'no10_double',
    bagType: 'welding_machine',
  });

  assert.ok(result6ply.estimatedPriceToman > result3ply.estimatedPriceToman);
  assert.ok(result6ply.estimatedWeightCapacityKg > result3ply.estimatedWeightCapacityKg);
});

test('generateOrderWhatsAppUrl creates properly encoded target link', () => {
  const url = generateOrderWhatsAppUrl({
    phone: '09398083851',
    productTitle: 'کیف برزنتی دستگاه جوش اینورتر',
    customerName: 'علی رضایی',
  });
  assert.ok(url.startsWith('https://wa.me/989398083851'));
  assert.ok(url.includes('wa.me'));
});
