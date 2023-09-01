import { Box, Stack, Typography } from '@mui/material';
import ThemeSelection from './ThemeSelection';

const Header = () => {
  const MyName = () => {
    return (
      <Stack>
        <Typography variant='h1' fontWeight={'bold'} fontSize={['1.5rem', '2rem', '2.5rem']}>
          Calum Muir
        </Typography>
        <Typography variant='h2' fontSize={{ xs: '1rem', md: '1.5rem' }}>
          Frontend Developer
        </Typography>
      </Stack>
    );
  };
  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 0.75rem',
        marginBottom: { xs: '1rem', md: '2rem' },
      }}
    >
      <MyName />
      <ThemeSelection />
    </Box>
  );
};

export default Header;
