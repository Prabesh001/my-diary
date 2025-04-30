import { NextResponse } from "next/server";
import { verifyUser } from "../verification";

export async function GET() {
  const user = verifyUser();
  if (user instanceof NextResponse) return user;

  return NextResponse.json({ message: "Welcome", user });
}
