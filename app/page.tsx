"use client"
import {postRefresh} from "@app/api/auth/postRefresh";
import {useEffect} from "react";
import {useSession} from "next-auth/react";

export default function Page(){

    return (
        <>
            <h1>Home</h1>
        </>
    )
}
