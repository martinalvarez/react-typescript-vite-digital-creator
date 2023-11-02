import { User } from "../../types/User";

export function addUser(user: User) {
    return {
        payload: user,
        type: 'ADD',        
    }
}

export function removeUser(user: User) {
    return {
        payload: user,
        type: 'REMOVE',        
    }
}