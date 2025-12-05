// app/dich-vu/page.tsx
'use client';
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { services } from '../../data/services';
import ServiceCard from '../../components/ui/ServiceCard';

const DichVuPage: React.FC = () => {
  return (
    <Box className="section">
      <Typography className="section-title">Dịch vụ của chúng tôi</Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" flexWrap="wrap">
        {services.map((s) => (
          <ServiceCard key={s.slug} title={s.title} description={s.description} />
        ))}
      </Stack>
    </Box>
  );
};

export default DichVuPage;
