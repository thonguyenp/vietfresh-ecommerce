import { Container, Stack, Typography, Avatar } from '@mui/material';
import { team } from '@/lib/mockData';

export default function TeamPage() {
  return (
    <Container sx={{ py: 10 }}>
      <Stack spacing={6}>
        <Typography variant="h1">Đội ngũ VietFresh</Typography>
        <Stack direction="row" spacing={4} flexWrap="wrap">
          {team.map((member) => (
            <Stack key={member.id} spacing={2} alignItems="center" sx={{ width: 260 }}>
              <Avatar src={member.avatar} sx={{ width: 120, height: 120 }} />
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {member.position}
              </Typography>
              <Typography variant="body2" align="center">
                {member.bio}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
