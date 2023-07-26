"use client"
import {ACCESS_TOKEN, LANGUAGE, REFRESH_TOKEN} from "@constants/types";
import {SEARCH, UPLOAD} from "@constants/values";
import {getSession} from "next-auth/react";

export type LanguageType = string;
export type TokenType = string | null;

export interface Tokens {
    accessToken: TokenType;
    refreshToken: TokenType;
}

export interface Params {
    [key: string]: any;
}

export interface Headers {
    headers: {
        Authorization: string;
        'content-type'?: string;
    };
    params?: Params;
}

export interface UploadHeaders {
    headers: {
        Authorization: string;
        'content-type': string;
    };
}
export const storeLanguage = (language: LanguageType): void => {
    window.localStorage.setItem(LANGUAGE, language)
}

export const getLanguage = (): LanguageType | null => {
    if (typeof window !== "undefined") {
        const language: LanguageType = window.localStorage.getItem(LANGUAGE) as LanguageType;
        return language
    }
    return null
}

export const storeTokens = (tokens: Tokens): void => {

    if (typeof window !== "undefined") {
        window.localStorage.setItem(ACCESS_TOKEN, tokens.accessToken as string)
        window.localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken as string)
    }
}

export const removeTokens = (): void => {
    if (typeof window !== "undefined") {
        window.localStorage.removeItem(ACCESS_TOKEN)
        window.localStorage.removeItem(REFRESH_TOKEN)
    }
}

export const getTokens = (): Tokens => {
    if (typeof window !== "undefined") {
        const accessToken: TokenType = window.localStorage.getItem(ACCESS_TOKEN);
        const refreshToken: TokenType = window.localStorage.getItem(REFRESH_TOKEN);
        return {
            accessToken,
            refreshToken
        }
    }
    return {
        accessToken: null,
        refreshToken: null
    }
}

export const getAccessTokenAuthorization = async (): Promise<string> => {

    const s = await getSession()

    return `Bearer ${s?.user.token.accessToken}`
}
export const getRefreshTokenAuthorization = async (): Promise<string> => {

    const s = await getSession()

    return `Bearer ${s?.user.token.refreshToken}`
}
export const getBearerToken = (t: string): string => {
    return `Bearer ${t}`
}
