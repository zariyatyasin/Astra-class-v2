import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const session = await getToken({
    req,
    secret: process.env.JWT_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  if (pathname.startsWith("/admin")) {
    if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
    if (session.role === "student") {
      return NextResponse.redirect(`http://localhost:3000/student`);
    } else if (session.role === "teacher") {
      return NextResponse.redirect(`http://localhost:3000/teacher`);
    } else if (session.role === "subadmin") {
      return NextResponse.redirect(`http://localhost:3000/subadmin`);
    } else if (session.role === "admin") {
      return NextResponse.redirect(`http://localhost:3000/admin`);
    }
  } else if (pathname.startsWith("/student")) {
    if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
    if (session.role === "admin") {
      return NextResponse.redirect(`http://localhost:3000/admin`);
    } else if (session.role === "teacher") {
      return NextResponse.redirect(`http://localhost:3000/teacher`);
    } else if (session.role === "subadmin") {
      return NextResponse.redirect(`http://localhost:3000/subadmin`);
    } else if (session.role === "admin") {
      return NextResponse.redirect(`http://localhost:3000/admin`);
    }
  } else if (pathname.startsWith("/teacher")) {
    if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
    if (session.role === "admin") {
      return NextResponse.redirect(`http://localhost:3000/admiin`);
    } else if (session.role === "student") {
      return NextResponse.redirect(`http://localhost:3000/student`);
    } else if (session.role === "subadmin") {
      return NextResponse.redirect(`http://localhost:3000/subadmin`);
    } else if (session.role === "admin") {
      return NextResponse.redirect(`http://localhost:3000/admin`);
    }
  } else if (pathname.startsWith("/subadmin")) {
    if (!session) return NextResponse.redirect(`http://localhost:3000/login`);
    if (session.role === "admin") {
      return NextResponse.redirect(`http://localhost:3000/admiin`);
    } else if (session.role === "student") {
      return NextResponse.redirect(`http://localhost:3000/student`);
    } else if (session.role === "teacher") {
      return NextResponse.redirect(`http://localhost:3000/teacher`);
    } else if (session.role === "admin") {
      return NextResponse.redirect(`http://localhost:3000/admin`);
    }
  } else if (pathname.startsWith("/admin")) {
    if (!session || session.role !== "admin") {
      return NextResponse.redirect(`http://localhost:3000/login`);
    } else if (session.role === "student") {
      return NextResponse.redirect(`http://localhost:3000/student`);
    } else if (session.role === "teacher") {
      return NextResponse.redirect(`http://localhost:3000/teacher`);
    } else if (session.role === "subadmin") {
      return NextResponse.redirect(`http://localhost:3000/subadmin`);
    }
  }
}
