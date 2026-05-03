import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { STUDIO_SESSION_COOKIE } from "@/lib/studio-auth";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/studio/login" || pathname.startsWith("/studio/login/")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/studio")) {
    if (request.cookies.get(STUDIO_SESSION_COOKIE)?.value === "1") {
      return NextResponse.next();
    }
    const url = request.nextUrl.clone();
    url.pathname = "/studio/login";
    url.searchParams.set("next", pathname + (search || ""));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio", "/studio/:path*"],
};
