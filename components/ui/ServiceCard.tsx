// components/ui/ServiceCard.tsx
'use client';
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Box className="card" sx={{ maxWidth: 320 }}>
      <Stack spacing={2}>
        {icon && <Box>{icon}</Box>}
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
