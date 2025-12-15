'use client';

import { AppBar, Box, Container, Stack, Toolbar, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? '#ffffff' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(10px)',
        transition: 'all .3s ease'
      }}
    >
      <Toolbar>
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography
              variant="h5"
              fontFamily="Playfair Display"
              fontWeight={700}
              color="primary"
            >
              VietFresh
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center">
              <Button component={Link} href="/">Trang chủ</Button>
              <Button component={Link} href="/gioi-thieu">Giới thiệu</Button>
              <Button component={Link} href="/dich-vu">Dịch vụ</Button>
              <Button component={Link} href="/lien-he" variant="contained">
                Liên hệ
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
