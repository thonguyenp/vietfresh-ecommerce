import { notFound } from "next/navigation";
import services from "../../../data/services";
import { Container, Typography, Box } from "@mui/material";

export default function DichVuDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" color="var(--primary)">
        {service.title}
      </Typography>

      <Typography mt={3}>{service.description}</Typography>

      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold">
          Lợi ích
        </Typography>
        <Typography mt={2}>{service.benefits}</Typography>
      </Box>
    </Container>
  );
}
