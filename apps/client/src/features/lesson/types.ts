import { MultiValue } from "react-select";
import { Student } from "../student/StudentTypes";
import { ErrorType, OptionType } from "../../types/GenericTypes";

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
  startDate: string;
  endDate: string;
  students: OptionType[];
};

export type HandleAddNewLesson = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

export type HandleFormDataChange = (
  key: string,
  value: string | Date | MultiValue<OptionType | null>
) => void;

export type HandleGetLessons = () => void;

export type HandleCreateLesson = (input: CreateLessonInput) => void;

export type LessonHookReturnType = {
  lessonData: LessonFormInputType;
  error: ErrorType;
  handleAddNewLesson: HandleAddNewLesson;
  handleFormDataChange: HandleFormDataChange;
  handleGetLessons: HandleGetLessons;
  handleCreateLesson: HandleCreateLesson;
};

export type HandleGetLessonByID = () => void;

export type HandleUpdateStudents = (_: string, value: OptionType[] | null) => void;

export type HandleAddStudentsToLesson = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

export type LessonDetailsHookReturnType = {
  lessonDetails: Lesson;
  newStudents: OptionType[] | null;
  handleGetLessonByID: HandleGetLessonByID;
  handleUpdateStudents: HandleUpdateStudents;
  handleAddStudentsToLesson: HandleAddStudentsToLesson;
};
