import { userModel } from "@/models/user.model";
import { dbConnect } from "@/service/mongo";

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { name, email, password, number, image } = await request.json();
  console.log(name, email, password, number, image);

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = {
    name,
    email,
    number,
    password: hashedPassword,
    image,
  };

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    return new NextResponse(message, { status: 500 });
  }
};
