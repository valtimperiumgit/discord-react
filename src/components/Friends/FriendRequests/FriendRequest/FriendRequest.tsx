
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { IFriendRequest } from "../../../../models/entities/friends/IFriendRequest";
import { IUser } from "../../../../models/entities/user/IUser";
import { deleteFriendRequest, friendsSlice } from "../../../../store/redusers/slices/FriendsSlice";
import CircleButton from "../../../UI/Buttons/CircleButton/CircleButton";
import "../FriendRequest/FriendRequest.css"

interface IFriendRequestProps{
  user: IUser | undefined,
  request: IFriendRequest,
}

function FriendRequest({user, request} : IFriendRequestProps) {

  let dispatch = useAppDispatch();

  let deleteFR = (requestId: string) => {
    dispatch(deleteFriendRequest(requestId));
  }

    let users = useAppSelector(state => state.UserReducer.currentUsers);
    let renderUser = (user?.id === request.receivingId) ? 
    users?.find(user => user.id === request.requestingId) : users?.find(user => user.id === request.receivingId)
    
    return (
      <div className="friend_request">
        <div className="friend_request_content">
          <img className="friend_request_content_img" src={renderUser?.avatar} alt="" />
          <div className="friend_request_content_info">
            <div className="friend_request_content_info_name">
            {renderUser?.name}
            </div>
            <div className="friend_request_content_info_request_type">
            
            {request.requestingId != user?.id ? "Incoming friend request" : "Outgoing friend request"}
            </div>
          </div>  

          <div className="friend_request_buttons_container">
                {(request.requestingId != user?.id) && <CircleButton icon="https://i.ibb.co/tbvDwmx/image.png" 
                hoverIcon="https://i.ibb.co/BtZQHgK/image.png" 
                callback={()=>{console.log('dadadada')}}/>}
              

              <CircleButton icon="https://i.ibb.co/93SRH9M/image.png" 
              hoverIcon="https://i.ibb.co/MczLwz0/image.png" 
              callback={() => {deleteFR(request.id)}}/>
              
          </div>
        </div>
          
      </div>
    );
  }
  
  export default FriendRequest;