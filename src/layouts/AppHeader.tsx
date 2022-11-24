
import * as React from 'react';
import { useEffect, useState } from 'react';
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
} from "@material-ui/core";
import {
    Link as RouterLink,
    NavLink,
} from "react-router-dom";

import AptinLogo from "../icons/aptin.png";
import { MobileMenu } from './MobileMenu';


const useStyles = makeStyles((theme) => ({

    link: {
        ...theme.typography.body2,
        fontWeight: 600,
        fontFamily: "Suisse BP Intl, sans-serif",
        color: "#181c21",
        marginLeft: theme.spacing(4),
        textUnderlineOffset: "6px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(2.5),
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: theme.spacing(1),
        },
        "&.active": {
            textDecoration: "underline",
        },
    }
    ,
    brandLink: {
        display: "inline-flex",
        alignItems: "center",
        "&:hover": {
            textDecoration: "none",
        },
    },

}));


export function AppHeader() {
    const classes = useStyles();

    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.down('sm'));
    const downToSM = md;  

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [walletWidgetOpen, setWalletWidgetOpen] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen && !md) {
            setMobileMenuOpen(false);
        }
        if (walletWidgetOpen) {
            setWalletWidgetOpen(false);
        }
    }, [md]);

    const headerHeight = 48;

    return (
        <Box className={mobileMenuOpen ? 'header-apt mobile-open' : 'header-apt mobile-close'}
            component="header"
        >

            <Container className="data-wrap">

                <a className='mobile-logo'
                    href="https://app.aptin.io/"
                    aria-label="Go to homepage"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <img src={AptinLogo} alt="aptin logo" height={26} />
                </a>

                <Box sx={{ flexGrow: 1 }} />

                {!mobileMenuOpen && !downToSM && (
                    <>
                        <div className='wormhole-info'>
                            
                            <Link
                                href="https://docs.wormholenetwork.com/wormhole/faqs"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                                className={classes.link}
                            >
                                FAQ
                            </Link>
                            <Link
                                href="https://wormholenetwork.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                                className={classes.link}
                            >
                                Wormhole
                            </Link>
                        </div>
                    </>
                )}

         

                {!walletWidgetOpen && (
                    <Box className='mobilemenu' sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <MobileMenu
                            open={mobileMenuOpen}
                            setOpen={setMobileMenuOpen}
                            headerHeight={headerHeight}
                        />
                    </Box>
                )}


            </Container>
        </Box>
    );
}
