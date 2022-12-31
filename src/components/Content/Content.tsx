import "../Content/Content.css"
import ChatsFields from './ChatsFields/ChatsFields';
import Tools from './Tools/Tools';
import User from './User/User';

function Content() {

  return (

    
    <div className="content">
      <Tools/>

      <div className='private_messages_title_container'>
        <div className='private_messages_title'>
          PRIVATE MESSAGES
        </div>
      </div>
      <ChatsFields/>
      <User/>
    </div>
  );
}

export default Content;