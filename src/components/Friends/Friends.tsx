import FriendsHeader from "./FriendsHeader/FriendsHeader";
import "../Friends/Friends.css"
import { useState } from "react";
import { FriendsTabs } from "../../models/enums/FriendsTabs";
import FriendsFields from "./FriendsFields/FriendsFields";
import FriendRequests from "./FriendRequests/FriendRequests";


function Friends() {

  const [tab, setTab] = useState(FriendsTabs.All);

  const content = getContentByTab(tab);

  return (
    <div className="friends">
        <FriendsHeader setter={setTab}/>
        {content}
    </div>
  );
}

const getContentByTab = (tab : FriendsTabs) => {
  switch(tab){
    case FriendsTabs.All :
      return <FriendsFields/>

    case FriendsTabs.FriendRequests :
      return <FriendRequests/>
  }
}

export default Friends;