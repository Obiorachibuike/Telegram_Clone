import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { useThemeContext } from "../context/ThemeContext";
import "../styles/ChatList.css";
// import { Chat } from "@mui/icons-material";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const ChatList = ({ action }) => {
  const [chats, setChats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const storedMessages = localStorage.getItem('chatList');

  const { mode } = useThemeContext();

  useEffect(() => {
    fetchChats();
    // console.log(chats);
  }, []);

  const fetchChats = async () => {
    if (storedMessages) {
        // Data found in local storage
        const chatMessages = JSON.parse(storedMessages);
        setChats(chatMessages.data.data)
        console.log(chats);
        // console.log('Chat messages retrieved from local storage:', chatMessages);
      } else {
        // Data not found in local storage, fetching from API
        try {
          const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`);
          const chatMessages = response.data;
          
          // Store data in local storage
          localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
          setChats(response.data);
          
          console.log('Chat messages fetched from API and stored in local storage:', chatMessages);
        } catch (error) {
        //   console.error('Error fetching chat messages:', error);
        }
    }
  };



  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className={`chat-list_container ${mode}`} style={{ backgroundColor: 'var(--chat-list-bg-color)' }}>
        <div className="chat-list-heading">
          <Sidebar />
          <div className="app-name">Telegram</div>
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>
        <div className="chat-nav-cont">
          <div className="chat-nav-content">
            <div className="chat-nav">
              ALL <span>3</span>
            </div>
            <div className="chat-nav">
              Regular <span>2</span>
            </div>
            <div className="chat-nav">
              Unread <span>234</span>
            </div>
            <div className="chat-nav">
              ALL <span>3</span>
            </div>
          </div>
        </div>
        <div className="search-cont">
          <div className="search-content">
            <input type="text" placeholder="Search" className="chat-search" />
            <div className="cancel">x</div>
          </div>
        </div>
        <div className="chat-list-cont">
          <div className="chat-list-container">
            {
                chats.map(({id,msg_count,creator,created_at}) => (
                    <div className="chats-holder" key={id}>
                              {console.log(chats)}
                        <Chat action={action} msg_count={msg_count} name={creator.name} created_at={created_at} />
                    </div>
                    // console.log(b)
                ))
            }
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatList;
