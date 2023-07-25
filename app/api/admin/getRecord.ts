import {
    AdminGetRecordDtoReq,
    AdminGetRecordDtoRes
} from "@types/api/admin";
import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization, getBearerToken} from "@utils/authUtil";

export function getRecord(query: AdminGetRecordDtoReq, token?: string): Promise<ResponseEntity<AdminGetRecordDtoRes>> {

    return apiClient.get(
        env.apiHost + '/api/admin/cms/record',
        {
            params: query,
            headers: buildHeaders({
                'Authorization': token? getBearerToken(token): getAccessTokenAuthorization()
            })
        }
    )
}
