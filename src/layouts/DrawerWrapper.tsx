
import { Drawer, useTheme } from '@material-ui/core';
import { ReactNode } from 'react';

interface DrawerWrapperProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  headerHeight: number;
  children: ReactNode;
}

export const DrawerWrapper = ({ open, setOpen, children, headerHeight }: DrawerWrapperProps) => { 

  return (
    <Drawer className={' bridge-drawer'}
      anchor="top"
      open={open}
      onClose={() => setOpen(false)}
      hideBackdrop  
    >
      {children}
    </Drawer>
  );
};
