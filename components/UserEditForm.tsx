"use client"
import * as React from "react"
import {TextField} from "@mui/material";
import {useFormik} from "formik";
import {AdminPutRecordDtoReq, putRecord} from "@api/admin/putRecord";
import {StateSetter} from "@types/index";
import {forwardRef, useContext, useEffect, useImperativeHandle} from "react";
import {userEditSchema} from "@lib/validations/authentication/users/userEditSchema";
import {UserEditContext} from "@app/(dashboard)/authentication/users/page";

export type UserEdit = Omit<AdminPutRecordDtoReq, 'password'>

export type UserEditFormProps = {

}

const UserEditForm = forwardRef((obj: UserEditFormProps, ref)=> {

    const userEditContext = useContext(UserEditContext);

    const initialValues = userEditContext?.user
        ? {
            id: userEditContext.user.id,
            email: userEditContext.user.email,
            password: '',
            username: userEditContext.user.username
        }
        : {
            id: '',
            email: '',
            password: '',
            username: ''
        };

    const formik = useFormik<AdminPutRecordDtoReq>({
        initialValues,
        validationSchema: userEditSchema,
        onSubmit: async (values) => {

            return await putRecord(values)
        },
    });

    useImperativeHandle(ref, () => ({
        async handleSubmit() {

            return formik.submitForm();
        }
    }));

    return (
        <form onSubmit={formik.handleSubmit}>

            <TextField
                name="id"
                label="ID"
                variant="outlined"
                disabled={true}
                error={formik.touched.id && !!formik.errors.id}
                helperText={formik.touched.id && formik.errors.id}
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

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
export default UserEditForm
