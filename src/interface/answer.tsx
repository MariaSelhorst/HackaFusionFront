import { IUser } from "./user";

export interface IAnswer {
    id: number;
    desciption : string;
	questionId : number;
	userId: number;
	user: IUser;
}