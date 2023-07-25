"use client"

import { NextAuthOptions } from "next-auth"
import {AuthProvider} from "../providers/authProvider";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: "/login",
  },
  providers: [
      AuthProvider
  ],
  callbacks: {
    async session({ token, user, session }) {

      if (token.user) {

        session.user = token.user
      }

      return session
    },
    async jwt({ token, user, session, account }) {

      if(user){

        token.user = user

      }

      return token
    },

  },
}
