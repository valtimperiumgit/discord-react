import { useState } from "react";
import { FriendsTabs } from "../../../models/enums/FriendsTabs";
import "../FriendsHeader/FriendsHeader.css"
import FriendsTab from "../FriendsTab/FriendsTab";

interface FriendsHeaderProps{
  setter: Function,
}

function FriendsHeader({setter} : FriendsHeaderProps) {

    return (
      <div className="friends_header">
          <div className="tool_title">
            <div className="tool_title_content">
              <img src={require("../../../images/man.png")} alt="" />
              <span>Friends</span>
            </div>

            <FriendsTab name="All" setter={setter} value={FriendsTabs.All}/>
            <FriendsTab name="Waiting" setter={setter} value={FriendsTabs.Requests}/>
            <FriendsTab name="Add" setter={setter} value={FriendsTabs.Add}/>
          </div>
      </div>
    );
  }
  
  export default FriendsHeader;