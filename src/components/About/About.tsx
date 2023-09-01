import { SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WheelProfile from './WheelProfile';
import TextProfile from './TextProfile';
import CodeProfile from './CodeProfile';
import { useMediaQuery, useTheme } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const About = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const darkMode = theme.palette.mode === 'dark';

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ width: '100%' }}>
      {isSmallScreen ? (
        <TextProfile />
      ) : (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            aria-label='about-tabs'
            textColor={darkMode ? 'secondary' : 'primary'}
            indicatorColor={darkMode ? 'secondary' : 'primary'}
          >
            <Tab label='WHEEL' {...a11yProps(0)} />
            <Tab label='TEXT' {...a11yProps(1)} />
            <Tab label='JSX' {...a11yProps(2)} />
          </Tabs>

          <CustomTabPanel value={value} index={0}>
            <WheelProfile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TextProfile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <CodeProfile />
          </CustomTabPanel>
        </>
      )}
    </Box>
  );
};

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} height='60vh'>
      {value === index && <Box sx={{ p: 3, maxWidth: '1047px' }}>{children}</Box>}
    </Box>
  );
};

export default About;
