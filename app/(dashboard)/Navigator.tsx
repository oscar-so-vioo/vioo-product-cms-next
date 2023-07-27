"use client"
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import Link from "next/link";

export type Category = {

    id: string
    children: {
        id: string
        icon: React.ReactNode
        active?: boolean
        path: string
    }[]

}


const categories: Category[] = [
    {
        id: 'Panel',
        children: [
            {
                id: 'Authentication',
                icon: <PeopleIcon />,
                active: true,
                path: '/authentication',
            },
            {
                id: 'Database',
                icon: <DnsRoundedIcon />,
                path: '/authentication',

            },
            {
                id: 'Storage',
                icon: <PermMediaOutlinedIcon />,
                path: '/authentication',
            },
            {
                id: 'Hosting',
                icon: <PublicIcon />,
                path: '/authentication',
            },
            {
                id: 'Functions',
                icon: <SettingsEthernetIcon />,
                path: '/authentication',
            },
            {
                id: 'Machine learning',
                icon: <SettingsInputComponentIcon />,
                path: '/authentication',
            },
        ],
    },
    {
        id: 'Quality',
        children: [
            { id: 'Analytics', icon: <SettingsIcon />, path: '/authentication'},
            { id: 'Performance', icon: <TimerIcon />, path: '/authentication' },
            { id: 'Test Lab', icon: <PhonelinkSetupIcon />, path: '/authentication' },
        ],
    },
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props: DrawerProps) {
    const { ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    Vioo Product
                </ListItem>
                <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <Link href="/home">
                        <ListItemText>Project Overview</ListItemText>
                    </Link>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active , path}, index) => (
                            <ListItem disablePadding key={childId}>

                                <Link key={index} href={path} legacyBehavior>
                                    <ListItemButton selected={active} sx={item}>
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText>{childId}</ListItemText>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}
