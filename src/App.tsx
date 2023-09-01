import { useContext, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ColorModeContext } from './context/ColorModeContext';
import { Box, PaletteMode, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import NavigationSidebar from './components/Navigation/NavigationSidebar';
import Content from './components/Content/Content';
import NavigationTabs from './components/Navigation/NavigationTabs';

const App = () => {
  const { selectedColorMode } = useContext(ColorModeContext);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: selectedColorMode as PaletteMode,
        },
        typography: {
          fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
        },
      }),
    [selectedColorMode]
  );

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Header />
      {isSmallScreen && <NavigationTabs />}
      <Box sx={{ display: 'flex', width: '100vw', justifyContent: isSmallScreen ? 'center' : 'start' }}>
        {!isSmallScreen && <NavigationSidebar />}
        <Content />
      </Box>
    </ThemeProvider>
  );
};

export default App;
