"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/studio/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? "Login failed");
        setPending(false);
        return;
      }
      const next = searchParams.get("next");
      router.push(next && next.startsWith("/studio") ? next : "/studio");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <div>
        <label htmlFor="studio-password" className="block text-xs font-medium text-gray-400">
          Password
        </label>
        <input
          id="studio-password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.05] px-3 py-2 text-sm text-white outline-none focus:border-bronze/60"
          required
        />
      </div>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-bronze-gradient px-4 py-2.5 text-sm font-semibold text-black hover:opacity-95 disabled:opacity-50 transition-opacity"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
      <p className="text-center text-xs text-gray-600">
        <Link href="/" className="text-gray-500 hover:text-gray-400">
          ← Home
        </Link>
      </p>
    </form>
  );
}
