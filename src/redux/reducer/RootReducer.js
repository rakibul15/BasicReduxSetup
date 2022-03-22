import { combineReducers } from "redux";
import dataReducer from "../../components/home/_redux/Reducer";

// combine all of the reducers here
const rootReducer = combineReducers({
    dataInfo : dataReducer,

   
});
  
export default rootReducer;
  