import { FriendsTabs } from "../../../models/enums/FriendsTabs";
import "../FriendsTab/FriendsTab.css"

interface FriendsTabProps{
    name: string,
    setter: Function,
    value: FriendsTabs,
}

function FriendsTab({name, setter, value} : FriendsTabProps) {

  let classTab = value === FriendsTabs.Add ? "friends_tab_add" : "friends_tab";

  return (
    <div className={classTab} onClick={() => {setter(value)}}>
        {name}
    </div>
  );
}

export default FriendsTab;