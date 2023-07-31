import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";

export type AuthPostRefreshDtoReq = {
    refresh_token: string
}
export type AuthPostRefreshDtoRes = {
    access_token: string
    refresh_token: string
}

export const postRefresh = async (body: AuthPostRefreshDtoReq): Promise<ResponseEntity<AuthPostRefreshDtoRes>> => {

    return await apiClient.post(
        env.apiHost + '/api/auth/refresh',
        body,
    ) as ResponseEntity<AuthPostRefreshDtoRes>
}
