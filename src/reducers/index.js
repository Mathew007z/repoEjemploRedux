
import { combineReducers } from "redux";
import crudReducer from "./crudReducer";
import counterReducer from "./countReducer";
import cartReducer from "./cartReducer";

 const rootReducer = combineReducers({
    crud: crudReducer,
    counter: counterReducer,
    shopping: cartReducer
})


export default rootReducer;