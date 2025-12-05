// app/lien-he/page.tsx
'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from '../../components/ui/ContactForm';

const LienHePage: React.FC = () => {
  return (
    <Box className="section">
      <Typography className="section-title">Liên hệ với chúng tôi</Typography>
      <ContactForm />
    </Box>
  );
};

export default LienHePage;
