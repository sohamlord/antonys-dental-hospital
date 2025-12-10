import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const poppins = Poppins({
  variable: '--ff-poppins',
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  variable: '--ff-roboto',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ANTONY'S DENTAL HOSPITAL - We Are Best Dental Service",
  description: "We Are Best Dental Service provider.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`} id="top">
        {children}
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
