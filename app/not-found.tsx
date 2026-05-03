import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-2 text-sm text-gray-400">That page does not exist or was moved.</p>
      <Link href="/" className="mt-8 text-sm font-semibold text-bronze hover:underline">
        Back to home
      </Link>
    </main>
  );
}
