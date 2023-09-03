import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { Console } from "console";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, dob, gender } = body;

    let existingEmail = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingEmail) {
      return NextResponse.json({ msg: "Email already taken" }, { status: 409 });
    }
    let hashedPassword = await bcrypt.hash(password, 12);

    let newUser = await prismadb.user.create({
      data: {
        name,
        email,
        hashedPassword,
        emailVerified: new Date(),
        dob: new Date(dob),
        gender,
      },
    });
    return NextResponse.json({ user: newUser }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: "sth went wrong" }, { status: 500 });
  }

}
