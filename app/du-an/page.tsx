// app/du-an/page.tsx
'use client';
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ui/ProjectCard';

const DuAnPage: React.FC = () => {
  return (
    <Box className="section">
      <Typography className="section-title">Dự án nổi bật</Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" flexWrap="wrap">
        {projects.map((p) => (
          <ProjectCard key={p.slug} title={p.title} description={p.description} image={p.image} />
        ))}
      </Stack>
    </Box>
  );
};

export default DuAnPage;
