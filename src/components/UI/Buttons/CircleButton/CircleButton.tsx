import { useState } from "react";
import "../CircleButton/CircleButton.css"

interface SearchByNameProps{
  icon: string,
  hoverIcon: string,
  callback: Function,
}

function CircleButton({icon, hoverIcon, callback} : SearchByNameProps) {

  const [renderIcon, setRenderIcon] = useState(icon);

  return (
      <div
        onMouseEnter={() => {setRenderIcon(hoverIcon)}}
        onMouseLeave={() => setRenderIcon(icon)}
        onClick={() => {callback()}} 
      className="circle_button">
        <img className="circle_button_icon" src={renderIcon} alt="" />
      </div>
    );
  }
  
  export default CircleButton;
  