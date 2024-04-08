import { createSlice } from "@reduxjs/toolkit";
import { StudentState } from "../types";

const initialState: StudentState = {
  students: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudents: (state = initialState, action) => {
      state.students = action.payload;
    },
  },
});

export const { setStudents } = studentSlice.actions;

export default studentSlice.reducer;
