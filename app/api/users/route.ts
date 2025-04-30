import { NextResponse } from "next/server";
import { connectToDatabase } from "../connectToDb";
import Users from "@/models/Users";

export async function GET() {
  try {
    await connectToDatabase();
    const users = await Users.find();
    if (!users) {
      return NextResponse.json({ error: "No users found" }, { status: 404 });
    }
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
