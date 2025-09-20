import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();
  await connect();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create user", { status: 500 });
  }
};
