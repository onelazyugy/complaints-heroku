import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export const saveComplaintReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_COMPLAINT:
            return action.payload;
        default:
            return state;
    }
};

export const complaintDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_COMPLAINT_DETAILS:
            return action.payload;
        default:
            return state;
    }
}