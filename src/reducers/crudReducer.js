
import { READ_ALL_DATA } from "../types";

export const InitialState = {
    db:[]
}

export default function crudReducer(state = InitialState, action){
    switch(action.type){

        case READ_ALL_DATA:
            return{
                ...state, 
                db: action.payload.map((data) => data)
            }
        default:
            return state;
        
    }
}