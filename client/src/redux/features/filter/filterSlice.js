import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      if (state.tags.includes(action.payload)) {
        state.tags = [];
      } else {
        state.tags = [action.payload];
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, searched } = filterSlice.actions;
