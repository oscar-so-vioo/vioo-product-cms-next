import { JWT } from "next-auth/jwt"
import {AdminInfo} from "@types/api/admin";
import { User, Session } from "next-auth/core/types"
import {Tokens} from "@utils/authUtil";

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        user: User
    }
}

declare module "next-auth/core/types" {

    interface Session {
        user: User
    }

    type User = {
        info: AdminInfo,
        token: Tokens
    }
}
