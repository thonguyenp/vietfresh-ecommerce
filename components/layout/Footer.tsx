// components/layout/Footer.tsx
'use client';
import React from 'react';
import { Box, Stack, Typography, Link as MuiLink } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#1e40af', color: '#fff', py: 6, px: 4 }}>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h6">VietFresh</Typography>
        <Stack direction="row" spacing={4}>
          <MuiLink href="/" color="inherit">Trang chủ</MuiLink>
          <MuiLink href="/gioi-thieu" color="inherit">Giới thiệu</MuiLink>
          <MuiLink href="/dich-vu" color="inherit">Dịch vụ</MuiLink>
          <MuiLink href="/du-an" color="inherit">Dự án</MuiLink>
          <MuiLink href="/doi-ngu" color="inherit">Đội ngũ</MuiLink>
          <MuiLink href="/lien-he" color="inherit">Liên hệ</MuiLink>
        </Stack>
        <Typography variant="body2" sx={{ mt: 2 }}>© 2025 VietFresh. All rights reserved.</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
