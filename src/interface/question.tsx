import { IUser } from "./user";

export interface IQuestion {
    questionId: number;
    title: string;
	description: string;
	user: IUser;
}