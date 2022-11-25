
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
    PaletteType,
} from "@material-ui/core";
import {
    Link as RouterLink,
    NavLink,
} from "react-router-dom";

import AptinLogo from "../icons/aptin.png";
import AptinLogo_w from "../icons/aptin-w.png";
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


interface HeaderProps {
    modeName: string;
    setModeName: (value: string) => void; 
  }

  
export function AppHeader({modeName,setModeName}:HeaderProps) {
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

    
    function setModetype(value:string){
        theme.palette.type=value as PaletteType; 
        localStorage.setItem('bridge_modetype',value)
        setModeName(value)
      }

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
                    <img src={ modeName == 'light'?AptinLogo:AptinLogo_w} alt="aptin logo" height={26} />
                </a>

                <Box sx={{ flexGrow: 1 }} />

                {/* {!mobileMenuOpen && !downToSM && (
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
                )} */}

                <Box className='wormhole-info' style={{ margin: '0px 0px' }}>
                    {
                        modeName == 'light' && (
                            <svg onClick={()=>{setModetype('dark')}} className='mode-type' width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7956 27.9056C20.2635 28.5089 18.6076 28.8106 16.8281 28.8106C14.9618 28.8106 13.2409 28.4894 11.6654 27.847C10.0898 27.2046 8.72049 26.3019 7.55729 25.1387C6.3941 23.9755 5.49349 22.6083 4.85547 21.0371C4.21745 19.4659 3.89844 17.7385 3.89844 15.8548C3.89844 14.1361 4.2283 12.4868 4.88802 10.9069C5.54774 9.32704 6.46571 7.93598 7.64193 6.73372C8.81814 5.53147 10.1701 4.61784 11.6979 3.99284C11.8889 3.92339 12.0495 3.87565 12.1797 3.84961C12.3099 3.82357 12.401 3.81055 12.4531 3.81055C12.7483 3.81055 12.9892 3.91471 13.1758 4.12305C13.3624 4.33138 13.4557 4.55273 13.4557 4.78711C13.4557 4.926 13.4405 5.05838 13.4102 5.18424C13.3798 5.31011 13.3125 5.46853 13.2083 5.65951C12.9826 6.10221 12.8003 6.70551 12.6615 7.4694C12.5226 8.23329 12.4531 9.07096 12.4531 9.98242C12.4531 12.1265 12.8893 13.9776 13.7617 15.5358C14.6341 17.094 15.8754 18.2941 17.4857 19.1361C19.0959 19.9781 21.0078 20.3991 23.2214 20.3991C23.6988 20.3991 24.174 20.373 24.6471 20.321C25.1202 20.2689 25.5694 20.1929 25.9948 20.0931C26.4201 19.9933 26.7934 19.8826 27.1146 19.7611C27.2795 19.6829 27.4162 19.6352 27.5247 19.6178C27.6332 19.6005 27.7483 19.5918 27.8698 19.5918C28.0868 19.5918 28.2908 19.6764 28.4818 19.8457C28.6727 20.015 28.7682 20.2472 28.7682 20.5423C28.7682 20.6204 28.7552 20.729 28.7292 20.8678C28.7031 21.0067 28.651 21.1673 28.5729 21.3496C27.8958 22.8861 26.98 24.212 25.8255 25.3275C24.671 26.4429 23.3277 27.3023 21.7956 27.9056Z"
                                    fill="#181C21" />
                            </svg>
                        )
                    }
                    {
                        modeName == 'dark' && (
                            <svg onClick={()=>{setModetype('light')}} className='mode-type' width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 12.364C18 12.364 19.6363 14.0003 19.6363 16.0003C19.6363 18.0003 18 19.6367 16 19.6367C14 19.6367 12.3636 18.0003 12.3636 16.0003C12.3636 14.0003 14 12.364 16 12.364ZM16 9.93972C12.6545 9.93972 9.93935 12.6549 9.93935 16.0003C9.93935 19.3458 12.6545 22.0609 16 22.0609C19.3454 22.0609 22.0606 19.3458 22.0606 16.0003C22.0606 12.6549 19.3454 9.93972 16 9.93972ZM3.87875 17.2124H6.30299C6.96966 17.2124 7.51511 16.667 7.51511 16.0003C7.51511 15.3337 6.96966 14.7882 6.30299 14.7882H3.87875C3.21208 14.7882 2.66663 15.3337 2.66663 16.0003C2.66663 16.667 3.21208 17.2124 3.87875 17.2124ZM25.6969 17.2124H28.1212C28.7878 17.2124 29.3333 16.667 29.3333 16.0003C29.3333 15.3337 28.7878 14.7882 28.1212 14.7882H25.6969C25.0303 14.7882 24.4848 15.3337 24.4848 16.0003C24.4848 16.667 25.0303 17.2124 25.6969 17.2124ZM14.7878 3.87911V6.30336C14.7878 6.97002 15.3333 7.51548 16 7.51548C16.6666 7.51548 17.2121 6.97002 17.2121 6.30336V3.87911C17.2121 3.21245 16.6666 2.66699 16 2.66699C15.3333 2.66699 14.7878 3.21245 14.7878 3.87911ZM14.7878 25.6973V28.1215C14.7878 28.7882 15.3333 29.3337 16 29.3337C16.6666 29.3337 17.2121 28.7882 17.2121 28.1215V25.6973C17.2121 25.0306 16.6666 24.4852 16 24.4852C15.3333 24.4852 14.7878 25.0306 14.7878 25.6973ZM8.71511 7.00639C8.60297 6.89402 8.46977 6.80487 8.32314 6.74404C8.17651 6.68322 8.01931 6.65191 7.86057 6.65191C7.70182 6.65191 7.54463 6.68322 7.39799 6.74404C7.25136 6.80487 7.11816 6.89402 7.00602 7.00639C6.89365 7.11852 6.8045 7.25172 6.74368 7.39836C6.68285 7.54499 6.65154 7.70218 6.65154 7.86093C6.65154 8.01968 6.68285 8.17687 6.74368 8.32351C6.8045 8.47014 6.89365 8.60334 7.00602 8.71548L8.29087 10.0003C8.7636 10.4731 9.53935 10.4731 9.99996 10.0003C10.4606 9.5276 10.4727 8.75184 9.99996 8.29123L8.71511 7.00639ZM23.7091 22.0003C23.5969 21.888 23.4637 21.7988 23.3171 21.738C23.1704 21.6772 23.0133 21.6458 22.8545 21.6458C22.6958 21.6458 22.5386 21.6772 22.3919 21.738C22.2453 21.7988 22.1121 21.888 22 22.0003C21.8876 22.1125 21.7984 22.2457 21.7376 22.3923C21.6768 22.5389 21.6455 22.6961 21.6455 22.8549C21.6455 23.0136 21.6768 23.1708 21.7376 23.3174C21.7984 23.4641 21.8876 23.5973 22 23.7094L23.2848 24.9943C23.7575 25.467 24.5333 25.467 24.9939 24.9943C25.1063 24.8821 25.1954 24.7489 25.2562 24.6023C25.3171 24.4557 25.3484 24.2985 25.3484 24.1397C25.3484 23.981 25.3171 23.8238 25.2562 23.6771C25.1954 23.5305 25.1063 23.3973 24.9939 23.2852L23.7091 22.0003ZM24.9939 8.71548C25.1063 8.60334 25.1954 8.47014 25.2562 8.32351C25.3171 8.17687 25.3484 8.01968 25.3484 7.86093C25.3484 7.70218 25.3171 7.54499 25.2562 7.39836C25.1954 7.25172 25.1063 7.11852 24.9939 7.00639C24.8818 6.89402 24.7486 6.80487 24.6019 6.74404C24.4553 6.68322 24.2981 6.65191 24.1394 6.65191C23.9806 6.65191 23.8234 6.68322 23.6768 6.74404C23.5301 6.80487 23.3969 6.89402 23.2848 7.00639L22 8.29123C21.5272 8.76396 21.5272 9.53972 22 10.0003C22.4727 10.4609 23.2484 10.4731 23.7091 10.0003L24.9939 8.71548ZM9.99996 23.7094C10.1123 23.5973 10.2015 23.4641 10.2623 23.3174C10.3231 23.1708 10.3544 23.0136 10.3544 22.8549C10.3544 22.6961 10.3231 22.5389 10.2623 22.3923C10.2015 22.2457 10.1123 22.1125 9.99996 22.0003C9.88782 21.888 9.75462 21.7988 9.60799 21.738C9.46135 21.6772 9.30416 21.6458 9.14541 21.6458C8.98666 21.6458 8.82947 21.6772 8.68284 21.738C8.5362 21.7988 8.40301 21.888 8.29087 22.0003L7.00602 23.2852C6.53329 23.7579 6.53329 24.5337 7.00602 24.9943C7.47875 25.4549 8.2545 25.467 8.71511 24.9943L9.99996 23.7094V23.7094Z"
                                    fill="#ffffff" />
                            </svg>
                        )
                    }


                </Box>

                {!walletWidgetOpen && (
                    <Box className='mobilemenu' sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <MobileMenu
                            open={mobileMenuOpen}
                            setOpen={setMobileMenuOpen}
                            headerHeight={headerHeight}
                            modeName={modeName}
                        />
                    </Box>
                )}


            </Container>
        </Box>
    );
}
