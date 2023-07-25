import {postCmsLogin} from "@app/api/auth/postCmsLogin";
import {AuthPostCmsLoginDtoReq} from "@types/api/auth";
import Credentials from "next-auth/providers/credentials";
import {getRecord} from "@app/api/admin/getRecord";
import {JWTPayload, UserInfo} from "@types/index";
import jwtDecode from "jwt-decode";
import {storeTokens} from "@utils/authUtil";
import {User} from "next-auth/core/types";

export const AuthProvider = Credentials({
    id: "auth-provider",
    name: "CMS Authentication",
    credentials: {
        email: { label: "Email", type: "text", placeholder: "" },
        password: {  label: "Password", type: "password" }
    },
    authorize: async (credentials: any): Promise<User>=> {
        const { email, password } = credentials;

        try {
            const response = await postCmsLogin({ email, password } as AuthPostCmsLoginDtoReq);

            if (response.data.access_token) {

                const payload: JWTPayload = jwtDecode(response.data.access_token)

                storeTokens({
                    accessToken: response.data.access_token,
                    refreshToken: response.data.refresh_token
                })

                const res = await getRecord({id: payload.userId}, response.data.access_token)

                const user: User = {
                    info: {
                        id: res.data.record.id,
                        username: res.data.record.username,
                        email: res.data.record.email,
                        userRole: res.data.record.userRole,
                    },
                    token: {
                        accessToken: response.data.access_token,
                        refreshToken: response.data.refresh_token,
                    }
                };

                return user;
            } else {
                throw new Error("Authorization failed");
            }
        } catch (e) {
            throw new Error(e);
        }
    }
});
