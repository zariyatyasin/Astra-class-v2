import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { useEffect } from "react";

export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const session = await getToken({
    req,
    secret: process.env.JWT_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  if (pathname.startsWith("/admin")) {
    if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
    if (session.role !== "Admin") return NextResponse.redirect(`${origin}`);
  }
  if (pathname.startsWith("/subadmin")) {
    if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
    if (session.role !== "Subadmin") return NextResponse.redirect(`${origin}`);
  }
  if (pathname.startsWith("/student")) {
    if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
    if (session.role !== "Student") return NextResponse.redirect(`${origin}`);
  }
  if (pathname.startsWith("/teacher")) {
    if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
    if (session.role !== "Teacher") return NextResponse.redirect(`${origin}`);
  }
  // if (pathname.startsWith("/campusfeed")) {
  //   if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
  //   if (session.role !== "teacher") return NextResponse.redirect(`${origin}`);
  // }
}
