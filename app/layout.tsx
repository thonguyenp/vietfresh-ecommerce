"use client";

import { ReactNode } from "react";
import Head from "next/head";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { CssBaseline, Box } from "@mui/material";

export const metadata = {
  title: "VietFresh - Công Ty Rau Củ Quả",
  description:
    "Doanh nghiệp cung cấp rau củ quả sạch, nông sản chất lượng cao – VietFresh Việt Nam.",
  openGraph: {
    title: "VietFresh",
    description: "Nông sản sạch - Rau củ quả chất lượng cao",
    url: "https://vietfresh.vn",
    siteName: "VietFresh",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <Head>
        <meta name="theme-color" content="#1e40af" />
      </Head>

      <body>
        <CssBaseline />

        <Header />

        <Box component="main">{children}</Box>

        <Footer />
      </body>
    </html>
  );
}
