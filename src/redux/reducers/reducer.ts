import { User } from "../../types/User";
import { Action } from "../types/types";
const initialState: User[] = [];

function reducer(state = initialState, action: Action) {
    switch(action.type) {
        case 'ADD': {
            return [
                ...state,
                action.payload,
            ];
        }
        case 'REMOVE': {
            return state.filter((user)=>{
                return user.id !== action.payload.id;
            });
        }        
        default: {
            return state;
        }
    }
}

export default reducer;