"use client";

import { Container, Typography, Stack } from "@mui/material";
import ServiceCard from "../../components/ui/ServiceCard";
import services from "../../data/services";

export default function DichVuPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" color="var(--primary)">
        Dịch vụ của chúng tôi
      </Typography>

      <Stack direction="row" spacing={3} flexWrap="wrap" mt={4}>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </Stack>
    </Container>
  );
}
