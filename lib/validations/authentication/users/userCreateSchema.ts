import * as Yup from 'yup';
import {AdminPostRecordDtoReq} from "@api/admin/postRecord";

export type UserCreateSchema = {

    [k in keyof AdminPostRecordDtoReq]: any
}

const shape: UserCreateSchema  = {
    email: Yup.string(),
    password: Yup.string(),
    username: Yup.string()
}

export const userCreateSchema = Yup.object(shape)
