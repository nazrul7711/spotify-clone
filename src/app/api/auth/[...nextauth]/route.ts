import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import githubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
  providers: [
    githubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Credentials({
      name: "credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let existingEmail = await prismadb.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!existingEmail) {
          throw new Error("The user is not present in our record");
        }
        if (!existingEmail || !existingEmail.hashedPassword) {
          throw new Error("No user with this email or password is missing");
        }
        let ifPasswordMatch = await bcrypt.compare(
          credentials?.password!,
          existingEmail?.hashedPassword
        );

        if(!ifPasswordMatch){
          throw new Error("Password does not match")
        }
        return existingEmail
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signIn",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
