import { NextAuthOptions } from "next-auth"
import {AuthProvider} from "../providers/authProvider";
import env from "@configs/envConfig";
import {postRefresh} from "@app/../api/auth/postRefresh";

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
    async jwt({ token, user, session, account, trigger }) {

      if(trigger === "update"){

        const res = await postRefresh({refresh_token: token.user.token.refreshToken!})

        token.user.token.refreshToken = res.data.refresh_token
        token.user.token.accessToken = res.data.access_token
      }

      if(user){

        token.user = user

      }

      return token
    },

  },
}
