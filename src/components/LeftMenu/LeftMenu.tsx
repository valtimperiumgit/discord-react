import Channels from '../Channels/Channels';
import Content from '../Content/Content';
import "../LeftMenu/LeftMenu.css"

function LeftMenu() {

  return (
    <div className="left_menu">
        <Channels/>
        <Content/>  
    </div>
  );
}

export default LeftMenu;