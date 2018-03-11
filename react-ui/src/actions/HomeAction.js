import * as types from "./actionTypes";
import axios from "axios";

export const saveComplaint = (complaint) => dispatch => {
    axios
    .post("/api/complaint", complaint,{
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(result => {
      if (result.status === 200) {
        console.log('save complaint response:', result.data);
        dispatch({
            type: types.SAVE_COMPLAINT,
            payload: result.data
        });
      }
    })
    .catch(error => {
      console.error(error);
    });
};