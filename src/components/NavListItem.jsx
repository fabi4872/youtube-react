import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

export const NavListItem = ({ listItem, width, maxWidthDrawer }) => {  
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
              listItem.map((item) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{
                    marginY: 3
                  }}
                >
                  {
                    (width != maxWidthDrawer)
                      ?
                      <Button sx={{
                        marginX: 0
                      }}>
                        {item.componente}
                      </Button>
                      :
                      <ListItemButton>
                        <ListItemIcon>
                          {item.componente}
                        </ListItemIcon>
                        <ListItemText primary={item.descripcion} />
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
