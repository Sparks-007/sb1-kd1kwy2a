import CredentialsProvider from "next-auth/providers/credentials";
import { validateCredentials } from "./validate-credentials";

export const providers = [
  CredentialsProvider({
    name: "credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" }
    },
    authorize: validateCredentials
  })
];
