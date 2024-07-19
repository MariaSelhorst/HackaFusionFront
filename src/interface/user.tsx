import { IStudentGang } from "./studentGang";

export interface IUser {
    id: number
    username: string;
    fullname: string;
    role: string;
    email: string;
    studentGang?: IStudentGang;
}

