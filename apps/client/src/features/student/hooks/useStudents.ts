import { CreateStudentMutation } from "@/graphql/mutations/StudentMutations";
import { getAllStudents } from "@/graphql/queries/StudentQueries";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateStudentInputType,
  StudentHookReturnType,
} from "@/features/student/StudentTypes";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setStudents } from "@/state/student/studentSlice";
import { RootState } from "@/state/store";
import { MultiValue } from "react-select";
import { OptionType } from "@/types/GenericTypes";

export default function useStudents(): StudentHookReturnType {
  const dispatch = useDispatch();
  const students = useSelector((state: RootState) => state.student.students);
  const [getStudents] = useLazyQuery(getAllStudents, {
    fetchPolicy: "no-cache",
  });

  const handleGetStudents = useCallback(() => {
    getStudents({
      onCompleted: (data) => {
        dispatch(setStudents(data.students));
      },
    });
  }, []);

  useEffect(() => {
    students?.length === 0 && handleGetStudents();
  }, [students, handleGetStudents]);

  const [createStudent] = useMutation(CreateStudentMutation);

  const handleCreateStudent = (input: CreateStudentInputType) => {
    createStudent({
      variables: {
        createStudentInput: input,
      },
      onCompleted: (data) => {
        dispatch(setStudents([...students, data.createStudent]));
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

  const handleFormDataChange = (key: string, value: string | Date | MultiValue<OptionType>) => {
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
    studentData,
    error,
    handleFormDataChange,
    handleGetStudents,
    handleAddNewStudent,
    handleCreateStudent,
  };
}
