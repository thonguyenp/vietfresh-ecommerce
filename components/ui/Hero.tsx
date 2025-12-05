"use client";

import { motion } from "framer-motion";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "80vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.65), rgba(0,0,0,0.25))",
        }}
      />

      {/* Content */}
      <Stack
        spacing={3}
        sx={{
          maxWidth: 700,
          px: 3,
          textAlign: "center",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "3.4rem" },
            }}
          >
            Nông sản sạch – Vì sức khỏe cộng đồng
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Typography sx={{ fontSize: "1.1rem", opacity: 0.9 }}>
            VietFresh cung cấp rau củ quả sạch, an toàn và đạt chuẩn cao nhất,
            mang đến bữa ăn tươi ngon mỗi ngày.
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Link href="/dich-vu">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#fbbf24",
                  color: "#1e40af",
                  px: 4,
                  py: 1.2,
                  fontWeight: 700,
                }}
              >
                Khám phá dịch vụ
              </Button>
            </Link>
            <Link href="/lien-he">
              <Button
                variant="outlined"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.2,
                  fontWeight: 700,
                }}
              >
                Liên hệ ngay
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </Stack>
    </Box>
  );
}
