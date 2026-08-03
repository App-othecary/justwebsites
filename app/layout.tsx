import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { Analytics } from "@vercel/analytics/next"
import WhatsAppChat from './components/WhatsAppChat';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Just websites| Websites for the South African market',
  description:
    'Justwebsites is a website development company that specializes in creating websites for the South African market. We offer a range of services, including website design, development, and maintenance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body className={inter.className} data-theme="dark">
        <section  className="flex flex-col justify-center ">
        <div className="bg-blue-100 absolute -top-6rem -z-10 -right-44 w-120 h-120 rounded-full blur-[10rem] sm:w-120"></div>
        <div className="bg-red-100 absolute top-1/3 -z-10 -left-44 w-120 h-120 rounded-full blur-[10rem]"></div>

        {children}
        <WhatsAppChat />
        </section>
      </body>
    </html>
  );
}
