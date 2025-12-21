import { Zen_Dots, Geist, Geist_Mono } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
