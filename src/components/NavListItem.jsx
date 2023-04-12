import { useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
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
      <Toolbar>
        <Box
          sx={{
            width: { width },
            bgcolor: '#FFFFFF'
          }}
        >
          <List>
            {
              listItem.map(( item ) => (
                <ListItem
                  key={ item.id }
                  disablePadding
                  sx={{
                    marginY: 3
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
        </Box>
      </Toolbar>

      { 
        ( width != maxWidthDrawer ) 
        ? 
        <Box
          bottom={ 50 }
          left={ 25 }
          position='absolute'
        >
          <Button 
            variant='contained' 
            color='primary'
            sx={{
              px: 2.5
            }}
          >           
            <LoginOutlined />
          </Button>
        </Box>
        :
        <Box
          bottom={ 50 }
          left={ 43 }
          position='absolute'
        >
          <Button 
            variant='contained' 
            color='primary'
            sx={{
              px: 3.4
            }}
          >      
            <LoginOutlined sx={{ pr: 1.5 }} />     
            Cerrar sesión
          </Button>
        </Box>
      }    
    </>
  )
}
