'use client';

import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export default function GlobalStyles() {
  return (
    <MuiGlobalStyles
      styles={{
        body: {
          backgroundColor: '#f8fff8'
        },
        '.hero-overlay': {
          background:
            'linear-gradient(to bottom, rgba(76,175,80,0.3), rgba(76,175,80,0.1))'
        }
      }}
    />
  );
}
