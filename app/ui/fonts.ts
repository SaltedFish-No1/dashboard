import { Inter } from 'next/font/google';
import { Doto } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});
export const doto = Doto({
    subsets: ['latin'],
    display: 'swap',

});

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
  });