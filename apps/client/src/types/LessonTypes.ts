import { MultiValue } from "react-select";
import { Student } from "./StudentTypes";
import { OptionType } from "./types";

interface BaseLessonType {
  name: string;
  startDate: string;
  endDate: string;
}
export interface CreateLessonInput extends BaseLessonType {
  students: string[];
}

export interface Lesson extends BaseLessonType {
  id?: string;
  students: Student[];
}

export type LessonFormInputType = {
  name: string;
  startDate: Date;
  endDate: Date;
  students: null | OptionType[];
};

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

type HandleGetLessonByID = () => void;

type HandleUpdateStudents = (value: OptionType[] | null) => void;

type HandleAddStudentsToLesson = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

export type LessonDetailsHookReturnType = {
  lessonDetails: Lesson;
  newStudents: OptionType[] | null;
  handleGetLessonByID: HandleGetLessonByID;
  handleUpdateStudents: HandleUpdateStudents;
  handleAddStudentsToLesson: HandleAddStudentsToLesson;
};
