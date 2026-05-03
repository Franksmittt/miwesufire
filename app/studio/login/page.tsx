import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export default function StudioLoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-16 sm:py-24">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-bronze">Miwesu studio</p>
      <h1 className="mt-2 text-xl font-bold text-white">Login</h1>
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        Enter the studio password to open the social ad generators and hub.
      </p>
      <Suspense
        fallback={
          <div className="mt-8 h-32 animate-pulse rounded-lg bg-white/[0.05]" aria-hidden />
        }
      >
        <LoginForm />
      </Suspense>
    </main>
  );
}
