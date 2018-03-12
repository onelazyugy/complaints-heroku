import { combineReducers } from 'redux';
import { saveComplaintReducer, complaintDetailsReducer } from "./homeReducer";

//root reducer
export default combineReducers({
    saveComplaintReducer,
    complaintDetailsReducer
});