import { AppBar, Divider, Drawer, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { NavListItem } from './NavListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Offset = styled('div')(( { theme } ) => theme.mixins.toolbar );

const useStyles = makeStyles( (theme) => ({
  boxHeight: { 
    height: theme.mixins.toolbar 
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
      <AppBar>
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
        <Box
          
        >
          <Offset />
          <Divider />
        </Box>
        <NavListItem listItem={ listItem } />
      </Drawer>
    </>
  )
}
