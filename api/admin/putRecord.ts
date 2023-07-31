import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization} from "@utils/authUtil";
export type AdminPutRecordDtoReq = {

    id: string
    email: string
    username: string
    password: string
}


export type AdminPutRecordDtoRes = {

}

export async function putRecord(body: AdminPutRecordDtoReq): Promise<ResponseEntity<AdminPutRecordDtoRes>> {

    return await apiClient.put(
        env.apiHost + '/api/admin/cms/record',
        body,
        {
            headers: buildHeaders({
                'Authorization': await getAccessTokenAuthorization()
            })
        }
    ) as ResponseEntity<AdminPutRecordDtoRes>
}
