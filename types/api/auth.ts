export type AuthPostCmsLoginDtoReq = {
    email: string
    password: string
}
export type AuthPostCmsLoginDtoRes = {
    access_token: string
    refresh_token: string
}
export type AuthPostRefreshDtoReq = {
    refresh_token: string
}
export type AuthPostRefreshDtoRes = {
    access_token: string
    refresh_token: string
}
