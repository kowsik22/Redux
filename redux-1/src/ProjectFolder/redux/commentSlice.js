import { createSlice } from "@reduxjs/toolkit";

export let commentSlice = createSlice({
  name: "newComments",
  initialState: {
    comments: [],
  },

  reducers: {
    addComments: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export let { addComments } = commentSlice.actions;

export default commentSlice.reducer;
