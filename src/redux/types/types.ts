import { User } from "../../types/User";

export interface Action {
    payload: User;
    type: string;    
}