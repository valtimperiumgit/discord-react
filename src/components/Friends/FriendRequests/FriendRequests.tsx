import { request } from "https";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import SearchByName from "../../UI/Searches/SearchByName/SearchByName";
import "../FriendRequests/FriendRequests.css"
import FriendRequest from "./FriendRequest/FriendRequest";

interface FriendRequestsProps{
  title: string,
}

function FriendRequests({title} : FriendRequestsProps) {

  let user = useAppSelector(state => state.UserReducer.user);
  let friendRequests = useAppSelector(state => state.FriendsReducer.friendRequests);
  let [filteredRequests, setFilteredRequests] = useState(friendRequests);

  useEffect(()=>{
    setFilteredRequests(friendRequests);
  }, [friendRequests]);

  const renderFriends = () =>{ 
   return filteredRequests?.map(request => <FriendRequest key={request.id} user={user} request={request} />);
  }

    return (
      <div className="friend_requests">

        <div className="friends_search_container"> 
        <SearchByName 
        items={useAppSelector(state => state.UserReducer.currentUsers)?.filter(user => user.friends.includes(user?.id!))}
        setter={setFilteredRequests}/>
      </div>
      <div className="friend_requests_title">
        {title}
      </div>
        {renderFriends()}
      </div>
    );
  }
  
  export default FriendRequests;