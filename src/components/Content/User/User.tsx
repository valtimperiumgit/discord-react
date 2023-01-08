import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import "../User/User.css"

function User() {

  const user = useAppSelector(state => state.UserReducer.user);
  let dispatch = useAppDispatch();

  return (
    <div className="user">
      <div className='user_info_container'>
        <img src={user?.avatar} alt="" />
        <div className='user_info'>
          <div className='user_info_name'>
            {user?.name}
          </div>
          <div className='user_info_tag'>
            #{user?.tag}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;