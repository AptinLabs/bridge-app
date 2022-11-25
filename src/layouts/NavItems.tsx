

import React, { ReactNode, useEffect, useState } from 'react';
import {
    AppBar,
    Container,
    Hidden,
    IconButton,
    Link,
    makeStyles,
    Tab,
    Tabs,
    Toolbar,
    Tooltip,
    Typography,
    useTheme,
    useMediaQuery,
    Box,
    Divider,
    Button,
    SvgIcon,
    List,
    ListItem,
} from "@material-ui/core";
import BridgeWidgetMenu from './BridgeWidgetMenu';

interface NavItemsProps {
    setOpen?: (value: boolean) => void;
    modeName:string;
}

export const NavItems = ({ setOpen ,modeName}: NavItemsProps) => {

    const { breakpoints } = useTheme();
    // const md = useMediaQuery(breakpoints.down('md'));
    const md = useMediaQuery(breakpoints.down('sm'));
    return (
        <List
            className='navigation-list'
            disablePadding
        >
            <ListItem className='mobile-nav-li'>
                <Typography
                    component={Link}
                    href={'https://app.aptin.io/'}
                    onClick={() => (setOpen ? setOpen(false) : undefined)}
                >
                    Dashboard
                </Typography>
            </ListItem>

            <ListItem className='mobile-nav-li'>
                <Typography
                    component={Link}
                    href={'https://app.aptin.io/markets/'}
                    onClick={() => (setOpen ? setOpen(false) : undefined)}
                >
                    Markets
                </Typography>
            </ListItem>

            <ListItem className='mobile-nav-li'>
                <Typography
                    component={Link}
                    href={'https://app.aptin.io/staking/'}
                    onClick={() => (setOpen ? setOpen(false) : undefined)}
                >
                    Stake
                </Typography>
            </ListItem>

            <ListItem className='mobile-nav-li'>
                <Typography
                    component={Link}
                    href={'https://app.aptin.io/governance/'}
                    onClick={() => (setOpen ? setOpen(false) : undefined)}
                >
                    Governance
                </Typography>
            </ListItem>

            {
                md && (
                    <ListItem className='mobile-nav-li'
                        data-cy={'bridge'}
                        key={100}
                    >
                        <BridgeWidgetMenu  modeName={modeName}/>
                    </ListItem>
                )
            }

        </List>
    );
};
