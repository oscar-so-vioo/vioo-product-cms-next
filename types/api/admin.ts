import {UserRole} from "@constants/enum";

export type AdminGetRecordDtoReq = {
    id: string
}

export type AdminInfo = {
    id: string
    username: string
    email: string
    userRole: UserRole
}
export type AdminGetRecordDtoRes = {
    record: AdminInfo
}
export type AdminGetRecordsDtoReq = {
}
export type AdminGetRecordsDtoRes = {
    records: AdminInfo[]
}
export type AdminDeleteRecordDtoReq = {
    id: string
}

export type AdminDeleteRecordDtoRes = {
}

export type AdminPutRecordDtoReq = {

    id: string
    email: string
    username: string
    password: string
}


export type AdminPutRecordDtoRes = {

}

export type AdminPostRecordDtoReq = {

    email: string
    username: string
    password: string
}

export type AdminPostRecordDtoRes = {
}
