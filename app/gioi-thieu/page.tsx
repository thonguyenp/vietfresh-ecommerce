"use client";

import { Container, Typography, Box, Stack } from "@mui/material";

export default function GioiThieuPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" color="var(--primary)">
        Giới thiệu VietFresh
      </Typography>

      <Typography mt={4}>
        VietFresh là doanh nghiệp chuyên cung cấp rau củ quả sạch, nông sản
        tiêu chuẩn cao, phục vụ hàng nghìn đối tác trên toàn quốc.
      </Typography>

      <Box mt={6}>
        <Typography variant="h4" fontWeight="bold">
          Tầm nhìn
        </Typography>
        <Typography mt={2}>
          Trở thành đơn vị dẫn đầu về cung cấp nông sản sạch tại Việt Nam.
        </Typography>
      </Box>

      <Box mt={6}>
        <Typography variant="h4" fontWeight="bold">
          Sứ mệnh
        </Typography>
        <Typography mt={2}>
          Mang đến thực phẩm an toàn – chất lượng – bền vững cho mọi gia đình.
        </Typography>
      </Box>

      <Box mt={6}>
        <Typography variant="h4" fontWeight="bold">
          Giá trị cốt lõi
        </Typography>

        <Stack mt={2} spacing={1}>
          <Typography>• Chất lượng đặt lên hàng đầu</Typography>
          <Typography>• Trung thực & Minh bạch</Typography>
          <Typography>• Bền vững & Trách nhiệm với môi trường</Typography>
        </Stack>
      </Box>
    </Container>
  );
}
