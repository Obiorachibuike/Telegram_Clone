import React, { useState } from "react";
import { Box, Typography, Avatar, Card, CardContent, CardMedia } from '@mui/material';
import "../styles/Message.css"

function Message({message}) {
  const [image, setImage] = useState("hhn");
  const [video, setVideo] = useState("kl");
  const [text, setText] = useState("true");
// console.log(message);
  return (
    <Box className="message-cont" sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
      {text && (
        <div className="message-content">
          <CardContent sx={{ display: 'flex', gap: 2 }} className="message-holder">
            <Avatar src="/avatar-20.jpg" alt="" className="message-image" />
            <Box className="message-context-cont">
              <Typography variant="h6" className="message-sender">Chibuike Obiora</Typography>
              <Typography variant="body2" className="message-text">
                {message}
                {/* {console.log(message)}} */}
                {/* {/* Trade $PROM: List of Options $PROM, the native utility token of Prom network, is its driving force. It holds transactional power and acts as a gas token, powers decision-making, dApps built on Prom, and creates a unified user experience. If you are a newcomer to the Prom community, we remind you that $PROM is tradable on multiple CEXs, including Binance (https://www.binance.com/en), HTX (https://www.htx.com/), KuCoin (http://kucoin.com/), Gate.io (https://www.gate.io/), Upbit (https://upbit.com/), and AscendEX (https://ascendex.com/en/global-digital-asset-platform), and is also available on Uniswap v3 (https://app.uniswap.org/pools/696485). Stay tuned as we further unveil the utility of $PROM within our ecosystem. */}
              </Typography>
            </Box>
          </CardContent>
        </div>
      )}
      {image && (
        <div className="message-content">
          <CardContent sx={{ display: 'flex', gap: 2 }} className="message-holder">
            <Avatar src="/avatar-20.jpg" alt="" className="message-image" />
            <Box className="message-context-cont">
              <Typography variant="h6" className="message-sender">Chibuike Obiora</Typography>
              <CardMedia component="img" image="avatar-20.jpg" alt="" className="message-image-context" />
              <Typography variant="body2" className="message-text">
                Trade $PROM: List of Options $PROM, the native utility token of Prom network, is its driving force. It holds transactional power and acts as a gas token, powers decision-making, dApps built on Prom, and creates a unified user experience. If you are a newcomer to the Prom community, we remind you that $PROM is tradable on multiple CEXs, including Binance (https://www.binance.com/en), HTX (https://www.htx.com/), KuCoin (http://kucoin.com/), Gate.io (https://www.gate.io/), Upbit (https://upbit.com/), and AscendEX (https://ascendex.com/en/global-digital-asset-platform), and is also available on Uniswap v3 (https://app.uniswap.org/pools/696485). Stay tuned as we further unveil the utility of $PROM within our ecosystem.
              </Typography>
            </Box>
          </CardContent>
        </div>
      )}
      {video && (
        <div className="message-content">
          <CardContent sx={{ display: 'flex', gap: 2 }} className="message-holder">
            <Avatar src="/avatar-20.jpg" alt="" className="message-image" />
            <Box className="message-context-cont">
              <CardMedia component="video" controls image="/video.mp4" alt="Video content" className="message-video-context" />
            </Box>
          </CardContent>
        </div>
      )}
    </Box>
  );
}

export default Message;
