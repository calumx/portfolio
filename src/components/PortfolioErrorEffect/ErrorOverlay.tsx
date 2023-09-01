import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';

const PortfolioErrorOverlay = ({ show, setShow }: { show: boolean; setShow: Dispatch<SetStateAction<boolean>> }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!show) return;

    const overlayTimeout = setTimeout(() => setShow(false), 2000);
    const counter = setInterval(() => setCount((prev) => prev + 1), 300);
    return () => {
      clearTimeout(overlayTimeout);
      clearInterval(counter);
    };
  }, [show, setShow]);

  return (
    <Stack
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        backgroundColor: '#000',
        opacity: show ? 1 : 0,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      {[...Array(count)].map((num, idx) => (
        <Typography key={num + idx} color='green' textTransform={'uppercase'} fontFamily={'Courier New'} fontSize={{ sm: '1rem', md: '1.5rem' }}>
          {'maximum call stack exceeded'}
        </Typography>
      ))}
    </Stack>
  );
};

export default PortfolioErrorOverlay;
