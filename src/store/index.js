import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";



const persistConfig = {
    key: 'root',
    storage,
    whilelist:['pesistedReducer']
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, applyMiddleware(thunk))
