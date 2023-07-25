import {makeAutoObservable} from "mobx";
import UserStore from "@stores/userStore";
import AuthStore from "@stores/authStore";
import {Store} from "@mui/x-data-grid/utils/Store";

class RootStore {
  userStore: UserStore;
  authStore: AuthStore;

  constructor() {
    makeAutoObservable(this);

    this.userStore = new UserStore(this);
    this.authStore = new AuthStore(this);
  }
}

export default RootStore;

export function initializeStore(initialState: any = null): RootStore {
  const _store = new RootStore()

  if (initialState) {
    for (let prop in initialState) {
      if (_store.hasOwnProperty(prop)) {
        _store[prop] = initialState[prop]
      }
    }
  }
  return _store
}
