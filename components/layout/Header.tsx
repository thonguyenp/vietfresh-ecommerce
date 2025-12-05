// components/layout/Header.tsx
'use client';
import React, { useState } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <Box component="header" sx={{ py: 2, px: 4, bgcolor: '#1e40af', color: '#fff', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" fontWeight={700}>
          <Link href="/">VietFresh</Link>
        </Typography>
        <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link href="/">Trang chủ</Link>
          <Link href="/gioi-thieu">Giới thiệu</Link>
          <Link href="/dich-vu">Dịch vụ</Link>
          <Link href="/du-an">Dự án</Link>
          <Link href="/doi-ngu">Đội ngũ</Link>
          <Link href="/lien-he">Liên hệ</Link>
          <Link href="/tam-nhin">Tầm nhìn</Link>
        </Stack>
        <Button sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => setOpenMobile(true)}>Menu</Button>
      </Stack>
      <MobileMenu open={openMobile} onClose={() => setOpenMobile(false)} />
    </Box>
  );
};

export default Header;
