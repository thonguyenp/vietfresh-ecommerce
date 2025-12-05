// components/ui/TestimonialSlider.tsx
'use client';
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  message: string;
  photo: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const t = testimonials[index];

  return (
    <Box sx={{ textAlign: 'center', position: 'relative', maxWidth: 500, margin: '0 auto' }}>
      <Image src={t.photo} alt={t.name} width={100} height={100} style={{ borderRadius: '50%', margin: '0 auto' }} />
      <Typography variant="body1" mt={2}>"{t.message}"</Typography>
      <Typography variant="subtitle1" mt={1} fontWeight={600}>{t.name}</Typography>
      <Typography variant="body2" color="text.secondary">{t.role}</Typography>
      <IconButton onClick={prev} sx={{ position: 'absolute', top: '50%', left: -40, color: '#1e40af' }}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton onClick={next} sx={{ position: 'absolute', top: '50%', right: -40, color: '#1e40af' }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default TestimonialSlider;
