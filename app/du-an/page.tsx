"use client";

import { Container, Typography, Stack } from "@mui/material";
import projects from "../../data/projects";
import ProjectCard from "../../components/ui/ProjectCard";

export default function DuAnPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" color="var(--primary)">
        Dự án nổi bật
      </Typography>

      <Stack direction="row" flexWrap="wrap" spacing={3} mt={4}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Stack>
    </Container>
  );
}
