import { IUser } from "../../../../models/entities/user/IUser";
import { FriendsTabs } from "../../../../models/enums/FriendsTabs";
import CircleButton from "../../../UI/Buttons/CircleButton/CircleButton";
import "../FriendField/FriendField.css"

interface FriendFieldProps{
    user: IUser,
}

function FriendField({user} : FriendFieldProps) {



    return (
      <div className="friend_field">
        <div className="friend_field_content">
        <img className="friend_field_content_avatar" src={user.avatar} alt="" />

          <div className="friend_info">
            <div className="friend_info_name">{user.name}</div>
            <div className="friend_info_network">Offline</div>
          </div>

        <div className="friend_field_buttons">
            <CircleButton icon="https://i.ibb.co/N2XhTnK/gr-points.png" 
              hoverIcon=" https://i.ibb.co/pjymqRp/points.png" 
              callback={() => {}}/>
        </div>
        </div>
      </div>
    );
  }

  
  export default FriendField;
  