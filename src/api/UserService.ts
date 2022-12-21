import axios from "axios";
import { API_URL } from "../enviroment";

export const getDetails = async () => {
    const response = await axios.get<string>(`${API_URL}authorization/registration`);
    return response.data;
}