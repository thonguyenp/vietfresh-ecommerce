// components/ui/StatsCounter.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';

interface Stat {
  label: string;
  value: number;
}

interface StatsCounterProps {
  stats: Stat[];
}

const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, idx) => {
      let start = 0;
      const end = stat.value;
      const increment = Math.ceil(end / 100);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = start;
          return newCounts;
        });
      }, 20);
    });
  }, [stats]);

  return (
    <Stack direction="row" justifyContent="center" spacing={8}>
      {stats.map((s, i) => (
        <Box key={i} sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700}>{counts[i]}</Typography>
          <Typography variant="body1">{s.label}</Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default StatsCounter;
