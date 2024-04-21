import { MultiValue } from "react-select";
import { ErrorType, OptionType } from "../../types/GenericTypes";

export type Student = {
  id: string;
  firstName: string;
  lastName: string;
};

export type CreateStudentInputType = {
  firstName: string;
  lastName: string;
};

type HandleAddNewStudent = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

type HandleFormDataChange = (
  key: string,
  value: string | Date | MultiValue<OptionType>
) => void;

type HandleGetStudents = () => void;

type HandleCreateStudent = (input: CreateStudentInputType) => void;

export type StudentHookReturnType = {
  studentData: CreateStudentInputType;
  error: ErrorType;
  handleAddNewStudent: HandleAddNewStudent;
  handleFormDataChange: HandleFormDataChange;
  handleGetStudents: HandleGetStudents;
  handleCreateStudent: HandleCreateStudent;
};
