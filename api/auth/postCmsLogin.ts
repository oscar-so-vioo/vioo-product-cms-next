import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {ResponseEntity} from "@types/index";

export type AuthPostCmsLoginDtoReq = {
    email: string
    password: string
}
export type AuthPostCmsLoginDtoRes = {
    access_token: string
    refresh_token: string
}

export function postCmsLogin(body: AuthPostCmsLoginDtoReq): Promise<ResponseEntity<AuthPostCmsLoginDtoRes>> {

    return apiClient.post(
        env.apiHost + '/api/auth/cms/login',
        {
            ...body
        },
    )
}
