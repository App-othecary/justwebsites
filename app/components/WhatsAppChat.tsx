"use client";

import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  const phone = "+27846335966"; // Replace with your number

  const message = encodeURIComponent(
    "Hi Emily! I found your website and I want something similar."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {open && (
        <div className="mb-4 w-72 rounded-2xl bg-zinc-900 text-white shadow-2xl border border-yellow-500">

          <div className="flex items-center justify-between rounded-t-2xl bg-green-600 p-4">

            <div className="flex items-center gap-3">
              <FaWhatsapp size={28} />
              <div>
                <h3 className="font-semibold">Just Websites</h3>
                <p className="text-xs opacity-80">
                  Usually replies within an hour
                </p>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="p-4">
            <p className="text-sm text-zinc-300 mb-4">
              👋 Hi! Looking for a new website or redesign? I'd love to hear
              about your project.
            </p>

            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-green-500 py-3 text-center font-semibold text-white hover:bg-green-600 transition"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition"
      >
        <FaWhatsapp size={34} />
      </button>

    </div>
  );
}