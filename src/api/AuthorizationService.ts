import axios from "axios";
import { API_URL } from "../enviroment";
import { ILoginRequest } from "../models/requests/ILoginRequest";
import { IRegistrationRequest } from "../models/requests/IRegistrationRequest";

export const registration = async (request : IRegistrationRequest) => {
    const response = await axios.post<string>(`${API_URL}authorization/registration`, request);
    return response.data;
}

export const login = async (request : ILoginRequest)  => {
    const response = await axios.post<string>(`${API_URL}authorization/login`, request);
    return response.data;
}