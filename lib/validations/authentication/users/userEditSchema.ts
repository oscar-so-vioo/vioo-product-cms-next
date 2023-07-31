import * as Yup from 'yup';
import {AdminPutRecordDtoReq} from "@api/admin/putRecord";

export type UserCreateSchema = {

    [k in keyof AdminPutRecordDtoReq]: any
}

const shape: UserCreateSchema  = {
    id: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
    username: Yup.string()
}

export const userEditSchema = Yup.object(shape)
