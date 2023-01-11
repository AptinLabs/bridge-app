
import { ReactNode} from 'react';
import { 
    Typography, 
    Box,
    Divider,
    Button,
    SvgIcon,
} from "@material-ui/core"; 
import { MobileCloseButton } from './MobileCloseButton';
import { DrawerWrapper } from './DrawerWrapper';
import { NavItems } from './NavItems';


interface MobileMenuProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    headerHeight: number;
    modeName:string;
}

const MenuItemsWrapper = ({ children, title }: { children: ReactNode; title: ReactNode }) => (
    <Box>
        <Box sx={{ px: 2 }}>
            <Typography>
                {title}
            </Typography>

            {children}
        </Box>

        <Divider className='apt-divider' />
    </Box>
);

export const MobileMenu = ({ open, setOpen, headerHeight ,modeName}: MobileMenuProps) => {


    return (
        <>
            {open ? (
                <MobileCloseButton setOpen={setOpen} />
            ) : (
                <Button className='menu-btn'
                    onClick={() => setOpen(true)}
                >
                    <SvgIcon fontSize="small">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </svg>
                    </SvgIcon>
                </Button>
            )}

            <DrawerWrapper open={open} setOpen={setOpen} headerHeight={headerHeight}>
                {  
                    <>
                        <MenuItemsWrapper  title={<>Menu</>}>
                            <NavItems setOpen={setOpen} modeName={modeName} />
                        </MenuItemsWrapper>
                     
                    </>
                 }
            </DrawerWrapper>
        </>
    );
};
