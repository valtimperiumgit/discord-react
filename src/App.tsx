import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import RequireAuth from './hocs/RequeireAuth';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { authorizationSlice } from './store/redusers/slices/AuthorizationSlice';

function App() {

  const isAuthorized = useAppSelector(state => state.AuthorizationReducer.isAuthorized);
  let dispatch = useAppDispatch();

    if(localStorage.getItem("Token") != null){
      dispatch(authorizationSlice.actions.setAuthorized(true));}

  return (
    <div className="App">

<BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/*" element={<RequireAuth><Main/></RequireAuth>} />
    </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;


