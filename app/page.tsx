// app/page.tsx
'use client';
import React from 'react';
import Hero from '../components/ui/Hero';
import { services } from '../data/services';
import ServiceCard from '../components/ui/ServiceCard';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import { team } from '../data/team';
import TeamCard from '../components/ui/TeamCard';
import { testimonials } from '../data/testimonials';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import StatsCounter from '../components/ui/StatsCounter';
import { Stack, Box, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Dự án hoàn thành', value: 120 },
    { label: 'Khách hàng hài lòng', value: 350 },
    { label: 'Đội ngũ chuyên gia', value: 25 },
  ];

  return (
    <Stack spacing={12}>
      <Hero />

      <Box className="section">
        <Typography className="section-title">Dịch vụ nổi bật</Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" flexWrap="wrap">
          {services.map((s) => (
            <ServiceCard key={s.slug} title={s.title} description={s.description} />
          ))}
        </Stack>
      </Box>

      <Box className="section" sx={{ bgcolor: '#f3f4f6' }}>
        <Typography className="section-title">Dự án nổi bật</Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" flexWrap="wrap">
          {projects.map((p) => (
            <ProjectCard key={p.slug} title={p.title} description={p.description} image={p.image} />
          ))}
        </Stack>
      </Box>

      <Box className="section">
        <Typography className="section-title">Thống kê</Typography>
        <StatsCounter stats={stats} />
      </Box>

      <Box className="section" sx={{ bgcolor: '#f3f4f6' }}>
        <Typography className="section-title">Đội ngũ chuyên gia</Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" flexWrap="wrap">
          {team.map((t) => (
            <TeamCard key={t.name} name={t.name} role={t.role} photo={t.photo} />
          ))}
        </Stack>
      </Box>

      <Box className="section">
        <Typography className="section-title">Khách hàng nói về chúng tôi</Typography>
        <TestimonialSlider testimonials={testimonials} />
      </Box>
    </Stack>
  );
};

export default HomePage;
