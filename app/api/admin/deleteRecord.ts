import {AdminDeleteRecordDtoReq, AdminDeleteRecordDtoRes} from "@types/api/admin";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization} from "@utils/authUtil";
import {ResponseEntity} from "@types/index";

export function deleteRecord(query: AdminDeleteRecordDtoReq): Promise<ResponseEntity<AdminDeleteRecordDtoRes>> {

    return apiClient.delete(
        env.apiHost + '/api/admin/cms/record',
        {
            params: query,
            headers: buildHeaders({
                'Authorization': getAccessTokenAuthorization()
            })
        }
    )
}
