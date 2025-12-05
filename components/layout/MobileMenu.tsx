"use client";

import { Drawer, Box, Stack, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Dịch vụ", href: "/dich-vu" },
    { label: "Dự án", href: "/du-an" },
    { label: "Đội ngũ", href: "/doi-ngu" },
    { label: "Liên hệ", href: "/lien-he" },
  ];

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 260, p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={{ fontSize: 20, fontWeight: 700, color: "#1e40af" }}>Menu</Box>
          <IconButton onClick={onClose}>
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
                onClick={onClose}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
}
