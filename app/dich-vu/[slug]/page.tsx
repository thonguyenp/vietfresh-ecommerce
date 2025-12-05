// app/dich-vu/[slug]/page.tsx
'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { services } from '../../../data/services';

const ServiceDetailPage: React.FC = () => {
  const params = useParams();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return <Typography>Không tìm thấy dịch vụ</Typography>;

  return (
    <Box className="section" maxWidth={700} mx="auto">
      <Typography variant="h4" fontWeight={700} mb={2}>{service.title}</Typography>
      <Typography variant="body1">{service.description}</Typography>
    </Box>
  );
};

export default ServiceDetailPage;
