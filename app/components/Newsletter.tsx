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
        className="flex-1 px-4 py-3 rounded-xl border border-[#cbd5cb] bg-[#faf8f5] text-zinc-800 text-sm focus:outline-none focus:border-[#6b7a6b]"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-[#6b7a6b] hover:bg-[#5a6b5a] text-white font-semibold rounded-xl text-sm transition-all cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
}
