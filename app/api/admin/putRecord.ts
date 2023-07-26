import {ResponseEntity} from "@types/index";
import apiClient from "@lib/apiClient";
import env from "@configs/envConfig";
import {buildHeaders} from "@utils/headerUtil";
import {getAccessTokenAuthorization} from "@utils/authUtil";
import {AdminPutRecordDtoReq, AdminPutRecordDtoRes} from "@types/api/admin";

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
