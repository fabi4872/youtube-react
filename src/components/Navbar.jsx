import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Offset = styled('div')(( { theme } ) => theme.mixins.toolbar );

export const Navbar = () => {
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
    </>
  )
}
