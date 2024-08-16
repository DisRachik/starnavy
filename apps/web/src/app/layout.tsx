import { clsx } from 'clsx';
import './globals.css';
import '@repo/ui/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'STARNAVY',
  description: 'Something about characters from the Star Wars universe.',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'flex min-h-dvh flex-col items-center justify-between overflow-x-hidden')}>
        <main className='w-dvw flex-1 bg-[url("/stars-bg.jpg")] bg-fixed'>{children}</main>
      </body>
    </html>
  );
}
