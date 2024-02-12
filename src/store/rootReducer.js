import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import roomReducer from "./slices/roomSlice";
const rootReducer = combineReducers({
  user: userReducer,
  chat: roomReducer,
});

export default rootReducer;
