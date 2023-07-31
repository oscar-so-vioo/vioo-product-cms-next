import {
     AdminInfo
} from "@types/api/admin";
import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization} from "@utils/authUtil";

export type AdminGetRecordsDtoReq = {
}

export type AdminGetRecordsDtoRes = {
    records: AdminInfo[]
}


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
