"use client"
import * as React from "react"
import { signIn} from "next-auth/react"
import { userAuthSchema } from "@lib/validations/next-auth"
import {SignInResponse} from "next-auth/src/react/types";
import {Button, TextField} from "@mui/material";
import {useFormik} from "formik";
import {AuthPostCmsLoginDtoReq} from "@api/auth/postCmsLogin";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    const formik = useFormik<AuthPostCmsLoginDtoReq>({
        initialValues: {
            email: 'admin@vioo.com.hk',
            password: '123456',
        },
        validationSchema: userAuthSchema,
        onSubmit: async (values) => {
            const signInResult: SignInResponse = await signIn('auth-provider', {
                email: values.email.toLowerCase(),
                password: values.password,
            }) as SignInResponse;
        },
    });

    return (
        <div {...props}>
            <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-2">
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        error={formik.touched.email && !!formik.errors.email}
                        helperText={formik.touched.email && formik.errors.email}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        error={formik.touched.password && !!formik.errors.password}
                        helperText={formik.touched.password && formik.errors.password}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Button fullWidth color="primary" size="large" type="submit" variant="contained">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}
