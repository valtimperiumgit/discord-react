import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import Tool from '../Tool/Tool';
import "../Tools/Tools.css"

function Tools() {

  const user = useAppSelector(state => state.UserReducer.user);
  let dispatch = useAppDispatch();

  return (
    <div className="tools">
        <Tool url={'/friends'} icon={'man.png'} name={'Friends'}/>
    </div>
  );
}

export default Tools;