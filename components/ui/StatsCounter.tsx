"use client";

import { useEffect, useState } from "react";
import { Typography, Stack } from "@mui/material";

interface Props {
  label: string;
  value: number;
  duration?: number;
}

export default function StatsCounter({ label, value, duration = 1500 }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <Stack spacing={1} textAlign="center">
      <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e40af" }}>
        {count.toLocaleString()}
      </Typography>
      <Typography sx={{ color: "gray" }}>{label}</Typography>
    </Stack>
  );
}
