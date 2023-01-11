import React, { useState } from 'react';
import {
    Typography,
    useTheme,
    useMediaQuery,
    ListItem,
    MenuItem,
    Box,
    ListItemIcon, 
    ListItemText,
    Button,
    List,
    Menu, 
} from "@material-ui/core";
import { DrawerWrapper } from './DrawerWrapper';
import cbridge from "../icons/bridge/cbridge.png";
import wormhole from "../icons/bridge/wormhole.png";
import layerzero from "../icons/bridge/layerzero.png";

interface HeaderProps {
    modeName: string; 
  } 

export default function BridgeWidgetMenu({modeName}:HeaderProps) {
    const theme = useTheme(); 
    const md = useMediaQuery(theme.breakpoints.down("sm")); 
    const fillColor = modeName == "dark" ? '#F1F1F3' : '#6A7888';

    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    const open = Boolean(anchorEl);

    const [openMobile, setOpenMobile] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        setOpenMobile(true)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMobile(false)
    };

    const brigdeList = [
        {
            name: 'cBridge',
            url: 'https://cbridge.celer.network/',
            logo: cbridge
        },
        {
            name: 'Wormhole',
            url: '/',
            logo: wormhole
        },
        {
            name: 'LayerZero',
            url: 'https://bridge.liquidswap.com/',
            logo: layerzero
        },
    ]


    const onClick = () => {
        setOpenMobile(false)
    }

    const Content = ({ component = ListItem }: { component?: typeof MenuItem | typeof ListItem }) => (
        <>
            {
                md && openMobile && (
                    <Box className='mobile-nav-li'
                        component={component}
                        sx={{ color: { xs: '#F1F1F3', md: 'text.primary' }, mb: '4px' }}
                        onClick={() => { onClick() }}
                    >
                        <ListItemIcon style={{}}>
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-egnern-MuiSvgIcon-root return-ico" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></svg>
                        </ListItemIcon>
                        <ListItemText disableTypography>
                            <Typography>
                                Select bridge
                            </Typography>
                        </ListItemText>
                    </Box>
                )
            }

            {
                brigdeList.map((item) => {
                    return <Box className='mobile-nav-li'
                        key={item.name}
                        component={component}
                        sx={{ color: { xs: '#F1F1F3', md: 'text.primary' } }}
                        onClick={() => {
                            handleClose();
                            if (item.name == 'Wormhole') {
                                window.open(item.url, "_self");
                            } else {
                                window.open(item.url, "_blank");
                            }

                        }}
                    >
                        <ListItemIcon>
                            <img
                                src={item.logo}
                                width="20"
                                height="20"
                            />
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </Box>
                })
            }


        </>
    );

    return (
        <>

            {md ? (
                <Typography 
                    onClick={handleClick}
                >
                    Bridge
                </Typography>
            ) : (
                <Button className={'no-handle-a'}
                    aria-label="bridge"
                    id="bridge-button"
                    aria-controls={open ? 'bridge-button' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >

                    <span className='ico-svg'>
                        <svg width="16" height="16" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M546.133333 520.533333l59.733334-59.733333 21.333333 21.333333 115.2-115.2-119.466667-119.466666-115.2 115.2 4.266667 8.533333-59.733333 59.733333L384 358.4 614.4 128l243.2 243.2-230.4 230.4-81.066667-81.066667z m-115.2-68.266666L371.2 512l-8.533333-8.533333-115.2 115.2 119.466666 119.466666 115.2-115.2-21.333333-21.333333 59.733333-59.733333 81.066667 81.066666L371.2 853.333333 128 614.4 358.4 384l72.533333 68.266667zM571.733333 341.333333l59.733334 59.733334-230.4 230.4L341.333333 571.733333 571.733333 341.333333z"
                                fill={fillColor}></path></svg>

                    </span>

                    <span className='nav-i'>Bridge</span>

                </Button>

            )}


            {md ? (
                <DrawerWrapper open={openMobile} setOpen={() => { }} headerHeight={48}>
                    <List className='navigation-list'>

                        <Content />
                    </List>
                </DrawerWrapper>
            ) : (
                <Menu
                    className={' atpin-menu-dailog'}
                    id="bridge-menu"
                    MenuListProps={{
                        'aria-labelledby': 'wallet-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    keepMounted={true}
                >
                    <Content component={MenuItem} />
                </Menu>
            )}
        </>
    )
}

