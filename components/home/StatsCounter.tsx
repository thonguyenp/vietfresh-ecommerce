import { Container, Stack, Typography } from '@mui/material';

export default function StatsCounter() {
  return (
    <Container sx={{ py: 10 }}>
      <Stack direction="row" spacing={6} justifyContent="center" flexWrap="wrap">
        {[
          { label: 'Khách hàng', value: '10.000+' },
          { label: 'Đơn hàng mỗi tháng', value: '5.000+' },
          { label: 'Nông trại đối tác', value: '20+' },
          { label: 'Năm kinh nghiệm', value: '8+' }
        ].map((stat) => (
          <Stack key={stat.label} spacing={1} alignItems="center">
            <Typography variant="h3" color="primary">
              {stat.value}
            </Typography>
            <Typography>{stat.label}</Typography>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
