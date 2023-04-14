import { useEffect, useLayoutEffect, useState } from 'react';
import { AppBar, Divider, Drawer, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { NavListItem } from './NavListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

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

export const Navbar = ({ minWidthDrawer, maxWidthDrawer, listItem, onClickMenuButton }) => {  
  const classes = useStyles();
  const theme = useTheme();
  const isXsOrSm = useMediaQuery( theme.breakpoints.down( 'sm' ) );
  const [ open, setOpen ] = useState( false );
  const [ widthDrawer, setWidthDrawer ] = useState( minWidthDrawer );
  const [ styleAppBar, setStyleAppBar ] = useState( classes.appBarFront );
  const [ drawerVariant, setDrawerVariant ] = useState( isXsOrSm ? undefined : 'permanent' );
  const [ drawerAnchor, setDrawerAnchor ] = useState( isXsOrSm ? 'left' : undefined );
 
  useLayoutEffect(() => {
    const handleResize = () => {
      const newIsXsOrSm = window.innerWidth < theme.breakpoints.values.sm;
      setDrawerVariant( newIsXsOrSm ? undefined : 'permanent' );
      setDrawerAnchor( newIsXsOrSm ? 'left' : undefined );
    };
    window.addEventListener( 'resize', handleResize );
    return () => window.removeEventListener( 'resize', handleResize );
  }, [ theme.breakpoints.values.sm ]);

  const onClickOpenMenu = () => {
    setOpen( true );
    setWidthDrawer( maxWidthDrawer );
    setStyleAppBar( classes.appBarBack );
    ( drawerAnchor === 'left' ) ? onClickMenuButton( 0 ) : onClickMenuButton( maxWidthDrawer );
  }

  const onClickCloseMenu = () => {
    setOpen( false );
    setWidthDrawer( minWidthDrawer );
    setStyleAppBar( classes.appBarFront );
    ( drawerAnchor === 'left' ) ? onClickMenuButton( 0 ) : onClickMenuButton( minWidthDrawer );
  }

  useEffect(() => {  
  }, [ open ])

  useEffect(() => {
    ( drawerAnchor === 'left' ) ? onClickMenuButton( 0 ) : onClickCloseMenu();
  }, [ drawerAnchor ])

  return (
    <>
      <AppBar className={ styleAppBar } color='secondary' >
        <Toolbar
          sx={{
            mx: 3
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
        variant={ drawerVariant }
        anchor={ drawerAnchor }
        open={ open }
        sx={{
          width: `${ widthDrawer }px`,
          transition: 'width 0.5s ease',
        }}
        PaperProps={{
          sx: {
            width: `${ widthDrawer }px`,
            transition: 'width 0.5s ease',
            minWidth: `${ minWidthDrawer }px`,
            overflow: 'hidden',
          }
        }}
      >
        <Toolbar
          className={ classes.headDrawerHeight }
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
        <NavListItem 
          listItem={ listItem } 
          widthDrawer={ widthDrawer } 
          maxWidthDrawer={ maxWidthDrawer } />
      </Drawer>
    </>
  )
}
