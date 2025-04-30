import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "yoursecret";

export async function verifyUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    console.log("Unauthorized: No token found");
    return NextResponse.redirect(
      new URL(
        "/login",
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      )
    );
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    console.log("Unauthorized: Invalid token", err);
    return NextResponse.redirect(
      new URL(
        "/login",
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      )
    );
  }
}
