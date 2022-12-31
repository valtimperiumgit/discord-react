import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IChat } from '../../../models/entities/chats/IChat';
import "../ChatField/ChatField.css"

interface IChatFieldProps{
    chat: IChat;
}

function ChatField({chat} : IChatFieldProps) {

  const user = useAppSelector(state => state.UserReducer.user);
  const currentUsers = useAppSelector(state => state.UserReducer.currentUsers);
  let dispatch = useAppDispatch();

  return (
    <div className="chat_field">
      <div className='chat_field_content'>
      <img src={chat.members.length == 2 ? 
        currentUsers?.find(currentUser => currentUser.id === chat.members.find(member => member != user?.id))?.avatar 
        : chat.avatar} alt="" />
      <div className='chat_field_content_name'>
      {chat.name}
      </div>
      </div>
    </div>
  );
}

export default ChatField;