import {Session as NextSession, User as NextUser} from "next-auth/src/core/types";
import {UserRole} from "@constants/enum";

export declare global {
    namespace CustomNext {
        type User = {
            userRole: UserRole
            accessToken: string
            refreshToken: string
        } & NextUser

        type Session = {
            user: User
        } & Omit<NextSession, 'user'>
    }
}
