import { createStore } from "redux";


// import CounterReducer from "../reducers/CounterReducer";
import rootReducer from "../reducer/RootReducer";



export default function Store(previousState) {
    const store = createStore(
        rootReducer,
        previousState,
    
    );
    return store;
}