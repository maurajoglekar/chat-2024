import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rooms: [],
  loading: false,
  error: false,
  room: {},
  messages: [],
};
const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    getRoomsStart: (state) => {
      state.loading = true;
    },
    getRoomsSuccess: (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
    },
    getRoomsFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    getRoomStart: (state) => {
      state.loading = true;
    },
    getRoomSuccess: (state, action) => {
      state.loading = false;
      state.room = action.payload;
    },
    getRoomsFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    getRoomMessagesStart: (state) => {
      state.loading = true;
    },
    getRoomMessagesSuccess: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    },
    getRoomsMessagesFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    addRoomMessageStart: (state) => {
      state.loading = true;
    },
    addRoomMessageSuccess: (state, action) => {
      state.loading = false;
      state.messages = [...state.messages, action.payload];
    },
    addRoomMessagesFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

const roomReducer = roomSlice.reducer;
export const {
  getRoomsStart,
  getRoomsSuccess,
  getRoomsFailure,
  getRoomStart,
  getRoomSuccess,
  getRoomFailure,
  getRoomMessagesStart,
  getRoomMessagesSuccess,
  getRoomMessagesFailure,
  addRoomMessageStart,
  addRoomMessageSuccess,
  addRoomMessageFailure,
} = roomSlice.actions;
export default roomReducer;
