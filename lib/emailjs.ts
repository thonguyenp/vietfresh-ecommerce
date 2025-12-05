// lib/emailjs.ts
import emailjs from '@emailjs/browser';

export const sendEmail = async (templateParams: Record<string, any>) => {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    );
    return result;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
