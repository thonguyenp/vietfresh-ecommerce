import { Container, Stack, Typography, Box } from '@mui/material';

export default function FarmHighlight() {
  return (
    <Container sx={{ py: 10 }}>
      <Stack spacing={4} direction={{ xs: 'column', md: 'row' }}>
        <Box
          sx={{
            flex: 1,
            height: 360,
            borderRadius: 4,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Stack spacing={3} flex={1}>
          <Typography variant="h2">
            Nông trại đạt chuẩn VietGAP
          </Typography>
          <Typography>
            VietFresh hợp tác với các nông trại sạch tại Đà Lạt và miền Tây,
            đảm bảo quy trình trồng trọt bền vững, không hóa chất độc hại.
          </Typography>
          <Typography>
            Mỗi sản phẩm đều được truy xuất nguồn gốc rõ ràng, mang đến sự
            an tâm tuyệt đối cho khách hàng.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
