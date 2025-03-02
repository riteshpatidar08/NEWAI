import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/utils";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const setPreferences = createAsyncThunk(
  "preferences/setPreferences",
  async (data , { rejectWithValue }) => {
  
    const id = getCookie('id')
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/preferences/${id}`,
        data
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setPreferences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setPreferences.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(setPreferences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = newsSlice.actions;
export default newsSlice.reducer;
