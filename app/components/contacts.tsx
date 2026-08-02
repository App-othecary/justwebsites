'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInview } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const { ref } = useSectionInview('Contact', 0.5);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('loading');
    setMessage('');

    try {
      console.log(
        'Running on ClientSide',
        formData.get('senderEmail'),
        formData.get('message')
      );

      await sendEmail(formData);

      setStatus('success');
      setMessage('Thanks! Your message has been submitted.');
      form.reset();
    } catch (error) {
      console.error('Failed to submit contact form', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(42rem,100%)] text-center leading-8 scroll-mt-26"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Us</SectionHeading>

      <p className="mb-6 text-gray-700 dark:text-gray-300">
        For more information, email{' '}
        <a href="mailto: emilyreyndersdesigns@gmail.com" className="underline">
          emilyreyndersdesigns@gmail.com
        </a>
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-4
        borderBlack rounded-lg border-2 p-6 shadow-md"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack bg-taupe-100  dark:bg-neutral-700"
          type="email"
          required
          name="senderEmail"
          placeholder="your-email@example.com"
          maxLength={500}
        />
        <textarea
          className="h-52 rounded-lg borderBlack px-4 py-3 bg-taupe-100  dark:bg-neutral-700"
          placeholder="Message"
          name="message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="group flex items-center justify-center 
          gap-2 rounded-full w-32 h-12
           bg-taupe-300
            text-taupe-900
             hover:text-amber-950
              hover:bg-mauve-300 
              hover:scale-105
disabled:opacity-70"
        >
          {status === 'loading' ? 'Sending...' : 'Send'}
          <FaPaperPlane className="transition opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

        {message ? (
          <p className={status === 'success' ? 'text-green-700' : 'text-red-600'}>{message}</p>
        ) : null}
      </form>
    </motion.section>
  );
}

