import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    turnOnLoading(state) {
      state.loading = true;
    },
    turnOffLoading(state) {
      state.loading = false;
    },
  },
});

export const { turnOnLoading, turnOffLoading } = globalSlice.actions;
export default globalSlice.reducer;
