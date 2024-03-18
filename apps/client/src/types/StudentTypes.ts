import { ErrorType } from "./types";

export type Student = {
    id: string;
    firstName: string;
    lastName: string;
}

export type CreateStudentInputType = {
    firstName: string;
    lastName: string;
}

type HandleAddNewStudent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  
  type HandleFormDataChange = (
    key: string,
    value: string
  ) => void;
  
  type HandleGetStudents = () => void;
  
  type HandleCreateStudent = (input: CreateStudentInputType) => void;
  
  export type StudentHookReturnType = {
    students: Student[];
    studentData: CreateStudentInputType;
    error: ErrorType;
    handleAddNewStudent: HandleAddNewStudent;
    handleFormDataChange: HandleFormDataChange;
    handleGetStudents: HandleGetStudents;
    handleCreateStudent: HandleCreateStudent;
  };