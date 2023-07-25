import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {AuthPostCmsLoginDtoReq, AuthPostCmsLoginDtoRes} from "@types/api/auth";
import {ResponseEntity} from "@types/index";

export function postCmsLogin(body: AuthPostCmsLoginDtoReq): Promise<ResponseEntity<AuthPostCmsLoginDtoRes>> {

    return apiClient.post(
        env.apiHost + '/api/auth/cms/login',
        {
            ...body
        },
    )
}
