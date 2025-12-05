"use client";

import { useState } from "react";
import { Stack, TextField, Button, Typography, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {status === "success" && <Alert severity="success">Gửi thành công!</Alert>}
        {status === "error" && <Alert severity="error">Lỗi! Vui lòng thử lại.</Alert>}

        <TextField name="name" label="Họ và tên" required fullWidth />
        <TextField name="email" label="Email" required fullWidth />
        <TextField name="phone" label="Số điện thoại" fullWidth />
        <TextField
          name="message"
          label="Nội dung"
          required
          fullWidth
          multiline
          minRows={4}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#1e40af",
            ":hover": { bgcolor: "#162f87" },
            py: 1.4,
            fontWeight: 700,
          }}
        >
          Gửi ngay
        </Button>
      </Stack>
    </form>
  );
}
