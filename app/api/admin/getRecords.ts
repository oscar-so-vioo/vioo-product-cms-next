import {
    AdminGetRecordsDtoReq,
    AdminGetRecordsDtoRes, AdminPostRecordDtoRes
} from "@types/api/admin";
import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization} from "@utils/authUtil";

export async function getRecords(query: AdminGetRecordsDtoReq): Promise<ResponseEntity<AdminGetRecordsDtoRes>> {

    return await apiClient.get(
        env.apiHost + '/api/admin/cms/records',
        {
            params: query,
            headers: buildHeaders({
                'Authorization': await getAccessTokenAuthorization()
            })
        }
    ) as ResponseEntity<AdminGetRecordsDtoRes>
}
