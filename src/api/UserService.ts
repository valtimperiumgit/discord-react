import axios from "axios";
import { API_URL } from "../enviroment";
import { IUser } from "../models/entities/user/IUser";

export const getUser = async () => {
    const authConfig = {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    };

    const response = await axios.get<IUser>(`${API_URL}user`, authConfig);
    return response.data;
}

export const getCurrentUsers = async () => {
    const authConfig = {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    };

    const response = await axios.get<IUser[]>(`${API_URL}user/current`, authConfig);
    return response.data;
}
