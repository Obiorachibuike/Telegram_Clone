import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import {
  AccountCircle as AccountCircleIcon,
  Group as GroupIcon,
  PermIdentity as PermIdentityIcon,
  Call as CallIcon,
  Radar as RadarIcon,
  Bookmark as BookmarkIcon,
  PersonAdd as PersonAddIcon,
  HelpOutline as HelpOutlineIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';
import '../styles/SideNav.css';

function SideNav() {
  const { mode, toggleTheme } = useThemeContext();
  const [animClass, setAnimClass] = useState('');

  const handleToggle = () => {
    setAnimClass(mode === 'light' ? 'rotate-in' : 'rotate-out');
    toggleTheme();
  };

  const handleAnimationEnd = () => {
    setAnimClass('');
  };

  return (
    <div className='side_nav'>
      <List>
        <ListItem>
          <div className="account-details-cont">
            <div className="account-details-content">
              <img src="/avatar-20.jpg" alt="" />
              <div className="account-name-cont">
                <div className="account-name-content">
                  <div className="account-name">Chibuike Obiora</div>
                  <p>Set Emoji Status</p>
                </div>
              </div>
              <IconButton
                onClick={handleToggle}
                className={`theme-toggle-icon ${animClass}`}
                onAnimationEnd={handleAnimationEnd}
              >
                {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </div>
            <br />
            <div className="divide"></div>
          </div>
        </ListItem>
        <Divider />
        <ListItem button>
          <AccountCircleIcon className="nav-icon" />
          <ListItemText primary="My Profile" className="nav-text" />
        </ListItem>
        <ListItem button>
          <GroupIcon className="nav-icon" />
          <ListItemText primary="New Group" className="nav-text" />
        </ListItem>
        <ListItem button>
          <PermIdentityIcon className="nav-icon" />
          <ListItemText primary="Contacts" className="nav-text" />
        </ListItem>
        <ListItem button>
          <CallIcon className="nav-icon" />
          <ListItemText primary="Calls" className="nav-text" />
        </ListItem>
        <ListItem button>
          <RadarIcon className="nav-icon" />
          <ListItemText primary="People Nearby" className="nav-text" />
        </ListItem>
        <ListItem button>
          <BookmarkIcon className="nav-icon" />
          <ListItemText primary="Saved Messages" className="nav-text" />
        </ListItem>
        <ListItem button>
          <PersonAddIcon className="nav-icon" />
          <ListItemText primary="Invite Friends" className="nav-text" />
        </ListItem>
        <ListItem button>
          <HelpOutlineIcon className="nav-icon" />
          <ListItemText primary="Telegram Features" className="nav-text" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

export default SideNav;
