import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

export const NavListItem = ({ listItem, width }) => {  
  return (
    <>
      <Box
        sx={{
          width: { width },
          bgcolor: "#FFFFFF",
          display: 'flex'
        }}
      >
        <List>
          {
            listItem.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
              >
                <ListItemButton
                  sx={{

                    
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    
                  }}
                >
                  <ListItemIcon>
                    {item.componente}
                  </ListItemIcon>

                  {(width == 240) && <ListItemText primary={item.descripcion} />}

                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </>
  )
}
