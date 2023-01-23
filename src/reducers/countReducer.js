import { DECREMENT_COUNT, INCREMENT_COUNT, RESET } from "../types";

const initialState = 0;

export default function counterReducer(state = initialState, action){

    switch(action.type){
        case INCREMENT_COUNT:
            return state + 1;
        case DECREMENT_COUNT:
            return state -1;
        case RESET:
            return initialState;    
        default:
            return state;   
    }   
}

