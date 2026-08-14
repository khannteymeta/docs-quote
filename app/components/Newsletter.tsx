"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for signing up with: ${email}`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded-full border border-[rgba(0,31,92,0.2)] bg-white text-[#001f5c] text-sm focus:outline-none focus:border-[#001f5c]"
      />
      <button
        type="submit"
        className="px-8 py-3 bg-[#001f5c] hover:bg-[#FFCC00] text-[#FFCC00] hover:text-[#001f5c] font-bold rounded-full text-sm transition-all shadow-[0_4px_15px_rgba(0,31,92,0.2)] hover:-translate-y-0.5 cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
}
