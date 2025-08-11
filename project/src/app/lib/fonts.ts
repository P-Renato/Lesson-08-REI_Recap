import { Inter, Roboto, Lora } from 'next/font/google';

export const inter = Inter({
  fallback: ['Helvetica', 'Arial'],
  subsets: ['latin'],
  style: 'normal',
  weight: '500',
});

export const roboto = Roboto({
  fallback: ['Helvetica', 'Arial'],
  subsets: ['latin'],
  style: 'normal',
  weight: '800', // Regular
});

export const lora = Lora({
  fallback: ['Georgia', 'serif'],
  subsets: ['latin'],
  style: 'normal',
  weight: '400', // Regular
});
