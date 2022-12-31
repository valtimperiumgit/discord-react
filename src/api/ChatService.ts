import axios from "axios";
import { API_URL } from "../enviroment";
import { IChat } from "../models/entities/chats/IChat";
import axiosInstance from "./inperceptors/UserInterceptor";


export const getChats = async () => {
    const authConfig = {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    };

    const response = await axiosInstance.get<IChat[]>(`${API_URL}chats`, authConfig);
    return response.data;
}