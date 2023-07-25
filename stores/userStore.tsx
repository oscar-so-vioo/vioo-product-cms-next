import {action, makeObservable, observable} from "mobx";
import RootStore from "@stores/rootStore";
import {UserInfo} from "@types/index";


export interface IUserStore {
  userInfo: UserInfo;
  setUserInfo: (value: UserInfo) => void;
}

class UserStore implements IUserStore {
  rootStore: RootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @observable
  userInfo: UserInfo = null;

  @action
  setUserInfo(value: UserInfo) {
    this.userInfo = value;
  }

}

export default UserStore;
