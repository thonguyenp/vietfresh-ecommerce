"use client";

import { Container, Typography, Box } from "@mui/material";
import ContactForm from "../../components/ui/ContactForm";

export default function LienHePage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" color="var(--primary)">
        Liên hệ
      </Typography>

      <Typography mt={2}>
        Gửi thông tin cho chúng tôi, đội ngũ VietFresh sẽ phản hồi trong thời gian sớm nhất.
      </Typography>

      <Box mt={4}>
        <ContactForm />
      </Box>
    </Container>
  );
}
