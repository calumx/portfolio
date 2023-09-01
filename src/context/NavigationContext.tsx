import { createContext, ReactNode, SetStateAction, useState } from 'react';

interface ContextProps {
  activeView: string | false;
  setActiveView: (view: SetStateAction<string | false>) => void;
}
export const NavigationContext = createContext<ContextProps>({} as ContextProps);

const NavigationProvider = ({ children }: { children?: ReactNode }) => {
  const [activeView, setActiveView] = useState<string | false>(false);
  return <NavigationContext.Provider value={{ activeView, setActiveView }}>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
