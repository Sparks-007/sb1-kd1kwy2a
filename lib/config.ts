import { NextAuthOptions } from "next-auth";
import { providers } from "./providers";

export const authOptions: NextAuthOptions = {
  providers,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
