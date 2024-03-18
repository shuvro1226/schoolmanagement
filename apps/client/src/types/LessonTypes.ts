import { MultiValue } from "react-select";
import { Student } from "./StudentTypes";
import { OptionType } from "./types";

export type Lesson = {
  id?: string;
  name: string;
  startDate: string;
  endDate: string;
  students: Student[];
};

export type CreateLessonInput = {
  name: string;
  startDate: string;
  endDate: string;
  students: string[];
};

export type LessonFormInputType = {
  name: string;
  startDate: Date;
  endDate: Date;
  students: null | OptionType[];
}

export type CreateLessonErrorType = {
  show: boolean;
  message: string;
};

type HandleAddNewLesson = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

type HandleFormDataChange = (
  key: string,
  value: string | Date | MultiValue<OptionType | null>
) => void;

type HandleGetLessons = () => void;

type HandleCreateLesson = (input: CreateLessonInput) => void;

export type LessonHookReturnType = {
  lessons: Lesson[];
  lessonData: LessonFormInputType;
  error: CreateLessonErrorType;
  handleAddNewLesson: HandleAddNewLesson;
  handleFormDataChange: HandleFormDataChange;
  handleGetLessons: HandleGetLessons;
  handleCreateLesson: HandleCreateLesson;
};
