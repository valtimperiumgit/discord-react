import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setChats } from '../../store/redusers/slices/ChatsSlice';
import { setCurrentUsers, setUser } from '../../store/redusers/slices/UserSlice';
import Friends from '../Friends/Friends';
import LeftMenu from '../LeftMenu/LeftMenu';
import "../Main/Main.css"

function Main() {

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentUsers());
    dispatch(setChats());
    dispatch(setUser());
  }, [])

  return (
    <div className="main">
    <LeftMenu/>
    <Routes>
      <Route path="/friends" element={<Friends/>} />
    </Routes>

    </div>
  );
}

export default Main;