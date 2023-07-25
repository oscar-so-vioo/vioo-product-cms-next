export type AuthPostCmsLoginDtoReq = {
    email: string
    password: string
}
export type AuthPostCmsLoginDtoRes = {
    access_token: string
    refresh_token: string
}
