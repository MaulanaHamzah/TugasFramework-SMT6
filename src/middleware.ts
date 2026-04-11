import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

const middleware = (request: NextRequest, event: NextFetchEvent) => {
  return NextResponse.next();
};

export default withAuth(middleware, ["/profile"]);

export const config = {
  matcher: ["/profile"],
};