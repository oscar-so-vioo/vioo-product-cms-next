import {User} from "next-auth/core/types";

declare module "@types/react" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface GlobalJSXElement {
        user: GlobalJSXElement
    }
}
