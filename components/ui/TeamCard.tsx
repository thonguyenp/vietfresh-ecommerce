// components/ui/TeamCard.tsx
'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  photo: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, photo }) => {
  return (
    <Box className="card" sx={{ maxWidth: 280, textAlign: 'center' }}>
      <Image src={photo} alt={name} width={200} height={200} style={{ borderRadius: '50%' }} />
      <Typography variant="h6" mt={2}>{name}</Typography>
      <Typography variant="body2" color="text.secondary">{role}</Typography>
    </Box>
  );
};

export default TeamCard;
