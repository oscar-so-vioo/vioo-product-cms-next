"use client"
import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn} from "next-auth/react"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"

import { userAuthSchema } from "@lib/validations/auth"
import {SignInResponse} from "next-auth/src/react/types";
import {Button, TextField} from "@mui/material";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(userAuthSchema),
    })

    async function onSubmit(data: FormData) {

        const signInResult: SignInResponse = await signIn("auth-provider", {
            email: data.email.toLowerCase(),
            password: data.password,
        }) as SignInResponse
    }

    return (
        <div {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    {/*<Controller*/}
                    {/*    name="email"*/}
                    {/*    control={control}*/}
                    {/*    defaultValue='admin@vioo.com.hk'*/}
                    {/*    render={({ field }) => (*/}
                    {/*        <TextField*/}
                    {/*            {...field}*/}
                    {/*            label="Email"*/}
                    {/*            variant="outlined"*/}
                    {/*            error={!!errors.email}*/}
                    {/*            helperText={errors.email && errors.email.message}*/}
                    {/*        />*/}
                    {/*    )}*/}
                    {/*/>*/}
                    {/*<Controller*/}
                    {/*    name="password"*/}
                    {/*    control={control}*/}
                    {/*    defaultValue="123456"*/}
                    {/*    render={({ field }) => (*/}
                    {/*        <TextField*/}
                    {/*            {...field}*/}
                    {/*            label="Password"*/}
                    {/*            type="password"*/}
                    {/*            variant="outlined"*/}
                    {/*            error={!!errors.password}*/}
                    {/*            helperText={errors.password && errors.password.message}*/}
                    {/*        />*/}
                    {/*    )}*/}
                    {/*/>*/}

                    <Button fullWidth color="primary" size="large" type="submit" variant="contained">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}
