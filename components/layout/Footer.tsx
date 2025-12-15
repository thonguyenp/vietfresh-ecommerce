import { Box, Container, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box bgcolor="#1b5e20" color="#ffffff" py={6} mt={10}>
      <Container>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h6" fontFamily="Playfair Display">
            VietFresh – Rau củ quả sạch cao cấp
          </Typography>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} VietFresh. Đồng hành cùng sức khỏe gia đình Việt.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
