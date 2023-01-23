import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../hooks/redux";
import { FriendsTabs } from "../../../models/enums/FriendsTabs";
import SearchByName from "../../UI/Searches/SearchByName/SearchByName";
import "../FriendsFields/FriendsFields.css"
import FriendField from "./FriendField/FriendField";

interface FriendsFieldsProps{
  title: string,
}

function FriendsFields({title} : FriendsFieldsProps) {

  let user = useAppSelector(state => state.UserReducer.user);
  let friends = useAppSelector(state => state.UserReducer.currentUsers)?.filter(friend => friend.friends.includes(user?.id!))
  let [filteredFriends, setFilteredFriends] = useState(friends);

  useEffect(()=>{
    setFilteredFriends(friends);
  }, friends);

  const renderFriends = () =>{ 
    return filteredFriends?.map(friend => <FriendField key={user?.id} user={friend}/>)
  }

  return (
    <div className="friends_fields">
      <div className="friends_search_container"> 
        <SearchByName 
        items={useAppSelector(state => state.UserReducer.currentUsers)?.filter(friend => friend.friends.includes(user?.id!))}
        setter={setFilteredFriends}/>
      </div>

      <div className="friends_fields_title">
        {title}
      </div>
        {renderFriends()}
    </div>
  );
}

export default FriendsFields;