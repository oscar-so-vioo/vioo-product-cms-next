import {
    AdminPostRecordDtoReq,
    AdminPostRecordDtoRes
} from "@types/api/admin";
import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization} from "@utils/authUtil";

export function postRecord(body: AdminPostRecordDtoReq): Promise<ResponseEntity<AdminPostRecordDtoRes>> {

    return apiClient.post(
        env.apiHost + '/api/admin/cms/record',
        body,
        {
            headers: buildHeaders({
                'Authorization': getAccessTokenAuthorization()
            })
        }
    )
}
