import { Box } from '@mui/material';
import { Navbar } from './Navbar';
import { useEffect, useState } from 'react';

const minWidthDrawer = 120;
const maxWidthDrawer = 240;

export const Layout = ({ listItem, children }) => {
  const [ widthDrawer, setWidthDrawer ] = useState( minWidthDrawer );

  const onClickMenuButton = ( width ) => {
    setWidthDrawer( width );
  }

  useEffect(() => {
  }, [ widthDrawer ])
  
  return (
    <>
      <Navbar minWidthDrawer={ minWidthDrawer } maxWidthDrawer={ maxWidthDrawer } listItem={ listItem } onClickMenuButton={ onClickMenuButton } />
        
      <Box 
        sx={{  
          p: 3,
          ml: `${ widthDrawer }px` 
        }}>
        
          { children }

      </Box>
    </>
  )
}
