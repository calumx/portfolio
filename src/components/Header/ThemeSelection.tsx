import { useContext } from 'react';
import { ColorModeContext } from '../../context/ColorModeContext';
import { IconButton, Stack } from '@mui/material';
import { LightMode, ModeNight } from '@mui/icons-material';

export const ThemeSelection = () => {
  const { selectedColorMode, setSelectedColorMode } = useContext(ColorModeContext);

  const handleClick = () => {
    selectedColorMode === 'dark' ? setSelectedColorMode('light') : setSelectedColorMode('dark');
  };

  return (
    <Stack>
      <IconButton
        onClick={handleClick}
        sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, color: selectedColorMode === 'light' ? 'primary.light' : 'secondary.main' }}
      >
        {selectedColorMode === 'light' ? <ModeNight fontSize='inherit' /> : <LightMode fontSize='inherit' />}
      </IconButton>
    </Stack>
  );
};

export default ThemeSelection;
