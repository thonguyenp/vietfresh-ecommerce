'use client';

import { Container, Stack, Typography, TextField, Button } from '@mui/material';

export default function ContactPage() {
  return (
    <Container sx={{ py: 10, maxWidth: 600 }}>
      <Stack spacing={4}>
        <Typography variant="h1">Liên hệ VietFresh</Typography>
        <TextField label="Họ và tên" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Nội dung" fullWidth multiline rows={4} />
        <Button variant="contained" size="large">
          Gửi liên hệ
        </Button>
      </Stack>
    </Container>
  );
}
