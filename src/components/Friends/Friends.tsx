import FriendsHeader from "./FriendsHeader/FriendsHeader";
import "../Friends/Friends.css"
import { useState } from "react";
import { FriendsTabs } from "../../models/enums/FriendsTabs";
import FriendsFields from "./FriendsFields/FriendsFields";
import FriendRequests from "./FriendRequests/FriendRequests";
import { useAppSelector } from "../../hooks/redux";
import AddFriend from "./AddFriend/AddFriend";


function Friends() {

  const [tab, setTab] = useState(FriendsTabs.All);
  let user = useAppSelector(state => state.UserReducer.user);
  let friendRequests = useAppSelector(state => state.FriendsReducer.friendRequests);
  let friends = useAppSelector(state => state.UserReducer.currentUsers)?.filter(friend => friend.friends.includes(user?.id!));

  const getContentByTab = (tab : FriendsTabs) => {
    switch(tab){
      case FriendsTabs.All :
        return <FriendsFields title={`ALL FRIENDS - ${friends?.length}`}/>
  
      case FriendsTabs.Requests :
        return <FriendRequests title={`WAITING - ${friendRequests?.length}`}/>
      
      case FriendsTabs.Add :
        return <AddFriend/>
    }
  }

  const content = getContentByTab(tab);

  return (
    <div className="friends">
        <FriendsHeader setter={setTab}/>
        {content}
    </div>
  );
}


export default Friends;