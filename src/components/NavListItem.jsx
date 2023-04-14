import { useEffect, useState } from 'react';
import { Box, Button, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { LoginOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
  styleItem: {
    color: '#4A1292 !important',
    '&:hover': {
      backgroundColor: '#EDE7F6 !important'
    },
    borderRadius: '0.5rem !important'
  }
})

export const NavListItem = ({ listItem, widthDrawer, maxWidthDrawer }) => {
  const [ width, setWidth ] = useState( widthDrawer );
  const classes = useStyles();
  
  useEffect(() => {
    setWidth( widthDrawer );
  }, [ widthDrawer ])
  
  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        sx={{ 
          height: '100%' 
        }}
      >
        <Grid
          item
        >
          <List>
            {
              listItem.map(( item ) => (
                <ListItem
                  key={ item.id }
                  sx={{
                    marginY: 0.5
                  }}
                >
                  {
                    ( width != maxWidthDrawer )
                      ?
                      <Button
                        className={ classes.styleItem } 
                        sx={{
                          marginX: 0
                        }}
                      >
                        { item.componente }
                      </Button>
                      :
                      <ListItemButton
                        className={ classes.styleItem }
                      >
                        <ListItemIcon
                          className={ classes.styleItem }
                        >
                          { item.componente }
                        </ListItemIcon>
                        <ListItemText primary={ item.descripcion } />
                      </ListItemButton>
                  }
                </ListItem>
              ))
            }
          </List>
        </Grid>

        <Grid
          item
        >
          <Button
            variant='contained'
            color='secondary'
            sx={{
              mb: 5
            }}
          >
            {
              (width != maxWidthDrawer)
              ?
              <LoginOutlined />
              :
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <LoginOutlined sx={{ mr: 1.5 }} />
                <Typography variant='subtitle2'>Cerrar sesión</Typography>
              </Box>
            }
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
