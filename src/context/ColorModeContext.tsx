import { createContext, ReactNode, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  children?: ReactNode;
}

interface ContextProps {
  selectedColorMode: string;
  setSelectedColorMode: (mode: string) => void;
}
export const ColorModeContext = createContext<ContextProps>({ selectedColorMode: 'dark', setSelectedColorMode: () => {} });

const ColorModeProvider = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [selectedColorMode, setSelectedColorMode] = useState(prefersDarkMode ? 'dark' : 'light');
  return <ColorModeContext.Provider value={{ selectedColorMode, setSelectedColorMode }}>{children}</ColorModeContext.Provider>;
};

export default ColorModeProvider;
