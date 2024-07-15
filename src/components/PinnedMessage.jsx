import { PinOutlined } from '@mui/icons-material'
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function PinnedMessage() {
  return (
    <>
   

<div className="pinned-cont">
            <List>
 
{/* {filteredChats.map((chat) => ( */}

  <ListItem button  sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <ListItemAvatar>
      <Avatar alt= "Chat Image" src="/avatar-20.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary={
            <div className="pinned">

          <Typography variant="body1" component="span">
           Pinned message
          </Typography>
            </div>
         
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
         
        </Box>
      }
    />
  </ListItem>
{/* ))} */}
</List>
<PinOutlined /> 
</div>

        

           
    </>
  )
}

export default PinnedMessage