import { combineReducers } from "redux";

// Reducers
import loginReducer from "./loginReducer";
import localReducer from "./localReducer";

const allReducers = combineReducers({
  login: loginReducer,
  local: localReducer,
});

export default allReducers;
