import {AuthPostCmsLoginDtoReq} from "@types/api/auth";
import RootStore from "@stores/rootStore";
import {action, makeObservable} from "mobx";
import {postCmsLogin} from "@app/api/auth/postCmsLogin";
import jwtDecode from "jwt-decode";
import {getRecord} from "@app/api/admin/getRecord";
import {getTokens, storeTokens} from "@utils/authUtil";
import {JWTPayload} from "@types/index";

export interface IAuthStore {

    login: (obj: AuthPostCmsLoginDtoReq) => void;
    isLogin: () => boolean;
}

class AuthStore implements IAuthStore {

    rootStore: RootStore;

    constructor(rootStore) {
        this.rootStore = rootStore;

        makeObservable(this);
    }

    @action
    async login(obj: AuthPostCmsLoginDtoReq){

        const res = await postCmsLogin(obj)

        const payload: JWTPayload = jwtDecode(res.data.access_token)

        storeTokens({accessToken: res.data.access_token, refreshToken: res.data.refresh_token})

        const res2 = await getRecord({id: payload.userId})

        this.rootStore.userStore.setUserInfo(res2.data.record)
    }

    isLogin(): boolean{

        const t = getTokens()

        console.log(t.accessToken)

        return t.accessToken != null
    }
}

export default AuthStore;
