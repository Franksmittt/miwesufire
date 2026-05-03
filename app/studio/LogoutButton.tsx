"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    try {
      await fetch("/api/studio/logout", { method: "POST" });
      router.push("/studio/login");
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={pending}
      className="text-xs text-gray-500 hover:text-gray-300 disabled:opacity-50 transition-colors"
    >
      {pending ? "Signing out…" : "Sign out"}
    </button>
  );
}
