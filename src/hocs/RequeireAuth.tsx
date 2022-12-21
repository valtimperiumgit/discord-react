import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { authorizationSlice } from "../store/redusers/slices/AuthorizationSlice";

const RequireAuth = ({children} : any)=>{

    const isAuthorized = useAppSelector(state => state.AuthorizationReducer.isAuthorized);
    let dispatch = useAppDispatch();

    if(localStorage.getItem("Token") === null){
       dispatch(authorizationSlice.actions.setAuthorized(false));
    }

    if(!isAuthorized){
        return <Navigate to='/login' replace/>
    }
    
    return children;
}

export default RequireAuth