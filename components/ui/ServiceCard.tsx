import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  slug,
}: ServiceCardProps) {
  return (
    <Link href={`/dich-vu/${slug}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          boxShadow: 3,
          transition: "0.25s",
          "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
        }}
      >
        <Box sx={{ position: "relative", height: 180 }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          />
        </Box>

        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "gray" }}>
              {description}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}
