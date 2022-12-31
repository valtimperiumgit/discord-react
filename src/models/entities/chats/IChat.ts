import { IUser } from "../user/IUser";

export interface IChat {
    name: string,
    id: string,
    members: string[],
    type: number,
    avatar: string,
    countUnreadMessages: number,
}

export const privateMessages : IChat = {
    name: "Private Messages",
    id: "discord_private_massages_id",
    members: [],
    countUnreadMessages: 0,
    avatar: "",
    type: 1,
  }