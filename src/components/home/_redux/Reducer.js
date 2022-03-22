import * as Types from "./Types";

const initialState = {
  getdata: null,

};

const dataReducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case Types.GET_MY_PO_LIST:
        return {
          ...state,
          getdata: action.payload,
        } 
  
      default:
        break;
    }
  
    return newState;
  };
  export default dataReducer;
  
