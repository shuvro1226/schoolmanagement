import { useLazyQuery, useMutation } from "@apollo/client";
import { MultiValue } from "react-select";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { getAllLessons } from "@/graphql/queries/LessonQueries";
import {
  CreateLessonInput,
  Lesson,
  LessonFormInputType,
  LessonHookReturnType,
} from "@/features/lesson/types";
import { CreateLessonMutation } from "@/graphql/mutations/LessonMutations";
import { OptionType } from "@/types/GenericTypes";
import { setLessons } from "@/state/lesson/lessonsSlice";
import { RootState } from "@/state/store";
import { useCallback, useEffect, useState } from "react";
import { errorDefaultValue, lessonDataDefaultValue } from "../consts";

export default function useLessons(): LessonHookReturnType {
  const dispatch = useDispatch();
  const lessons = useSelector((state: RootState) => state.lesson.lessons);

  // Lazy query to get all lessons
  const [getLessons] = useLazyQuery(getAllLessons, {
    fetchPolicy: "no-cache",
  });
  // Mutation to create a new lesson
  const [createLesson] = useMutation(CreateLessonMutation);

  const [lessonData, setLessonData] = useState<LessonFormInputType>({
    ...lessonDataDefaultValue,
  });
  const [error, setError] = useState(errorDefaultValue);

  const handleCreateLesson = (input: CreateLessonInput) => {
    createLesson({
      variables: {
        createLessonInput: input,
      },
      onCompleted: (data: { createLesson: Lesson }) => {
        dispatch(setLessons([...lessons, data.createLesson])); // Adding new lesson to the list of lessons
        setLessonData({ ...lessonDataDefaultValue }); // Setting lesson data to default value after creating lesson
      },
    });
  };

  const handleGetLessons = useCallback(() => {
    getLessons({
      onCompleted: (data) => {
        dispatch(setLessons(data.lessons));
      },
    });
  }, []);

  useEffect(() => {
    lessons?.length === 0 && handleGetLessons();
  }, [lessons, handleGetLessons]);

  const handleFormDataChange = (
    key: string,
    value: string | Date | MultiValue<OptionType>
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
    // set error object to default value before checking for errors
    let errorObject = {
      ...errorDefaultValue,
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
    lessonData,
    error,
    handleAddNewLesson,
    handleFormDataChange,
    handleGetLessons,
    handleCreateLesson,
  };
}
