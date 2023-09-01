import { useContext, useState } from 'react';
import { Box, Link, Typography, useTheme, Card, CardContent } from '@mui/material';
import SpinningWheel from './SpinningWheel';
import { NavigationContext } from '../../context/NavigationContext';

interface CurrentInfo {
  id: number;
  category: string;
  subcategory: string;
  title: string;
  desc: string;
}

const WheelProfile = () => {
  const [currentInfo, setCurrentInfo] = useState<Partial<CurrentInfo>>({});
  const [optionsExhausted, setOptionsExhausted] = useState(false);
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '2rem' }}>
      <SpinningWheel setResult={setCurrentInfo} setOptionsExhausted={setOptionsExhausted} />
      <Card variant='outlined' sx={{ flex: 0.75 }}>
        <CardContent>
          {optionsExhausted ? (
            <OptionsExhaustedMessage />
          ) : !currentInfo.id ? (
            <PreSpinMessage />
          ) : (
            <>
              <Typography
                textTransform='uppercase'
                fontSize='2.5rem'
                color={currentInfo.category === 'likes' ? theme.palette.success.main : theme.palette.error.main}
              >
                {currentInfo.category}
              </Typography>
              <Typography textTransform={'capitalize'}>{`Category: ${currentInfo.subcategory}`}</Typography>
              <Typography textTransform={'capitalize'}>{`Name: ${currentInfo.title}`}</Typography>
              <Typography marginTop='2rem' fontStyle={'italic'}>
                {`"${currentInfo.desc}"`}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default WheelProfile;

const PreSpinMessage = () => {
  return (
    <Typography variant='subtitle1' marginTop={'1.5rem'}>
      {'Spin the wheel to learn something about me.'}
    </Typography>
  );
};

const OptionsExhaustedMessage = () => {
  const { setActiveView } = useContext(NavigationContext);
  return (
    <Box marginTop={'1.5rem'} sx={{ display: 'flex' }}>
      <Link sx={{ cursor: 'pointer' }} onClick={() => setActiveView('contact')}>{`Contact me`}</Link>
      <Typography>{'\u00a0to learn more.'}</Typography>
    </Box>
  );
};
