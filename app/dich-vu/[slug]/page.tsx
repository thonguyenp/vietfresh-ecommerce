import { Container, Stack, Typography } from '@mui/material';
import { services } from '@/lib/mockData';

export default async function ServiceDetailPage({ params }: 
  { 
  params: Promise<{ slug: string }>;
   }) 
  {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return null;

  return (
    <Container sx={{ py: 10 }}>
      <Stack spacing={4}>
        <Typography variant="h1">{service.title}</Typography>
        <img
          src={service.image}
          alt={service.title}
          style={{ width: '100%', borderRadius: 20 }}
        />
        <Typography>{service.content}</Typography>
      </Stack>
    </Container>
  );
}
