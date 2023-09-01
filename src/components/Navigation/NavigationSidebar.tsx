import { Box, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';

const NavigationSidebar = () => {
  const { activeView, setActiveView } = useContext(NavigationContext);
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        padding: '0 1rem',
        width: '20vw',
      }}
    >
      <List>
        {['projects', 'about', 'contact'].map((view) => {
          return (
            <ListItem
              disableGutters
              key={`menu-item-${view}`}
              onClick={() => setActiveView(view)}
              sx={{
                cursor: 'pointer',
                '&:hover': { color: darkMode ? 'primary.main' : 'secondary.main' },
              }}
            >
              <ListItemText
                sx={{ textTransform: 'capitalize' }}
                primaryTypographyProps={{
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  ...(activeView === view && { color: darkMode ? 'secondary.main' : 'primary.main' }),
                }}
              >
                {view}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default NavigationSidebar;
