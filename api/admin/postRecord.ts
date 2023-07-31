import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization} from "@utils/authUtil";
export type AdminPostRecordDtoReq = {

    email: string
    username: string
    password: string
}

export type AdminPostRecordDtoRes = {
}

export async function postRecord(body: AdminPostRecordDtoReq): Promise<ResponseEntity<AdminPostRecordDtoRes>> {


    return await apiClient.post(
        env.apiHost + '/api/admin/cms/record',
        body,
        {
            headers: buildHeaders({
                'Authorization': await getAccessTokenAuthorization()
            })
        }
    ) as ResponseEntity<AdminPostRecordDtoRes>
}
