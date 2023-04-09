import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

export const NavListItem = ({ listItem }) => {
  return (
    <>
      <Box
        sx={{
          width: 240,
          bgcolor: "#FFFFFF"
        }}
      >
        <nav>
          <List>
            {
              listItem.map( ( item ) => (
                <ListItem 
                  key={ item.id }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      { item.componente }
                    </ListItemIcon>
                    <ListItemText primary={ item.descripcion } />
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </nav>
      </Box>
    </>
  )
}
