"use client";
import React, { useState } from "react";

import BackgroundBottom from "./BackgroundBottom";
import MarqueeText from "./MarqueeText";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <BackgroundBottom>
      <MarqueeText />
      <div className="w-full min-h-screen flex items-center justify-center px-4 py-12  ">
        <div className="w-full max-w-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-300 dark:border-zinc-700 rounded-2xl shadow-lg p-8 space-y-6  bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-[#000000] dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0]">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-700 dark:text-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.985 9.985 0 01-4.9-1.263L3 20l1.478-3.839A7.962 7.962 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-white text-center">
              Contact Me
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Got a project or idea? Let's talk.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                id: "name",
                type: "text",
                label: "Name",
                placeholder: "Your full name",
              },
              {
                id: "email",
                type: "email",
                label: "Email",
                placeholder: "you@example.com",
              },
              {
                id: "subject",
                type: "text",
                label: "Subject",
                placeholder: "What's this about?",
              },
            ].map(({ id, type, label, placeholder }) => (
              <div key={id} className="space-y-1">
                <label
                  htmlFor={id}
                  className="text-sm font-medium text-zinc-900 dark:text-zinc-200"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  value={formData[id as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full h-10 px-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800 dark:focus:ring-zinc-300"
                />
              </div>
            ))}

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-900 dark:text-zinc-200"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more..."
                rows={4}
                className="w-full px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800 dark:focus:ring-zinc-300"
              />
            </div>

            <button
              type="submit"
              className=" w-full text-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </BackgroundBottom>
  );
}
