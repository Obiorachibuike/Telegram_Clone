import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Box,
  Badge,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import "../styles/ChatArea.css";
import {
  ArrowLeftOutlined,
  GifBox,
  Mic,
  More,
  Pin,
  PinOutlined,
  Search,
  Send,
  SentimentSatisfiedRounded,
  ShareLocation,
  SpeakerPhone,
} from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PinnedMessage from "./PinnedMessage";
import Message from "./Message";
import DatePosted from "./DatePosted";

const ChatArea = ({ action }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isTrue, setIsTrue] = useState(true);
  const storedMessages = localStorage.getItem("chatMessages");

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
    setIsTrue(false);
  };

  const fetchMessages = async () => {
    if (storedMessages) {
      // Data found in local storage
      const chatMessages = JSON.parse(storedMessages);
      setMessages(chatMessages.data);
    } else {
      // Data not found in local storage, fetching from API
      try {
        const response = await axios.get(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`
        );
        const chatMessages = response.data;
        // Store data in local storage
        localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
        setMessages(response.data);
        console.log(messages);
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      }
    }
  };

  const sendMessage = async () => {
    if (message.trim() !== "") {
      try {
        const response = await axios.post(
          `https://devapi.beyondchats.com/api/send_message`,
          { message }
        );
        setMessages([...messages, response.data]);
        setMessage("");
        localStorage.setItem(
          "chatMessages",
          JSON.stringify([...messages, response.data])
        );
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <Box className="chat-area-cont">
      <AppBar position="static">
        <Toolbar>
          <div className="back-icon">
            <ArrowLeftOutlined className="back" onClick={action} />
          </div>
          <div className="chat-area-heading">
            <List>
              <ListItem button sx={{ display: "flex", justifyContent: "space-between" }}>
                <ListItemAvatar>
                  <Avatar alt="Chat Image" src="/avatar-20.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
                      <div className="name">
                        <Typography variant="body1" component="span">
                          John Mikel
                        </Typography>
                      </div>
                    </Box>
                  }
                  secondary={
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
                      <Typography component="span" variant="body2" color="text.primary">
                        A Boy was coming
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            </List>
            <div className="pinned-message">
              <PinnedMessage />
            </div>
            <div className="header-icon">
              <Search className="message-search" />
              <MoreVertIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className="mobile-view-pinned-message">
        <div className="mobile-view-pinned-message-content">
          <PinnedMessage />
        </div>
      </div>
      <div className="chat_area_cont">
        <div className="chat_area_content">
          <DatePosted />
          {messages.map(({ id, message }) => (
            <div className="message-holder" key={id}>
                console.log(messages)
              <Message message={message} />
            </div>
          ))}
        </div>
      </div>
      <footer>
        <ShareLocation />
        <input
          type="text"
          placeholder="Write your message..."
          className="message_input"
          value={message}
          onChange={handleChange}
        />
        {message.trim() && <Send onClick={sendMessage} />}
      </footer>
    </Box>
  );
};

export default ChatArea;
