import { AppBar, Divider, Drawer, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { NavListItem } from './NavListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Offset = styled('div')(( { theme } ) => theme.mixins.toolbar );

const useStyles = makeStyles( (theme) => ({
  appBar: { 
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

  return (
    <>
      <AppBar className={ classes.appBar }>
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
            onClick={() => console.log('Icon button presionado')}
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
            onClick={ () => console.log('Icon button presionado') }
            sx={{
              p: 0
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <NavListItem listItem={ listItem } />
      </Drawer>
    </>
  )
}
