// app/gioi-thieu/page.tsx
'use client';
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const GioiThieuPage: React.FC = () => {
  return (
    <Box className="section">
      <Typography className="section-title">Giới thiệu về VietFresh</Typography>
      <Stack spacing={4} maxWidth={800} mx="auto">
        <Typography variant="body1">
          VietFresh là công ty chuyên cung cấp rau củ quả tươi sạch, hữu cơ, mang đến cho khách hàng sản phẩm chất lượng cao, an toàn cho sức khỏe.
        </Typography>
        <Typography variant="h6">Tầm nhìn</Typography>
        <Typography variant="body2">
          Trở thành thương hiệu rau củ quả hữu cơ uy tín hàng đầu Việt Nam, mang lại giá trị dinh dưỡng tốt nhất cho mọi gia đình.
        </Typography>
        <Typography variant="h6">Sứ mệnh</Typography>
        <Typography variant="body2">
          Cung cấp rau củ quả tươi sạch, an toàn, đồng thời hỗ trợ các trang trại áp dụng phương pháp hữu cơ và bền vững.
        </Typography>
        <Typography variant="h6">Giá trị cốt lõi</Typography>
        <Typography variant="body2">
          Chất lượng – Minh bạch – Dịch vụ tận tâm – Bền vững.
        </Typography>
      </Stack>
    </Box>
  );
};

export default GioiThieuPage;
