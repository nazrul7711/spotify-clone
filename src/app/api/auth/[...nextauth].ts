import NextAuth from "next-auth"
import {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {PrismaAdapter} from "@next-auth/prisma-adapter"

export const authOptions :NextAuthOptions = {
  providers:[
    GithubProvider({
      clientId:process.env.GITHUB_ID!,
      clientSecret:process.env.GITHUB_SECRET!
    }),
  ],
  // adapter:PrismaAdapter()

}

export default NextAuth(authOptions)