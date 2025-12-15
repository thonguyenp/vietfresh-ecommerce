import { Container, Stack, Typography } from '@mui/material';

export default function VisionMissionPage() {
  return (
    <Container sx={{ py: 10 }}>
      <Stack spacing={4}>
        <Typography variant="h1">Tầm nhìn & Sứ mệnh</Typography>
        <Typography>
          Trở thành thương hiệu rau sạch hàng đầu Việt Nam về chất lượng
          và trải nghiệm khách hàng.
        </Typography>
        <Typography>
          Sứ mệnh của VietFresh là kết nối nông trại sạch với người tiêu dùng
          hiện đại một cách minh bạch và bền vững.
        </Typography>
      </Stack>
    </Container>
  );
}
