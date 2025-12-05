// components/ui/Hero.tsx
'use client';
import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <Box className="hero-section" sx={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <Stack spacing={3} alignItems="center" justifyContent="center" sx={{ textAlign: 'center' }}>
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h2" fontWeight={700}>VietFresh - Rau củ quả tươi sạch mỗi ngày</Typography>
        </motion.div>
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
          <Typography variant="h6">Cung cấp sản phẩm hữu cơ, đảm bảo an toàn và dinh dưỡng cho gia đình bạn.</Typography>
        </motion.div>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4 }}>
          <Button className="primary" href="/lien-he">Liên hệ ngay</Button>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Hero;
