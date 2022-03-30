import userReducer from "./User/userReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
