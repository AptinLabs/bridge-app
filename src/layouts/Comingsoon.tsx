 
import { Button, ListItemText, Menu, MenuItem } from '@material-ui/core';
import React from 'react';

export interface ComingSoonProps {
    menuName: string;
}

export const ComingSoon = ({
    menuName,
}: ComingSoonProps) => { 
    const fillColor = '#6A7888'; 
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                className='no-handle-a'
                aria-label="more"
                id="more-button"
                aria-controls={open ? 'more-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
               

                {menuName === 'Governance' &&
                 
                    <span className='ico-svg'> 

                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.55441 3.52401C9.06719 3.75807 10.2409 4.93203 10.4755 6.44542C10.4978 6.58785 10.6199 6.69288 10.7644 6.69288H13.7072C13.7888 6.69288 13.867 6.65863 13.9224 6.59812C13.9778 6.5379 14.0052 6.45712 13.9983 6.37549C13.7055 2.9754 11.0247 0.294629 7.62403 0.00118628C7.5441 -0.00623952 7.4619 0.0214634 7.4014 0.0768144C7.34089 0.132193 7.30664 0.210397 7.30664 0.292327V3.23514C7.30664 3.3793 7.41167 3.50203 7.55441 3.52401Z" fill={fillColor} />
                            <path d="M13.7084 7.27734H10.7656C10.6212 7.27734 10.499 7.38237 10.4768 7.52481C10.3917 8.07426 10.1731 8.60204 9.84538 9.05129C9.76032 9.16747 9.77287 9.32846 9.8745 9.43033L11.9559 11.5123C12.0107 11.5671 12.0849 11.5979 12.1625 11.5979C12.1665 11.5979 12.1711 11.5979 12.1751 11.5976C12.2573 11.5942 12.3338 11.5563 12.3863 11.4937C13.3174 10.3854 13.8751 9.03729 13.9996 7.59471C14.0064 7.51308 13.979 7.4323 13.9236 7.37207C13.8683 7.3116 13.7901 7.27734 13.7084 7.27734Z" fill={fillColor} />
                            <path d="M9.46037 9.84384C9.35819 9.74193 9.19605 9.72908 9.08132 9.81471C8.47506 10.2583 7.76035 10.4926 7.01478 10.4926C5.0807 10.4926 3.50739 8.91931 3.50739 6.98523C3.50739 5.24581 4.75531 3.79011 6.47475 3.52407C6.61746 3.50209 6.72252 3.37936 6.72252 3.2352V0.292415C6.72252 0.210484 6.68827 0.13228 6.62776 0.076902C6.56726 0.0212495 6.48848 -0.00645338 6.40513 0.00127384C2.81323 0.310966 0 3.37881 0 6.98523C0 10.8531 3.1466 14 7.01478 14C8.6606 14 10.2613 13.4163 11.5229 12.3562C11.5857 12.3034 11.6234 12.2269 11.6274 12.145C11.6308 12.0634 11.6 11.9837 11.5418 11.9258L9.46037 9.84384Z" fill={fillColor} />
                        </svg>


                    </span>
                }
                <span className='nav-i'> {menuName}</span>
            </Button>

            <Menu
            className='more-menu atpin-menu-dailog'
                id="more-menu"
                MenuListProps={{
                    'aria-labelledby': 'more-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                keepMounted={true}
                
            >
                <MenuItem  key={1}>
                    <ListItemText>Coming soon</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
}
 