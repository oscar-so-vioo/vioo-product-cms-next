"use client"

import React, {useEffect} from "react";
import RootStore from "@stores/rootStore";
import {useSession} from "next-auth/react";
import env from "@configs/envConfig";

const RefreshToken: React.FC = () => {

    const session = useSession();

    useEffect(() => {

        const interval = setInterval(() => session.update(), 1000 * 60 * env.tokenRefreshInterval)

        return () => clearInterval(interval)

    }, [session.update]);

    return <></>
}

export default RefreshToken
