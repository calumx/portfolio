import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import useSpinFunction from '../../helpers/useSpinFunction';
import styled from '@emotion/styled';

const SpinningWheel = ({
  setResult,
  setOptionsExhausted,
}: {
  setResult: (result: object) => void;
  setOptionsExhausted: (state: boolean) => void;
}) => {
  const { wheelRotation, spinWheel, result, optionsExhausted } = useSpinFunction();
  const theme = useTheme();

  useEffect(() => {
    if (result?.id) setResult(result);
  }, [result, setResult]);

  useEffect(() => {
    if (optionsExhausted) setOptionsExhausted(true);
  }, [optionsExhausted, setOptionsExhausted]);

  return (
    <Box
      sx={{
        transform: `rotate(${wheelRotation}deg)`,
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((num: number) => {
        return (
          <Box
            key={num}
            style={{
              position: 'absolute',
              top: '0',
              left: '30%',
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '150px 60px 0',
              transformOrigin: '50% 100%',
              filter: `grayscale(${optionsExhausted ? 1 : 0})`,
              transform: `rotate(${num * 45}deg)`,
              borderColor: `${num % 2 ? theme.palette.secondary.dark : theme.palette.primary.dark} transparent transparent transparent`,
            }}
          />
        );
      })}
      <SpinButton optionsExhausted={optionsExhausted} onClick={() => (optionsExhausted ? null : spinWheel())}>
        <Typography sx={{ userSelect: 'none' }}>SPIN</Typography>
      </SpinButton>
    </Box>
  );
};

const SpinButton = styled(Box, { shouldForwardProp: (prop) => prop !== 'optionsExhausted' })<{ optionsExhausted: boolean }>`
  background-color: #000;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0; 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: ${({ optionsExhausted }) => (optionsExhausted ? 'not-allowed' : 'pointer')};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ optionsExhausted }) =>
    !optionsExhausted &&
    `&:active {
    height: 70px;
    width: 70px;`}}}
`;

export default SpinningWheel;
