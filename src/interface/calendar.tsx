import { IStudentGang } from "./studentGang";
import { IUser } from "./user";

export interface ICalendarEvent {
    id: number;
    title: string;
    description: string;
    date: string;
    studentGang: IStudentGang;
    user: IUser
}