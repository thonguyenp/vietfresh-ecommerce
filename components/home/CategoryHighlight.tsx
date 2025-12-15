import { Container, Stack, Typography, Box } from '@mui/material';

export default function CategoryHighlight() {
  return (
    <Box bgcolor="#ffffff">
      <Container sx={{ py: 10 }}>
        <Stack spacing={4}>
          <Typography variant="h2" textAlign="center">
            Danh mục sản phẩm
          </Typography>
          <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap">
            {['Rau lá', 'Củ quả', 'Trái cây', 'Combo tiện lợi'].map((item) => (
              <Box
                key={item}
                sx={{
                  width: 260,
                  height: 160,
                  borderRadius: 4,
                  background:
                    'linear-gradient(135deg, #4caf5010, #ffffff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h6">{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
