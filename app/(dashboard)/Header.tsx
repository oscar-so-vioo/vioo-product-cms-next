"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import Box from "@mui/material/Box";

const lightColor = 'rgba(255, 255, 255, 0.7)';

export type HeaderTab = {

    label: string
    path: string
}


export type HeaderProps = {

    header: string
    tabs: HeaderTab[]
}


export default function Header({props, children}: { props: HeaderProps, children: React.ReactNode}){

    return (
        <>
            <React.Fragment>
                <AppBar
                    component="div"
                    color="primary"
                    position="static"
                    elevation={0}
                    sx={{ zIndex: 0 }}
                >
                    <Toolbar>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item xs>
                                <Typography color="inherit" variant="h5" component="h1">
                                    {props.header}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {/*PlaceHolder*/}

                                {/*<Button*/}
                                {/*    sx={{ borderColor: lightColor }}*/}
                                {/*    variant="outlined"*/}
                                {/*    color="inherit"*/}
                                {/*    size="small"*/}
                                {/*>*/}
                                {/*    Web setup*/}
                                {/*</Button>*/}
                            </Grid>
                            <Grid item>
                                {/*PlaceHolder*/}
                                {/*<Tooltip title="Help">*/}
                                {/*    <IconButton color="inherit">*/}
                                {/*        <HelpIcon />*/}
                                {/*    </IconButton>*/}
                                {/*</Tooltip>*/}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                    <Tabs value={0} textColor="inherit">

                        {props.tabs.map((tab, index) => {

                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <Link key={index}  href={tab.path} legacyBehavior>
                                        <Tab label={tab.label} />
                                    </Link>
                                )
                            })
                        }
                    </Tabs>
                </AppBar>
            </React.Fragment>
            <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                {children}
            </Box>
         </>
    );
}
