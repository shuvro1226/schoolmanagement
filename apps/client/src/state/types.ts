import { Lesson } from "@/features/lesson/types";
import { Student } from "@/features/student/StudentTypes";

export type LessonsState = {
  lessons: Lesson[];
};

export type StudentState = {
  students: Student[];
};