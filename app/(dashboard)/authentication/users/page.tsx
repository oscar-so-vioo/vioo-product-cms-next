"use client"

import React, {
    useState,
    useEffect,
    useReducer,
    Reducer,
    ReducerState,
    ReducerStateWithoutAction,
    useContext
} from 'react';
import {AdminInfo} from "@types/api/admin";
import {Button} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import ConfirmDialog, {ConfirmDialogProps} from "@components/ConfirmDialog";
import FormDialog from "@components/FormDialog";
import {getRecords} from "@api/admin/getRecords";
import {deleteRecord} from "@api/admin/deleteRecord";
import UserCreateForm from "@components/UserCreateForm";
import UserEditForm, {UserEdit} from "@components/UserEditForm";

function confirmDeleteDialogReducer (state: ConfirmDialogProps, action: ConfirmDialogProps) {

    return action
}

const confirmDeleteDialogInitialState: ConfirmDialogProps = {
    open: false,
    content: "",
    onConfirm(obj: any): void {},
    title: ""
}

export const UserEditContext = React.createContext<{user: UserEdit} | null>(null);

const Users: React.FC = () => {

    const [userEditContext, setUserEditContext] = useState<{user: UserEdit}>(null);

    const [state, setState] = useState<{ columns: any[], rows: AdminInfo[] }>({
        columns: [],
        rows: []
    });

    const fetchData = async () => {
        const res = await getRecords({})

        setState({
            columns: [
                {field: 'id', headerName: 'ID', width: 350},
                {field: 'username', headerName: 'User Name', width: 130},
                {field: 'email', headerName: 'Email', width: 250},
                {field: 'userRole', headerName: 'Role', width: 130},
                {
                    field: 'action',
                    headerName: 'Actions',
                    width: 250,
                    renderCell: (params) => (
                        <strong>
                            <Button
                                variant="text"
                                color="inherit"
                                size="small"
                                style={{ marginRight: 16 }}
                                onClick={() => { handleEdit(params.row); }}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="text"
                                color="inherit"
                                size="small"
                                style={{ marginRight: 16 }}
                                onClick={() => { handleDelete(params.row); }}
                            >
                                Delete
                            </Button>
                        </strong>
                    ),
                },
            ],
            rows: res.data.records
        });
    }

    const [confirmDeleteDialogState, confirmDeleteDialogDispatch] = useReducer(confirmDeleteDialogReducer, confirmDeleteDialogInitialState as ReducerState<ConfirmDialogProps>);

    const openCreateReducer = (state: boolean, action?: boolean) => {

        if(state && action){

            fetchData()
        }
        return !state
    }

    const [openCreateState, openCreateDispatch] = React.useReducer(openCreateReducer, false as ReducerStateWithoutAction<boolean>);


    const openEditReducer = (state: boolean, action?: boolean) => {

        if(state && action){

            fetchData()
        }
        return !state
    }

    const [openEditState, openEditDispatch] = React.useReducer(openEditReducer, false as ReducerStateWithoutAction<boolean>);

    useEffect(() => {

        fetchData();

    }, [openCreateState, confirmDeleteDialogState]);

    const handleDelete = async (row: AdminInfo) => {

        confirmDeleteDialogDispatch({
            title: "Confirm Delete",
            content: "Are you sure you want to delete the user?",
            onConfirm: async () => {

                await deleteRecord({id: row.id})

                await fetchData()
            },
            open: true,
        })
    }

    const handleEdit = async (row: AdminInfo) => {

        setUserEditContext({
            user: {
                id: row.id,
                username: row.username,
                email: row.email
            }
        })

        openEditDispatch()

    }

    const handleCreate = async () => {

        openCreateDispatch()
    }

    return (
        <>
            <Button
                onClick={handleCreate}
            >
                Create User
            </Button>

            <DataGrid
                rows={state.rows}
                columns={state.columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 10},
                    },
                }}
                pageSizeOptions={[5, 10]}
            />

            <FormDialog
                formComponent={UserCreateForm}
                open={openCreateState}
                openDispatch={openCreateDispatch}
                title={"Create User"}
            ></FormDialog>

            <UserEditContext.Provider value={userEditContext}>
                <FormDialog
                    formComponent={UserEditForm}
                    open={openEditState}
                    openDispatch={openEditDispatch}
                    title={"Edit User"}
                >
                </FormDialog>
            </UserEditContext.Provider>

            <ConfirmDialog props={confirmDeleteDialogState}></ConfirmDialog>
        </>
    );
}

export default Users;
