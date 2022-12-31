import React, { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { IChat, privateMessages } from '../../../models/entities/chats/IChat';
import "../ChatIcon/ChatIcon.css"
import "../styles/ChannelsGlobalStyles.css"

interface ChatIconProps {
    chat: IChat,
}

function ChatIcon({chat} : ChatIconProps) {

  const user = useAppSelector(state => state.UserReducer.user);
  const currentUsers = useAppSelector(state => state.UserReducer.currentUsers);
  const activeChat = useAppSelector(state => state.ChatsReducer.activeChat);

  const activeImageClass = "image_active";
  const notActiveImageClass = "image";

  const isPrivateMessages = chat.id == privateMessages.id;
  const isAvatarEmpty = chat.avatar == "";
  const isPrivateChat = chat.members.length == 2;
  const defauldAvatar = require("../../../images/discord.png")

  return (
    <div className="icon">
        <img
        className={chat.id == activeChat?.id ? activeImageClass : notActiveImageClass}
        src={isPrivateMessages ? defauldAvatar :
        (isAvatarEmpty ? 
        (isPrivateChat ? currentUsers?.find(currentUser => currentUser.id == chat.members
          .find(member => member != user?.id))?.avatar
        : defauldAvatar) 
        : chat.avatar)} 
      />   

      {(chat.countUnreadMessages > 0) && 
      <div>
        <div className='unread_messages_container'>
        </div>
        <div className='unread_messages_counter'>
          {chat.countUnreadMessages}
        </div>
        </div>}
        
    </div>
  );
}

export default ChatIcon;