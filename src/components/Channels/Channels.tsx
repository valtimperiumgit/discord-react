import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { IChat, privateMessages } from "../../models/entities/chats/IChat";
import "../Channels/Channels.css"
import ChatIcon from './ChatIcon/ChatIcon';

function Channels() {


  const chats = useAppSelector(state => state.ChatsReducer.chats);
  let dispatch = useAppDispatch();

  const renderChatsIcons = () => {
    return chats.map(chat => {if(chat.countUnreadMessages > 0) return (<ChatIcon key={chat.id} chat={chat}/>)});
  }

  return (
    <div className="channels">
        <ChatIcon chat={privateMessages}/>
        {renderChatsIcons()}


      <div className='separator_container'>
        <div className='separator'></div>
      </div>
      
    </div>
  );
}

export default Channels;
