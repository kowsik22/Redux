import { createSlice } from "@reduxjs/toolkit";

export let userSlice = createSlice({
  name: "newSubscriber",
  initialState: {
    user: [],
  },

  reducers: {
    addUsers: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export let { addUsers } = userSlice.actions;

export default userSlice.reducer;
