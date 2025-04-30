import Users from "@/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "../connectToDb";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    await connectToDatabase();

    const existingUser = await Users.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = new Users({
      fullName: body.fullName,
      email: body.email,
      password: hashedPassword,
    });

    await user.save();

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
