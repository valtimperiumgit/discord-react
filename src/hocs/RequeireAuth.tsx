
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../api/inperceptors/UserInterceptor";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { authorizationSlice } from "../store/redusers/slices/AuthorizationSlice";
const RequireAuth = ({children} : any)=>{

    const isAuthorized = useAppSelector(state => state.AuthorizationReducer.isAuthorized);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    if(localStorage.getItem("Token") === null){
       dispatch(authorizationSlice.actions.setAuthorized(false));
    }

    if(!isAuthorized){
        return <Navigate to='/login' replace/>
    }

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
        
         dispatch(authorizationSlice.actions.logout())
         navigate('/login')
    
        } else {
            throw error;
        }
    });

    return children;
}

export default RequireAuth
