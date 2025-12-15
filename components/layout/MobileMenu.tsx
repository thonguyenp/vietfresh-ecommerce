'use client';

import { Drawer, Stack, Button, Box } from '@mui/material';
import Link from 'next/link';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 260,
          backdropFilter: 'blur(8px)'
        }
      }}
    >
      <Box p={3}>
        <Stack spacing={2}>
          <Button component={Link} href="/" onClick={onClose}>Trang chủ</Button>
          <Button component={Link} href="/gioi-thieu" onClick={onClose}>Giới thiệu</Button>
          <Button component={Link} href="/dich-vu" onClick={onClose}>Dịch vụ</Button>
          <Button component={Link} href="/lien-he" onClick={onClose} variant="contained">
            Liên hệ
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
