import * as types from "./actionTypes";
import axios from "axios";
import { CONFIG } from "../config/globals";

export const saveComplaint = (complaint) => dispatch => {
    console.log('CONFIG:', CONFIG);
    axios
    .post(CONFIG.url + "/api/complaint", complaint,{
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

export const storeComplaintDetails = (complaint) => dispatch => {
    dispatch({
        type: types.STORE_COMPLAINT_DETAILS,
        payload: complaint
    });
}