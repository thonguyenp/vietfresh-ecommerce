"use client";

import { useState } from "react";
import { Box, Typography, IconButton, Stack, Card, CardContent } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Testimonial {
  name: string;
  content: string;
  company: string;
}

interface Props {
  items: Testimonial[];
}

export default function TestimonialSlider({ items }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
        <IconButton onClick={prev}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <Card
          sx={{
            width: "100%",
            maxWidth: 600,
            boxShadow: 3,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: "1.1rem", mb: 2 }}>
              "{items[index].content}"
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>{items[index].name}</Typography>
            <Typography sx={{ color: "gray" }}>{items[index].company}</Typography>
          </CardContent>
        </Card>

        <IconButton onClick={next}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
