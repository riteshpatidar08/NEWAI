import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: function (state) {
      state.count += 1;
    },
  },
});


export default counterSlice.reducer;


