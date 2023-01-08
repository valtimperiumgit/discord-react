import { IUser } from "../../../../models/entities/user/IUser";
import { FriendsTabs } from "../../../../models/enums/FriendsTabs";
import "../FriendField/FriendField.css"

interface FriendFieldProps{
    user: IUser,
}

function FriendField({user} : FriendFieldProps) {



    return (
      <div className="friend_field">
        <div className="friend_field_content">
        <img src={user.avatar} alt="" />

          <div className="friend_info">
            <div className="friend_info_name">{user.name}</div>
            <div className="friend_info_network">Offline</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FriendField;
  