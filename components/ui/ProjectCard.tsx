import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
}

export default function ProjectCard({ title, location, image }: ProjectCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        transition: "0.25s",
        "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
      }}
    >
      <Box sx={{ position: "relative", height: 200 }}>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </Box>

      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "0.95rem", color: "gray" }}>{location}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
