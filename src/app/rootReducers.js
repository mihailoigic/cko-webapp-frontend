import { combineReducers } from "redux";
import setPageReducer from "./store/pagination/reducers";

const rootReducers = combineReducers({
    pagination: setPageReducer
});

export default rootReducers;
