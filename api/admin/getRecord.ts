import {
    AdminInfo
} from "@types/api/admin";

import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization, getBearerToken} from "@utils/authUtil";

export type AdminGetRecordDtoRes = {
    record: AdminInfo
}

export type AdminGetRecordDtoReq = {
    id: string
}

export async function getRecord(query: AdminGetRecordDtoReq, token?: string): Promise<ResponseEntity<AdminGetRecordDtoRes>> {

    if (typeof window == "undefined" && !token) {

        throw new Error("Token is not provided")

    }

    return await apiClient.get(
        env.apiHost + '/api/admin/cms/record',
        {
            params: query,
            headers: buildHeaders({
                'Authorization': token ? getBearerToken(token!) : await getAccessTokenAuthorization()
            })
        }
    ) as ResponseEntity<AdminGetRecordDtoRes>
}
