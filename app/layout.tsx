// app/layout.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../app/globals.css';

export const metadata = {
  title: 'VietFresh - Rau củ quả tươi sạch',
  description: 'VietFresh cung cấp rau củ quả tươi sạch, an toàn và hữu cơ.',
  openGraph: {
    title: 'VietFresh - Rau củ quả tươi sạch',
    description: 'VietFresh cung cấp rau củ quả tươi sạch, an toàn và hữu cơ.',
    images: [{ url: '/images/hero.jpg' }],
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
