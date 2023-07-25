import envConfig from "@configs/envConfig";
import axios from "axios";

const apiClient = axios.create({
  baseURL: envConfig.baseURL,
  timeout: 5000
})

apiClient.interceptors.response.use(
  response => {
    return response.data
  },
  error => {

    if (!error.response) {
      console.log(envConfig.baseURL)
      throw 'Error: Network Error'
    } else {

      throw error.response.data.message
    }
  }
)

export default apiClient
