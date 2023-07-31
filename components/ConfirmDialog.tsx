import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect} from "react";

export interface ConfirmDialogProps {
    title: string
    content: string
    open: boolean
    onConfirm: (...obj: any) => void
}

interface DialogData {
    open: boolean;
    title: string;
    content: string;
}

const ConfirmDialog: React.FC = ({props}: {props: ConfirmDialogProps}) => {

    const initialState: DialogData = {
        content: "",
        title: "",
        open: false,
    }

    const [dialogData, setDialogData] = React.useState<DialogData>(initialState);

    useEffect(() => {

        setDialogData({
            title: props.title,
            content: props.content,
            open: props.open
        });

    }, [props]);


    const handleClose = React.useCallback((agreed: boolean) => {

        if (agreed) {

            props.onConfirm()
        }

        setDialogData(initialState);

    }, [props]);

    return (
        <div>
            <Dialog
                open={dialogData.open}
                onClose={() => handleClose(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{dialogData.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{dialogData.content}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(false)}>Cancel</Button>
                    <Button onClick={() => handleClose(true)} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ConfirmDialog;
