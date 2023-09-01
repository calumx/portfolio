import { useContext, useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavigationContext } from '../../context/NavigationContext';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Content = () => {
  const [activeCorners, setActiveCorners] = useState(0);
  const { activeView } = useContext(NavigationContext);
  const theme = useTheme();
  const screenIsBigEnough = useMediaQuery(theme.breakpoints.up('sm'));
  const darkMode = theme.palette.mode === 'dark';

  const CornerBorders = () => {
    if (!activeView) return null;
    const verticals = ['Top', 'Bottom'];
    const horizontals = ['Right', 'Left'];
    const iteration = activeCorners % 2;

    return verticals.map((verticalPosition, idx) => {
      const horizontalPosition = horizontals[(iteration + idx) % 2];
      //used % 2 to loop around the array forever

      return (
        <Box
          key={`border-${verticalPosition}`}
          sx={{
            position: 'absolute',
            [verticalPosition.toLowerCase()]: 0,
            [horizontalPosition.toLowerCase()]: 0,
            [`border${verticalPosition}`]: `1px solid ${theme.palette[darkMode ? 'secondary' : 'primary'].main}`,
            [`border${horizontalPosition}`]: `1px solid ${theme.palette[darkMode ? 'secondary' : 'primary'].main}`,
            animation: 'grow-border 200ms forwards',
            '@keyframes grow-border': { from: { width: '0vh', height: '0vh' }, to: { width: '25vh', height: '25vh' } },
          }}
        />
      );
    });
  };

  useEffect(() => {
    setActiveCorners((prev) => prev + 1);
  }, [activeView]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: { xs: '95vw', md: '80vw' },
        height: '75vh',
        position: 'relative',
        padding: { xs: '1rem', md: '2rem' },
        margin: '25px',
        textAlign: 'center',
      }}
    >
      {screenIsBigEnough && <CornerBorders />}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'auto',
        }}
      >
        {activeView === 'projects' && <Projects />}
        {activeView === 'about' && <About />}
        {activeView === 'contact' && <Contact />}
      </Box>
    </Box>
  );
};

export default Content;
