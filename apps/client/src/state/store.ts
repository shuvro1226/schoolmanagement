import { configureStore } from '@reduxjs/toolkit';
import lessonReducer from './lesson/lessonsSlice';
import studentReducer from './student/studentSlice';

export const store = configureStore({
    reducer: {
        lesson: lessonReducer,
        student: studentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
