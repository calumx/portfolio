import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeProvider from './context/ColorModeContext';
import NavigationProvider from './context/NavigationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </ColorModeProvider>
  </React.StrictMode>
);
