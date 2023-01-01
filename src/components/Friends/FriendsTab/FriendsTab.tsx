import { FriendsTabs } from "../../../models/enums/FriendsTabs";
import "../FriendsTab/FriendsTab.css"

interface FriendsTabProps{
    name: string,
    setter: Function,
    value: FriendsTabs,
}

function FriendsTab({name, setter, value} : FriendsTabProps) {

  return (
    <div className="friends_tab" onClick={() => {setter(value)}}>
        {name}
    </div>
  );
}

export default FriendsTab;