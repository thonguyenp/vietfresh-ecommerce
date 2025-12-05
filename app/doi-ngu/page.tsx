// app/doi-ngu/page.tsx
'use client';
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { team } from '../../data/team';
import TeamCard from '../../components/ui/TeamCard';

const DoiNguPage: React.FC = () => {
  return (
    <Box className="section">
      <Typography className="section-title">Đội ngũ chuyên gia</Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" flexWrap="wrap">
        {team.map((t) => (
          <TeamCard key={t.name} name={t.name} role={t.role} photo={t.photo} />
        ))}
      </Stack>
    </Box>
  );
};

export default DoiNguPage;
