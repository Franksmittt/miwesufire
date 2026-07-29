import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="mt-2 text-sm text-muted">That page does not exist or was moved.</p>
      <Link href="/" className="mt-8 text-sm font-semibold text-ember hover:underline">
        Back to home
      </Link>
    </main>
  );
}
