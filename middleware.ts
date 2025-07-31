import { precompute } from "flags/next";
import { NextRequest, NextResponse } from "next/server";
import { precomputedFlags } from "./lib/flags";

export async function middleware(request: NextRequest) {
  const code = await precompute(precomputedFlags);
  const rewriteUrl = new URL(
    `/${code}${request.nextUrl.pathname}?${request.nextUrl.search}`,
    request.url
  );

  const response = NextResponse.rewrite(rewriteUrl);

  return response;
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
