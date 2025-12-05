// app/tam-nhin/page.tsx
'use client';
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const TamNhinPage: React.FC = () => {
  return (
    <Box className="section">
      <Typography className="section-title">Tầm nhìn của chúng tôi</Typography>
      <Stack spacing={3} maxWidth={800} mx="auto">
        <Typography variant="body1">
          VietFresh hướng tới trở thành thương hiệu rau củ quả hữu cơ hàng đầu Việt Nam, cung cấp sản phẩm sạch, an toàn, và giàu dinh dưỡng cho mọi gia đình.
        </Typography>
        <Typography variant="h6">Sứ mệnh</Typography>
        <Typography variant="body2">
          Cung cấp rau củ quả tươi sạch, hỗ trợ các trang trại áp dụng phương pháp hữu cơ và bền vững.
        </Typography>
        <Typography variant="h6">Giá trị cốt lõi</Typography>
        <Typography variant="body2">
          Chất lượng – Minh bạch – Dịch vụ tận tâm – Bền vững.
        </Typography>
      </Stack>
    </Box>
  );
};

export default TamNhinPage;
