import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMemberList = createAsyncThunk(
  "member/fetchMemberList",
  async (_, { extra }) => {
    const payload = await extra
      .getFirebase()
      .ref("member")
      .once("value")
      .then((snapshot) => snapshot.val());
    return payload;
  }
);

export const postNewMember = createAsyncThunk(
  "member/postNewMember",
  async ({ memberId, payload, callback }, { extra }) => {
    await extra
      .getFirebase()
      .set(`member/${memberId}`, payload, () => callback());
  }
);

export const updateMember = createAsyncThunk(
  "member/updateMember",
  async ({ memberId, payload, callback }, { extra }) => {
    await extra
      .getFirebase()
      .set(`member/${memberId}`, payload, () => callback());
  }
);

const memberSlice = createSlice({
  name: "member",
  initialState: {
    data: {},
    timestamp: null,
  },
  reducers: {},
  extraReducers: {
    [fetchMemberList.fulfilled]: (state, action) => {
      state.data = { ...action.payload };
    },
  },
});

export default memberSlice.reducer;
