import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import ChatArea from './components/ChatArea.jsx';
import ChatList from './components/ChatList.jsx';
import { ThemeProvider, useThemeContext } from './context/ThemeContext.jsx';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './App.css';
// import './styles/global.css';

function App() {
  const [isTrue, setIsTrue] = useState(true);
  const { mode, toggleTheme } = useThemeContext();

  const handleBack = () => {
    setIsTrue(true);
  };
  
  const handleForward = () => {
    setIsTrue(false);
  };

  return (
    <div className={`App ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="theme-toggle">
        {/* <IconButton onClick={toggleTheme}>
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton> */}
      </div>
      <div className="telegram-cont">
        <div className="telegram-content">
          <div className="mobile-view">
            {isTrue ? <ChatList action={handleForward} /> : <ChatArea action={handleBack} />}
          </div>
          <div className="full-screen">
            <ChatList />
            <ChatArea />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWrapper;
