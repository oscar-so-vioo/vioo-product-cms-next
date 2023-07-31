import * as React from "react";
import {Button, Dialog, DialogContentText, DialogTitle, TextField, TextFieldProps} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {zodResolver} from "@hookform/resolvers/zod";
import {userCreateSchema} from "@lib/validations/authentication/users/userCreateSchema";
import * as z from "zod";
import {ReducerStateWithoutAction, useEffect} from "react";
import {StateSetter} from "@types/index";

interface FormComponentProps {
    ref?: () => void
}

interface FormDialogProps {
    formComponent: React.ComponentType;
    open: boolean
    openDispatch: (action: boolean) => void
    title: string
    content?: string
}


const FormDialog: React.FC<FormDialogProps> = ({formComponent: FormComponent , content, title,  openDispatch, open}) => {

    const submitFormRef = React.useRef(null);

    const handleConfirm = async () => {

        await submitFormRef.current.handleSubmit();

        openDispatch(true)
    }

    const handleCancel = async () => {

        openDispatch(false)
    }

    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {content}
                    </DialogContentText>
                </DialogContent>

                <FormComponent
                    ref={submitFormRef}
                />

                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleConfirm} autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FormDialog
