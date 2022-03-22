import Axios from "axios"
import * as Types from "./Types";

export const getList = () => (dispatch) => {
    let url = `https://jsonplaceholder.typicode.com/posts`;

    try {
        Axios.get(url).then((res) => {
            console.log('resdata', res)
            if (res.status===200) {
              
                dispatch({
                    type: Types.GET_MY_PO_LIST,
                    payload: res.data,
                })
            }
        });
    } catch (error) {
        console.log("error");
    }
};