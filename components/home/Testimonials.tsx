import { Container, Stack, Typography, Avatar, Box } from '@mui/material';
import { testimonials } from '@/lib/mockData';

export default function Testimonials() {
  return (
    <Box bgcolor="#ffffff">
      <Container sx={{ py: 10 }}>
        <Stack spacing={6}>
          <Typography variant="h2" textAlign="center">
            Khách hàng nói gì về VietFresh
          </Typography>
          <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap">
            {testimonials.map((item) => (
              <Stack
                key={item.id}
                spacing={2}
                sx={{
                  width: 320,
                  p: 4,
                  borderRadius: 4,
                  boxShadow: 3
                }}
              >
                <Avatar src={item.avatar} />
                <Typography>{item.content}</Typography>
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.role}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
