import { CreateStudentMutation } from "@/graphql/mutations/StudentMutations";
import { getAllStudents } from "@/graphql/queries/StudentQueries";
import {
  CreateStudentInputType,
  Student,
  StudentHookReturnType,
} from "@/features/student/StudentTypes";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";

export default function useStudents(): StudentHookReturnType {
  const [students, setStudents] = useState<Student[]>([]);
  const [getStudents] = useLazyQuery(getAllStudents, {
    fetchPolicy: "no-cache",
  });

  const handleGetStudents = () => {
    getStudents({
      onCompleted: (data) => {
        setStudents(data.students);
      },
    });
  };

  const [createStudent] = useMutation(CreateStudentMutation);

  const handleCreateStudent = (input: CreateStudentInputType) => {
    createStudent({
      variables: {
        createStudentInput: input,
      },
      onCompleted: () => {
        handleGetStudents();
      },
    });
  };

  const [studentData, setStudentData] = useState<CreateStudentInputType>({
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  const handleFormDataChange = (key: string, value: string) => {
    setStudentData({
      ...studentData,
      [key]: value,
    });
  };

  const handleAddNewStudent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { firstName, lastName } = studentData;
    let errorObject = {
      show: false,
      message: "",
    };
    if (firstName === "" || lastName === "") {
      errorObject = {
        show: true,
        message: "Names can not be empty!",
      };
    }
    setError(errorObject);
    if (errorObject.show) {
      e.preventDefault();
    } else {
      const input: CreateStudentInputType = {
        firstName,
        lastName,
      };
      handleCreateStudent(input);
    }
  };

  return {
    students,
    studentData,
    error,
    handleFormDataChange,
    handleGetStudents,
    handleAddNewStudent,
    handleCreateStudent,
  };
}
