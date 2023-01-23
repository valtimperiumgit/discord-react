import { useState } from "react";
import { IUser } from "../../../../models/entities/user/IUser";
import "../SearchByName/SearchByName.css"

interface SearchByNameProps{
  items: IUser[] | undefined,
  setter: Function,
}

function SearchByName({items, setter} : SearchByNameProps) {

    let [searchValue, setSearchValue] = useState();

    return (
      <input className="search_by_name" 
      type="text"
      onChange={(e) => 
        {
          if(e.target.value === ""){
            setter(items);
          }
          else{
            setter(items?.filter(item => item.name.includes(e.target.value)))
          }
        }}
      placeholder="Search" />
    );
  }
  
  export default SearchByName;
  