import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export async function validateCredentials(credentials: Record<"email" | "password", string> | undefined) {
  if (!credentials?.email || !credentials?.password) {
    throw new Error("Invalid credentials");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email
    }
  });

  if (!user || !user?.password) {
    throw new Error("Invalid credentials");
  }

  const isCorrectPassword = await compare(
    credentials.password,
    user.password
  );

  if (!isCorrectPassword) {
    throw new Error("Invalid credentials");
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
}
