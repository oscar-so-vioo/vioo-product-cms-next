import apiClient from "@lib/apiClient";
import {getHeaders} from "@utils/commonUtil";
import {fetchData as fetchPath} from "@configs/pathConfig";


export const fetchData = (params = {}) => {
  const headers = getHeaders({ params })
  return apiClient.get(
      fetchPath(),
    headers
  )
}
