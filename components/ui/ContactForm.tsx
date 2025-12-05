// components/ui/ContactForm.tsx
'use client';
import React from 'react';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { sendEmail } from '../../lib/emailjs';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await sendEmail(data);
      alert('Gửi thành công!');
      reset();
    } catch {
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 600, mx: 'auto' }}>
      <Stack spacing={3}>
        <TextField label="Họ và tên" {...register('name', { required: true })} fullWidth />
        <TextField label="Email" {...register('email', { required: true })} type="email" fullWidth />
        <TextField label="Nội dung" {...register('message', { required: true })} multiline rows={4} fullWidth />
        <Button type="submit" className="primary">Gửi liên hệ</Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;
