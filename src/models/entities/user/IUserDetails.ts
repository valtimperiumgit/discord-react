import { IChat } from "../chats/IChat";
import { IUser } from "./IUser";

export interface IUserDetails {
    User: IUser,
    Chats: IChat[],
    
}