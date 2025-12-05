// components/layout/MobileMenu.tsx
'use client';
import React from 'react';
import { Box, Stack, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', bgcolor: '#1e40af', zIndex: 2000, p: 4 }}>
      <Stack direction="row" justifyContent="flex-end">
        <IconButton onClick={onClose} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Stack spacing={4} mt={4}>
        <Link href="/" onClick={onClose} style={{ color: '#fff' }}>Trang chủ</Link>
        <Link href="/gioi-thieu" onClick={onClose} style={{ color: '#fff' }}>Giới thiệu</Link>
        <Link href="/dich-vu" onClick={onClose} style={{ color: '#fff' }}>Dịch vụ</Link>
        <Link href="/du-an" onClick={onClose} style={{ color: '#fff' }}>Dự án</Link>
        <Link href="/doi-ngu" onClick={onClose} style={{ color: '#fff' }}>Đội ngũ</Link>
        <Link href="/lien-he" onClick={onClose} style={{ color: '#fff' }}>Liên hệ</Link>
        <Link href="/tam-nhin" onClick={onClose} style={{ color: '#fff' }}>Tầm nhìn</Link>
      </Stack>
    </Box>
  );
};

export default MobileMenu;
