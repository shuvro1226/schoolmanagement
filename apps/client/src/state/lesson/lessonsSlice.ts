import { createSlice } from "@reduxjs/toolkit";
import { LessonsState } from "../types";

const initialState: LessonsState = {
  lessons: [],
};

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    setLessons: (state = initialState, action) => {
      state.lessons = action.payload;
    },
  },
});

export const { setLessons } = lessonsSlice.actions;

export default lessonsSlice.reducer;
