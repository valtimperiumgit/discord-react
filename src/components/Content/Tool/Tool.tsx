import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import "../Tool/Tool.css"

interface ToolProps{
    url: string,
    icon: string,
    name: string,
}

function Tool({url, icon, name} : ToolProps) {

  const user = useAppSelector(state => state.UserReducer.user);
  let dispatch = useAppDispatch();

  return (
    <Link className='link' to={url}>
        <div className="tool">
            <div className='tool_content'>
                <img src={require(`../../../images/${icon}`)} alt="" />
                <div>
                {name}
            </div>
        </div>
    </div>
    </Link>
  );
}

export default Tool;