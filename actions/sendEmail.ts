'use server';

import { Resend } from 'resend';
import { validateEmail } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    console.log(
        'Running on ServerSide',    
        "Sender Email: ", formData.get('senderEmail'),
        "Message: ", formData.get('message')
      );

      if (!validateEmail(formData.get('senderEmail'), 500)) {
        throw new Error('Invalid email address');
      }
      if (!validateEmail(formData.get('message'), 5000) || typeof formData.get('message') !== 'string') {
        throw new Error('Message is required');
      }

     await resend.emails.send({
        from: 'Contact form submission <onboarding@resend.dev>',
        to: 'emmajennessa@gmail.com',
        subject: 'Contact form submission',
        text: `Sender Email: ${formData.get('senderEmail')}\n\nMessage: ${formData.get('message')}`,
        });

      const senderEmail = formData.get('senderEmail') as string;
      const message = formData.get('message') as string;

   
//   const email = {
//     senderEmail,
//     message,
//   };
//   const res = await fetch('/api/sendEmail', {
//     method: 'POST',
//     body: JSON.stringify(email),
//   });
//   return res.json();
};