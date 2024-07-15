import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import '../styles/Sidebar.css'; // Import CSS file for styling
import SideNav from './SideNav';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <>
    <div className="side-bar-cont">
    <div className="side-bar-content">

      <IconButton
        edge="start"
        // color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        color='white'
        className='menu'
        >
        <MenuIcon color='white'
        
        className='menu'
        />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        classes={{
          paper: 'drawerPaper', // Apply 'drawerPaper' class for styling
        }}
      >
       <SideNav />
      </Drawer>
        </div>
        </div>
    </>
  );
};

export default Sidebar;
