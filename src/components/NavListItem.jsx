import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  styleItem: {
    color: '#4A1292 !important',
    '&:hover': {
      backgroundColor: '#EDE7F6 !important'
    },
    borderRadius: '0.5rem !important'
  }
})

export const NavListItem = ({ listItem, width, maxWidthDrawer }) => {
  const classes = useStyles();
  
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
    </>
  )
}
