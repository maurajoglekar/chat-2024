import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import roomSaga from "./roomSaga";
function* rootSaga() {
  yield all([roomSaga()]);
  yield all([userSaga()]);
}

export default rootSaga;
