import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization} from "@utils/authUtil";
import {ResponseEntity} from "@types/index";
export type AdminDeleteRecordDtoReq = {
    id: string
}

export type AdminDeleteRecordDtoRes = {
}



export async function deleteRecord(query: AdminDeleteRecordDtoReq): Promise<ResponseEntity<AdminDeleteRecordDtoRes>> {

    return await apiClient.delete(
        env.apiHost + '/api/admin/cms/record',
        {
            params: query,
            headers: buildHeaders({
                'Authorization': await getAccessTokenAuthorization()
            })
        }
    ) as ResponseEntity<AdminDeleteRecordDtoRes>
}
