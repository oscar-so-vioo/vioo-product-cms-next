import {fetchData} from "@app/api/common";

export type ICommonInfo = {
  isShowDrawer?: boolean,
  defstyle?: boolean,
  showDrawer?: boolean
}

type Data = {
  message?: string,
  params?: any
}

export interface ICommonStore {
  commonInfo: ICommonInfo
  data: Data
  // eslint-disable-next-line no-unused-vars
  setCommonInfo: (value: ICommonInfo) => void
  fetchData: (params: any) => void
}

const commonStore = (): ICommonStore => {
  return {
    commonInfo: {},
    data: {},
    setCommonInfo: function (value) {
      this.commonInfo = value
    },
    fetchData: async function (params) {
      const _data = await fetchData(params)
      console.log(_data)
      this.data = _data
    }
  }
}

export default commonStore
