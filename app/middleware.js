import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  // Redirect if not logged in
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect dashboard route
};
