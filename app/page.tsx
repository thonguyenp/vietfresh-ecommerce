"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          py: 10
        }}
      >
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <Typography variant="h2" fontWeight={700} sx={{ mb: 2 }}>
            Hello, I'm Thọ — Web Developer
          </Typography>

          <Typography variant="h5" sx={{ mb: 4, opacity: 0.7 }}>
            Building modern, fast, and beautiful web applications.
          </Typography>

          <Link href="/projects">
            <Button variant="contained" size="large">
              View My Work
            </Button>
          </Link>
        </motion.div>

        <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
          <Image
            src="/placeholder/avatar.png"
            alt="Avatar"
            width={260}
            height={260}
            style={{ borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Container>
  );
}
