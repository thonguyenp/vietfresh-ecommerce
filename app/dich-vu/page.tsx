'use client';

import { Container, Stack, Typography, TextField, Pagination } from '@mui/material';
import { services } from '@/lib/mockData';
import { useState } from 'react';

export default function ServicesPage() {
  const [page, setPage] = useState(1);

  return (
    <Container sx={{ py: 10 }}>
      <Stack spacing={6}>
        <Typography variant="h1">Dịch vụ VietFresh</Typography>

        <TextField
          fullWidth
          placeholder="Tìm kiếm dịch vụ..."
          variant="outlined"
        />

        <Stack direction="row" spacing={4} flexWrap="wrap">
          {services.map((service) => (
            <Stack key={service.id} sx={{ width: 320 }} spacing={2}>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', borderRadius: 16 }}
              />
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="body2">{service.summary}</Typography>
            </Stack>
          ))}
        </Stack>

        <Pagination
          count={3}
          page={page}
          onChange={(_, value) => setPage(value)}
          size="large"
          color="primary"
        />
      </Stack>
    </Container>
  );
}
