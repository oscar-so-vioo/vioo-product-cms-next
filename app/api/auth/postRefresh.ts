import {
    AuthPostCmsLoginDtoRes,
    AuthPostRefreshDtoReq,
    AuthPostRefreshDtoRes
} from "@types/api/auth";
import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";


export const postRefresh = async (body: AuthPostRefreshDtoReq): Promise<ResponseEntity<AuthPostRefreshDtoRes>> => {

    return await apiClient.post(
        env.apiHost + '/api/auth/refresh',
        body,
    ) as ResponseEntity<AuthPostCmsLoginDtoRes>
}
