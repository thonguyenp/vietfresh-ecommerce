'use client';

import { Box, Container, Stack, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1506806732259-39c2d0268443)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <Box
        className="hero-overlay"
        sx={{
          position: 'absolute',
          inset: 0
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Stack
          spacing={4}
          justifyContent="center"
          sx={{ minHeight: '100vh', maxWidth: 700 }}
        >
          <Typography variant="h1">
            Rau củ sạch cao cấp cho cuộc sống xanh
          </Typography>
          <Typography variant="h6" color="white">
            VietFresh mang đến nguồn rau củ tươi mới mỗi ngày, được tuyển chọn kỹ lưỡng
            từ các nông trại uy tín tại Việt Nam.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button size="large" variant="contained">
              Mua ngay
            </Button>
            <Button size="large" variant="outlined">
              Khám phá thêm
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
