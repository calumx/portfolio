import { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material';

const NavigationTabs = () => {
  const { activeView, setActiveView } = useContext(NavigationContext);
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  return (
    <Tabs
      value={activeView}
      onChange={(_, view) => setActiveView(view)}
      textColor={darkMode ? 'secondary' : 'primary'}
      indicatorColor={darkMode ? 'secondary' : 'primary'}
      aria-label='navigation tabs'
      centered
    >
      <Tab value='projects' label='projects' />
      <Tab value='about' label='about' />
      <Tab value='contact' label='contact' />
    </Tabs>
  );
};

export default NavigationTabs;
