import { useState } from "react";
import "../FriendsHeader/FriendsHeader.css"

function FriendsHeader() {

    const tab = useState();

    return (
      <div className="friends_header">
          <div className="tool_title">
            <div className="tool_title_content">
              <img src={require("../../../images/man.png")} alt="" />
              <span>Friends</span>
            </div>

          </div>
      </div>
    );
  }
  
  export default FriendsHeader;