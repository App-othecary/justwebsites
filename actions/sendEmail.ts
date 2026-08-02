'use server';

export const sendEmail = async (formData: FormData) => {
    console.log(
        'Running on ServerSide',    
        "Sender Email: ", formData.get('senderEmail'),
        "Message: ", formData.get('message')
      );
//       const senderEmail = formData.get('senderEmail') as string;
//   const message = formData.get('message') as string;
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