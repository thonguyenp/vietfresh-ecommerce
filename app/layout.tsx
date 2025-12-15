import ThemeRegistry from '@/theme/ThemeRegistry';
import GlobalStyles from '@/theme/GlobalStyles';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <ThemeRegistry>
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
