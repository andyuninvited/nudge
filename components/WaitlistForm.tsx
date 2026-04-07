"use client";

import { useState, type FormEvent } from "react";

type WaitlistFormProps = {
  variant?: "hero" | "bottom";
};

export default function WaitlistForm({ variant = "bottom" }: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className="text-2xl font-bold text-mint mb-2">You&apos;re in.</p>
        <p className="text-muted">We&apos;ll nudge you when it&apos;s ready.</p>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-muted focus:outline-none focus:border-mint transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-lg bg-amber font-semibold text-black hover:bg-amber/90 transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Get Founding Access"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-muted focus:outline-none focus:border-mint transition-colors"
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-muted focus:outline-none focus:border-mint transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 rounded-lg bg-amber font-semibold text-black hover:bg-amber/90 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Grab a Founding Spot"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>
      )}
      <p className="text-muted text-sm text-center">
        30-day money back. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
