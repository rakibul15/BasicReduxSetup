import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";


import rootReducer from "../reducer/RootReducer";

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);




export default function Store(previousState) {
    const store = createStore(
        rootReducer,
        previousState,
        middlewareEnhancer
    
    );
    return store;
}

