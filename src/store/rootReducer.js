import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import roomReducer from "./slices/roomSlice";
const rootReducer = combineReducers({
  user: userReducer,
  room: roomReducer,
});

export default rootReducer;
