
import CrudApi from "./components/CrudApi";
import { Provider } from 'react-redux';
import {store} from './store'
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import CounterItem from "./components/CounterItem";
import ShoppingCart from "./components/ShoppingCart";


const persistor = persistStore(store)


const App  = () => {

    return(
        <PersistGate persistor={persistor}>
                   <Provider store={store}>
                        <CrudApi/>
                        <CounterItem/>
                        <ShoppingCart/>
                </Provider>
        </PersistGate>
     
      
    )
}


export default App;