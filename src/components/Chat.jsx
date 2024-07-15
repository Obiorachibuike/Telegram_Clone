import { Avatar, Badge, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function Chat({action,name,msg_count,created_at}) {


    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
      
        // Format the date
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      
        // Format the time
        const formattedTime = date.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      
        // Combine date and time
        return `${formattedTime}`
      }
      
      // Example usage
      const timestamp = "2024-05-31T11:13:16.000000Z";
      const TimePosted = formatTimestamp(created_at);
      console.log(TimePosted);
      

  return (
    <>


{/* <Box className="chat-list" > */}
{/* <Box className="search-cont" sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
<TextField
  variant="outlined"
  placeholder="Search"
  value={searchTerm}
  onChange={handleSearch}
  fullWidth
  InputProps={{
    startAdornment: (
      <SearchIcon />
    ),
    endAdornment: (
      <IconButton onClick={() => setSearchTerm('')}>
        <ClearIcon />
      </IconButton>
    ),
  }}
/>
</Box> */}
<div className="chat" onClick={action}>

<List>
 
{/* {filteredChats.map((chat) => ( */}
  <ListItem button  sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <ListItemAvatar>
      <Avatar alt= "Chat Image" src=" /avatar-20.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="name">

          <Typography variant="body1" component="span">
            {name}
          </Typography>
            </div>
          <Typography variant="caption" component="span" sx={{ marginLeft: '10px' }}>
           {TimePosted}
          </Typography>
        </Box>
      }
      secondary={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            component="span"
            variant="body2"
            color="text.primary"
          >
           A Boy was coming
          </Typography>
          {5 > 0 && (
            <Badge badgeContent={msg_count} color="primary" sx={{ marginLeft: '10px' }} />
          )}
        </Box>
      }
    />
  </ListItem>
{/* ))} */}
</List>
</div>
{/* </Box> */}

    </>
  )
}

export default Chat