// components/ui/ProjectCard.tsx
'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <Box className="card" sx={{ maxWidth: 360 }}>
      <Image src={image} alt={title} width={360} height={200} style={{ borderRadius: '12px' }} />
      <Typography variant="h6" mt={2}>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
};

export default ProjectCard;
