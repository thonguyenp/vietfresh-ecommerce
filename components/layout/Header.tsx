"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  Button,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Dịch vụ", href: "/dich-vu" },
    { label: "Dự án", href: "/du-an" },
    { label: "Đội ngũ", href: "/doi-ngu" },
    { label: "Liên hệ", href: "/lien-he" },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ background: "white", color: "black", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logo.png"
              alt="VietFresh Logo"
              width={48}
              height={48}
            />
          </Link>

          {/* DESKTOP MENU */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <Button
                  sx={{
                    fontSize: "0.95rem",
                    color: "#1e40af",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Stack>

          {/* MOBILE ICON */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box sx={{ fontSize: 20, fontWeight: 700, color: "#1e40af" }}>Menu</Box>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Stack spacing={2} mt={4}>
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    textTransform: "none",
                    color: "#1e40af",
                    fontSize: "1rem",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
