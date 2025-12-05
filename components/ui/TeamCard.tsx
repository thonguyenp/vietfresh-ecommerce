import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
}

export default function TeamCard({ name, position, image }: TeamCardProps) {
  return (
    <Card
      sx={{
        textAlign: "center",
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.25s",
        "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
      }}
    >
      <Box sx={{ position: "relative", height: 260 }}>
        <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
      </Box>

      <CardContent>
        <Stack spacing={1} alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {name}
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "0.95rem" }}>
            {position}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
