import { useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { getAllLessons } from "@/graphql/queries/LessonQueries";
import {
  CreateLessonInput,
  Lesson,
  LessonFormInputType,
  LessonHookReturnType,
} from "@/types/LessonTypes";
import { CreateLessonMutation } from "@/graphql/mutations/LessonMutations";
import dayjs from "dayjs";
import { OptionType } from "@/types/types";
import { MultiValue } from "react-select";

export default function useLessons(): LessonHookReturnType {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [getLessons] = useLazyQuery(getAllLessons, {
    fetchPolicy: "no-cache",
  });
  const [createLesson] = useMutation(CreateLessonMutation);

  const handleCreateLesson = (input: CreateLessonInput) => {
    createLesson({
      variables: {
        createLessonInput: input,
      },
      onCompleted: () => {
        handleGetLessons();
      },
    });
  };

  const handleGetLessons = () => {
    getLessons({
      onCompleted: (data) => {
        setLessons(data.lessons);
      },
    });
  };

  const [lessonData, setLessonData] = useState<LessonFormInputType>({
    name: "",
    startDate: dayjs().toDate(),
    endDate: dayjs().add(7, "day").toDate(),
    students: null,
  });
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  const handleFormDataChange = (
    key: string,
    value: string | Date | MultiValue<OptionType | null>
  ) => {
    setLessonData({
      ...lessonData,
      [key]: value,
    });
  };

  const handleAddNewLesson = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { name, startDate, endDate, students } = lessonData;
    let errorObject = {
      show: false,
      message: "",
    };
    if (name === "") {
      errorObject = {
        show: true,
        message: "Name can not be empty!",
      };
    } else if (dayjs(endDate).isBefore(dayjs(startDate))) {
      errorObject = {
        show: true,
        message: "End date needs to be after start date!",
      };
    }
    setError(errorObject);
    if (errorObject.show) {
      e.preventDefault();
    } else {
      const studentsArray = !students ? [] : students;
      const input: CreateLessonInput = {
        name,
        startDate: dayjs(startDate).format("YYYY-MM-DDThh:mm:ssZ"),
        endDate: dayjs(endDate).format("YYYY-MM-DDThh:mm:ssZ"),
        students: studentsArray?.map(
          (student: OptionType): string => student.value
        ),
      };
      handleCreateLesson(input);
    }
  };

  return {
    lessons,
    lessonData,
    error,
    handleAddNewLesson,
    handleFormDataChange,
    handleGetLessons,
    handleCreateLesson,
  };
}
