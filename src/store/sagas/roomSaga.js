import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "../../apis";
import * as actions from "../slices/roomSlice";

function* getRooms() {
  try {
    const response = yield call(api.fetchRooms);
    yield put(actions.getRoomsSuccess(response.data));
  } catch (error) {
    yield put(actions.getRoomsFailure());
  }
}
function* getRoom(action) {
  try {
    const response = yield call(api.fetchRoom, action.payload);
    yield put(actions.getRoomSuccess(response.data));
  } catch (error) {
    yield put(actions.getRoomFailure());
  }
}
function* getRoomMessages(action) {
  try {
    const response = yield call(api.fetchRoomMessages, action.payload);
    yield put(actions.getRoomMessagesSuccess(response.data));
  } catch (error) {
    yield put(actions.getRoomMessagesFailure());
  }
}
function* roomSaga() {
  yield takeEvery("room/getRoomsStart", getRooms);
  yield takeEvery("room/getRoomStart", getRoom);
  yield takeEvery("room/getRoomMessagesStart", getRoomMessages);
}
export default roomSaga;
