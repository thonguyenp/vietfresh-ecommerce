import Link from "next/link";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#1e40af",
        color: "white",
        mt: 8,
        pt: 6,
        pb: 4,
      }}
    >
      <Box className="container">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={4}
        >
          {/* LOGO */}
          <Stack spacing={2}>
            <Image
              src="/images/logo.png"
              width={60}
              height={60}
              alt="VietFresh"
            />
            <Typography sx={{ maxWidth: 280, color: "#e5e7eb" }}>
              VietFresh — Nông sản sạch, chất lượng cao, vì sức khỏe cộng đồng.
            </Typography>
          </Stack>

          {/* NAVIGATION */}
          <Stack spacing={1}>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>Điều hướng</Typography>
            <Link href="/">Trang chủ</Link>
            <Link href="/gioi-thieu">Giới thiệu</Link>
            <Link href="/dich-vu">Dịch vụ</Link>
            <Link href="/du-an">Dự án</Link>
            <Link href="/doi-ngu">Đội ngũ</Link>
            <Link href="/lien-he">Liên hệ</Link>
          </Stack>

          {/* CONTACT */}
          <Stack spacing={1}>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>Liên hệ</Typography>
            <Typography>📍 123 Đường Xanh, TP. Nha Trang</Typography>
            <Typography>📞 0901 234 567</Typography>
            <Typography>✉ contact@vietfresh.vn</Typography>
          </Stack>
        </Stack>

        {/* COPYRIGHT */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            fontSize: "0.9rem",
            color: "#e5e7eb",
          }}
        >
          © {new Date().getFullYear()} VietFresh. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
}
