import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rooms: [],
  loading: false,
  error: false,
  room: {},
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
} = roomSlice.actions;
export default roomReducer;
