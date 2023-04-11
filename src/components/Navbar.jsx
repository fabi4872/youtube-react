import { AppBar, Divider, Drawer, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { NavListItem } from './NavListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from 'react';

const Offset = styled('div')(( { theme } ) => theme.mixins.toolbar );

const useStyles = makeStyles( (theme) => ({
  appBarFront: { 
    zIndex: `${ theme.zIndex.drawer + 1 } !important`
  },
  appBarBack: { 
    zIndex: `${ theme.zIndex.drawer - 1 } !important`
  },  
  headDrawerHeight: {
    height: `${ theme.mixins.toolbar } !important`
  }
}))

const listItem = [
  {
    id: 1,
    descripcion: 'Reportes',
    componente: <AddBoxIcon />
  }
]

export const Navbar = () => {  
  const classes = useStyles();

  const [ open, setOpen ] = useState( false );
  const [ widthDrawer, setWidthDrawer ] = useState( 30 );
  const [ styleAppBar, setStyleAppBar ] = useState( classes.appBarFront );
  
  const onClickOpenMenu = () => {
    setOpen( true );
    setWidthDrawer( 240 );
    setStyleAppBar( classes.appBarBack );
  }

  const onClickCloseMenu = () => {
    setOpen( false );
    setWidthDrawer( 30 );
    setStyleAppBar( classes.appBarFront );
  }

  useEffect(() => {
    
  }, [ open ])
  
   
  return (
    <>
      <AppBar className={ styleAppBar }>
        <Toolbar
          sx={{
            mx: 2
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            size='large'
            onClick={ onClickOpenMenu }
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1
            }}
          >
          </Box>

          <Box>
            <Typography
              variant='h5'
              sx={{
                letterSpacing: 5,
                fontWeight: 'bold'
              }}
            >
              TuTi
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Offset />

      <Drawer 
        variant='permanent'
      >
        <Toolbar
          className='headDrawerHeight'
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography 
            variant='subtitle2'
            sx={{
              fontWeight: 'bold'
            }}  
          >
            Mostaza
          </Typography>
          <IconButton
            aria-label='close drawer'
            edge='start'
            size='large'
            onClick={ onClickCloseMenu }
            sx={{
              p: 0
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <NavListItem listItem={ listItem } width={ widthDrawer } />
      </Drawer>
    </>
  )
}
