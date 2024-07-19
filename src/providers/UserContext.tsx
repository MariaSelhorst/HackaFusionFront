import { createContext, ReactNode, useState } from "react";
import { IUser } from "../interface/user";

interface IUserContext {
    user?: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
    token?: string;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>
}


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }:{ children:ReactNode }) => {

    const [user, setUser] = useState<IUser>()
    const [token, setToken] = useState<string>()

    return(
        <UserContext.Provider value={{
            user, setUser,
            token, setToken
        }}>
            { children }
        </UserContext.Provider>
    )
}
