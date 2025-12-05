import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomThemeProvider from "@/components/layout/CustomThemeProvider";

export const metadata: Metadata = {
  title: "NTU - Portfolio",
  description: "Personal portfolio built with Next.js 16, React 19, MUI 7",
  keywords: ["Portfolio", "Next.js", "React", "MUI", "Developer"],
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "NTU Portfolio",
    description: "Showcasing projects, skills, and services",
    url: "https://your-domain.com",
    images: ["/og-image.png"]
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  );
}
