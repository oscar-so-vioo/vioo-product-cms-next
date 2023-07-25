"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import {getSession, signIn, useSession} from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { userAuthSchema } from "@lib/validations/auth"
import {Label} from "@mui/icons-material";
import {SignInResponse} from "next-auth/src/react/types";
import {useRouter} from "next/navigation";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    const session = useSession()
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(userAuthSchema),
    })
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const searchParams = useSearchParams()

    async function onSubmit(data: FormData) {
        setIsLoading(true)

        const signInResult: SignInResponse = await signIn("auth-provider", {
            email: data.email.toLowerCase(),
            password: data.password,
            redirect: false,
            callbackUrl: searchParams?.get("from") || "/dashboard",
        }) as SignInResponse
        console.log('jwt')

        setIsLoading(false)

        // 檢查 signIn 是否成功
        if (signInResult.ok) {

            console.log('OK')
            router.push('/dashboard')
        } else {

            console.log('Failed')

        }
    }

    return (
        <div {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <input
                        {...register("email")}  // 這行把 'email' 字段與 form 狀態連接起來
                        placeholder="name@example.com"
                        type="email"
                        defaultValue={'admin@vioo.com.hk'}
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                    />
                    <input
                        {...register("password")}  // 這行把 'password' 字段與 form 狀態連接起來
                        type="password"
                        defaultValue={'123456'}
                        autoCorrect="off"
                        disabled={isLoading}
                    />
                    <button>
                        Sign In with Email
                    </button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
                </div>
            </div>
        </div>
    )
}
