"use client";

import { Box, Typography, Stack, Button, Container } from "@mui/material";
import Hero from "../components/ui/Hero";
import ServiceCard from "../components/ui/ServiceCard";
import ProjectCard from "../components/ui/ProjectCard";
import TeamCard from "../components/ui/TeamCard";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import StatsCounter from "../components/ui/StatsCounter";

import services from "../data/services";
import projects from "../data/projects";
import team from "../data/team";
import testimonials from "../data/testimonials";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Hero />

      {/* DỊCH VỤ */}
      <Stack spacing={4} mt={8}>
        <Typography variant="h4" fontWeight="bold" color="var(--primary)">
          Dịch vụ nổi bật
        </Typography>

        <Stack direction="row" spacing={3} flexWrap="wrap">
          {services.slice(0, 3).map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </Stack>
      </Stack>

      {/* DỰ ÁN */}
      <Stack spacing={4} mt={10}>
        <Typography variant="h4" fontWeight="bold" color="var(--primary)">
          Dự án tiêu biểu
        </Typography>

        <Stack direction="row" spacing={3} flexWrap="wrap">
          {projects.slice(0, 6).map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </Stack>
      </Stack>

      {/* STATS */}
      <Box mt={12}>
        <StatsCounter />
      </Box>

      {/* TEAM */}
      <Stack spacing={4} mt={10}>
        <Typography variant="h4" fontWeight="bold" color="var(--primary)">
          Đội ngũ của chúng tôi
        </Typography>

        <Stack direction="row" spacing={3} flexWrap="wrap">
          {team.slice(0, 4).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </Stack>
      </Stack>

      {/* TESTIMONIALS */}
      <Box mt={12}>
        <TestimonialSlider items={testimonials} />
      </Box>

      {/* CTA */}
      <Box
        mt={12}
        p={6}
        bgcolor="var(--primary)"
        color="white"
        borderRadius={3}
        textAlign="center"
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Liên hệ ngay để hợp tác!
        </Typography>
        <Typography mb={4}>
          Chúng tôi luôn sẵn sàng đồng hành cùng doanh nghiệp của bạn.
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: "var(--gold)", color: "#000" }}
          href="/lien-he"
        >
          Liên hệ ngay
        </Button>
      </Box>
    </Container>
  );
}
