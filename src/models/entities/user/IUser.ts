export interface IUser {
    id: string,
    name: string,
    email: string,
    created: Date,
    avatar: string,
    tag: string,
    friends: string[],
}