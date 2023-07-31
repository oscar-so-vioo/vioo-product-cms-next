import {UserRole} from "@constants/enum";

export type AdminInfo = {
    id: string
    username: string
    email: string
    userRole: UserRole
}
