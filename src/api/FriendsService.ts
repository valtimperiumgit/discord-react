import axios from "axios";
import { API_URL } from "../enviroment";
import { IChat } from "../models/entities/chats/IChat";
import { IFriendRequest } from "../models/entities/friends/IFriendRequest";
import { IAddFriendRequest } from "../models/requests/IAddFriendRequest";
import axiosInstance from "./inperceptors/UserInterceptor";


export const addFriend = async (body: IAddFriendRequest) => {
    const authConfig = {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    };
  
        const response = await axiosInstance.post<IFriendRequest>(`${API_URL}friends/requests/create`, body, authConfig)
        .then(
            (res) => {
                return res.data;
            }
        )
        .catch( (e) => {
            throw new Error(e.response.data.detail);
        })

        return response;

}

export const getFriendRequests = async () => {
    const authConfig = {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    };

    const response = await axiosInstance.get<IFriendRequest[]>(`${API_URL}friends/requests`, authConfig);
    return response.data;
}

export const deleteFriendRequest = async (requestId: string) => {
    const authConfig = {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    };

    await axiosInstance.delete(`${API_URL}friends/requests/delete?requestId=${requestId}`, authConfig);
}
