import * as Yup from "yup"
import {AuthPostCmsLoginDtoReq} from "@api/auth/postCmsLogin";


export type UserAuthSchema = {

  [k in keyof AuthPostCmsLoginDtoReq]: any
}
const shape: UserAuthSchema  = {
  email: Yup.string(),
  password: Yup.string(),
}

export const userAuthSchema = Yup.object(shape)
