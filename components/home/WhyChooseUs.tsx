import { Container, Stack, Typography } from '@mui/material';

export default function WhyChooseUs() {
  return (
    <Container sx={{ py: 10 }}>
      <Stack spacing={6}>
        <Typography variant="h2" textAlign="center">
          Vì sao chọn VietFresh?
        </Typography>
        <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap">
          {[
            'Rau củ tươi mỗi ngày',
            'Nguồn gốc minh bạch',
            'Giao hàng nhanh trong ngày',
            'Chăm sóc khách hàng tận tâm'
          ].map((reason) => (
            <Stack key={reason} sx={{ width: 260 }} spacing={2}>
              <Typography variant="h6">{reason}</Typography>
              <Typography variant="body2">
                Cam kết chất lượng cao cấp và trải nghiệm mua sắm dễ chịu.
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
