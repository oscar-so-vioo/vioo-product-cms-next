"use client";

import {SessionProvider, useSession} from "next-auth/react";
import {Provider} from "mobx-react";
import {initializeStore} from "@stores/rootStore";

type Props = {
    children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export const StoreProvider = ({ children }: Props) => {
    return <Provider rootStore={initializeStore()}>{children}</Provider>;
};
