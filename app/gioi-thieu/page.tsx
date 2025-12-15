import { Container, Stack, Typography } from '@mui/material';

export default function AboutPage() {
  return (
    <Container sx={{ py: 10 }}>
      <Stack spacing={4}>
        <Typography variant="h1">Giới thiệu VietFresh</Typography>
        <Typography>
          VietFresh ra đời với mong muốn mang rau củ quả sạch, an toàn và cao cấp
          đến mọi gia đình Việt.
        </Typography>
        <Typography>
          Chúng tôi tin rằng thực phẩm sạch là nền tảng cho sức khỏe bền vững
          và cuộc sống hạnh phúc.
        </Typography>
      </Stack>
    </Container>
  );
}
