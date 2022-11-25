
import { IconButton, SvgIcon } from '@material-ui/core';
import React from 'react';

interface MobileCloseButtonProps {
    setOpen: (value: boolean) => void;
}

export const MobileCloseButton = ({ setOpen }: MobileCloseButtonProps) => {
    return (
        <IconButton onClick={() => setOpen(false)} >
            <SvgIcon className='close-mobile-btn'>
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                </svg>

            </SvgIcon>
        </IconButton>
    );
};
