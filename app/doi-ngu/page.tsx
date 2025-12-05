"use client";

import { Container, Typography, Stack } from "@mui/material";
import team from "../../data/team";
import TeamCard from "../../components/ui/TeamCard";

export default function DoiNguPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" color="var(--primary)">
        Đội ngũ VietFresh
      </Typography>

      <Stack direction="row" spacing={3} flexWrap="wrap" mt={4}>
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </Stack>
    </Container>
  );
}
