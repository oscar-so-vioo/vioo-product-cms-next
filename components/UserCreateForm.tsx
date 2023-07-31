"use client"
import * as React from "react"
import {TextField} from "@mui/material";
import {useFormik} from "formik";
import {AdminPostRecordDtoReq, postRecord} from "@api/admin/postRecord";
import {userCreateSchema} from "@lib/validations/authentication/users/userCreateSchema";
import {forwardRef, useEffect, useImperativeHandle} from "react";

export type UserCreateFormProps = {

}

const UserCreateForm = forwardRef((obj: UserCreateFormProps, ref)=> {

    const formik = useFormik<AdminPostRecordDtoReq>({
        initialValues: {
            email: 'admin2@vioo.com.hk',
            password: '123456',
            username: 'admin2'
        },
        validationSchema: userCreateSchema,
        onSubmit: async (values) => {

            return await postRecord(values)
        },
    });

    useImperativeHandle(ref, () => ({
        handleSubmit() {
            return formik.submitForm();
        }
    }));
    return (
        <form onSubmit={formik.handleSubmit}>

            <TextField
                name="username"
                label="User Name"
                variant="outlined"
                error={formik.touched.username && !!formik.errors.username}
                helperText={formik.touched.username && formik.errors.username}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

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
        </form>
    )
})
export default UserCreateForm
