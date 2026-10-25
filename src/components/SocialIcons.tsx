/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Instagram Official Gradient Icon
export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <radialGradient id="ig-grad" cx="20%" cy="100%" r="130%" fx="20%" fy="100%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
    <circle cx="12" cy="12" r="4.8" stroke="white" strokeWidth="1.8" />
    <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4.5" stroke="white" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
  </svg>
);

// 2. Telegram Official Icon
export const TelegramIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="12" fill="#24A1DE" />
    <path
      d="M5.4 11.8L17.8 7.1C18.4 6.9 19 7.3 18.8 8L16.7 17.7C16.6 18.2 16 18.4 15.6 18.1L12.3 15.6L10.7 17.1C10.5 17.3 10.2 17.2 10.2 16.9L10.5 13.9L16 8.9C16.2 8.7 16 8.5 15.8 8.6L9 12.9L6.1 12C5.5 11.8 5.5 11.2 6.1 11.1L5.4 11.8Z"
      fill="white"
    />
  </svg>
);

// 3. Eitaa (ایتا) Official Signature Orange Icon
export const EitaaIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="12" fill="#EF6C00" />
    <path
      d="M24 10C16.27 10 10 16.27 10 24C10 31.73 16.27 38 24 38C27.86 38 31.36 36.43 33.9 33.9C34.49 33.31 34.49 32.36 33.9 31.77C33.31 31.18 32.36 31.18 31.77 31.77C29.74 33.8 26.94 35.05 24 35.05C17.9 35.05 12.95 30.1 12.95 24C12.95 17.9 17.9 12.95 24 12.95C30.1 12.95 35.05 17.9 35.05 24C35.05 26.44 34.25 28.71 32.9 30.55L31.33 27.83C32.1 26.71 32.55 25.4 32.55 24C32.55 19.28 28.72 15.45 24 15.45C19.28 15.45 15.45 19.28 15.45 24C15.45 28.72 19.28 32.55 24 32.55C25.84 32.55 27.53 31.97 28.92 30.98L30.9 34.4C28.91 35.73 26.54 36.5 24 36.5C17.1 36.5 11.5 30.9 11.5 24C11.5 17.1 17.1 11.5 24 11.5C30.9 11.5 36.5 17.1 36.5 24C36.5 27.2 35.3 30.14 33.3 32.39L35.4 35.9C37.05 32.8 38 29.2 38 25.4C38 16.9 31.73 10 24 10Z"
      fill="white"
    />
    <circle cx="24" cy="24" r="4.5" fill="white" />
  </svg>
);

// 4. Rubika (روبیکا) Official Multi-Colored Petals/Cube Icon
export const RubikaIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="12" fill="#7C3AED" />
    <path
      d="M24 11L13 17.35V30.05L24 36.4L35 30.05V17.35L24 11Z"
      fill="#F59E0B"
    />
    <path
      d="M24 11L35 17.35L24 23.7L13 17.35L24 11Z"
      fill="#EC4899"
    />
    <path
      d="M13 17.35L24 23.7V36.4L13 30.05V17.35Z"
      fill="#3B82F6"
    />
    <path
      d="M35 17.35L24 23.7V36.4L35 30.05V17.35Z"
      fill="#10B981"
    />
  </svg>
);

// 5. Bale (بله) Official Signature Emerald Green Icon
export const BaleIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="48" height="48" rx="12" fill="#00A859" />
    <path
      d="M24 10C15.7 10 9 16.27 9 24C9 27.4 10.3 30.5 12.5 32.88L11.2 37.3C11 38 11.6 38.6 12.3 38.4L17 37.1C19.14 38.3 21.5 39 24 39C32.3 39 39 32.73 39 25C39 17.27 32.3 10 24 10Z"
      fill="white"
    />
    <path
      d="M19 24.5L22.5 28L30 19"
      stroke="#00A859"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. WhatsApp Official Icon
export const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path
      d="M17.5 14.3C17.2 14.1 15.6 13.3 15.3 13.2C15 13.1 14.8 13.1 14.6 13.4C14.4 13.7 13.8 14.3 13.7 14.5C13.5 14.7 13.3 14.7 13 14.5C12.7 14.3 11.7 14 10.6 13C9.7 12.2 9.1 11.3 8.9 11C8.7 10.7 8.9 10.6 9 10.4C9.1 10.3 9.3 10.1 9.4 9.9C9.5 9.7 9.6 9.6 9.7 9.4C9.8 9.2 9.7 9 9.6 8.9C9.5 8.8 8.9 7.4 8.7 6.8C8.5 6.2 8.3 6.3 8.1 6.3C7.9 6.3 7.7 6.3 7.5 6.3C7.3 6.3 7 6.4 6.7 6.7C6.4 7 5.7 7.7 5.7 9.1C5.7 10.5 6.7 11.8 6.9 12.1C7.1 12.4 8.9 15.1 11.6 16.3C12.3 16.6 12.8 16.8 13.2 16.9C13.9 17.1 14.5 17.1 15 17C15.6 16.9 16.8 16.3 17.1 15.5C17.4 14.7 17.4 14 17.3 13.9C17.2 13.8 17.8 14.5 17.5 14.3Z"
      fill="white"
    />
  </svg>
);
