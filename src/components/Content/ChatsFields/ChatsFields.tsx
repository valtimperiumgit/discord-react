import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IChat } from '../../../models/entities/chats/IChat';
import "../ChatsFields/ChatsFields.css"
import ChatField from '../ChatField/ChatField';

function ChatsFields() {
    
    const chats = useAppSelector(state => state.ChatsReducer.chats);

    const renderChatsFields = () => {
      return chats.map(chat => {return <ChatField key={chat.id} chat={chat}/>})
    }

  const user = useAppSelector(state => state.UserReducer.user);
  let dispatch = useAppDispatch();

  return (
    <div className="chats_fields">
        {renderChatsFields()}
    </div>
  );
}

export default ChatsFields;