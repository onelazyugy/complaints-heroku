import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_COMPLAINT:
            return action.payload;
        default:
            return state;
    }
};