import { useCallback, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { getLessonByIDQuery } from "@/graphql/queries/LessonQueries";
import { Lesson, LessonDetailsHookReturnType } from "@/features/lesson/types";
import { useParams } from "react-router-dom";
import { AssignStudentsToLessonMutation } from "@/graphql/mutations/LessonMutations";
import { OptionType } from "@/types/GenericTypes";
import { Student } from "@/features/student/StudentTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { setLessons } from "@/state/lesson/lessonsSlice";
import { MultiValue } from "react-select";

export default function useLesson(): LessonDetailsHookReturnType {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const [lessonDetails, setLessonDetails] = useState<Lesson>({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    students: [],
  });
  const [newStudents, setNewStudents] = useState<MultiValue<OptionType>>([]);
  const [assignStudentsToLesson] = useMutation(AssignStudentsToLessonMutation);
  const [getLessonByID] = useLazyQuery(getLessonByIDQuery);

  const lessons = useSelector((state: RootState) => state.lesson.lessons);

  const handleSetNewStudentsFromData = useCallback((students: Student[]) => {
    const currentStudents = students?.map((student: Student) => {
      return {
        value: student.id,
        label: student.firstName + student.lastName,
      };
    });
    setNewStudents(currentStudents);
  }, []);

  const handleGetLessonByID = useCallback(() => {
    const lessonDetails = lessons.find(
      (lesson: Lesson) => lesson.id === lessonId
    );

    // If the lesson is already in the store, use that data
    if (lessons?.length > 0 && lessonDetails) {
      setLessonDetails(lessonDetails);
      handleSetNewStudentsFromData(lessonDetails.students);
      // Otherwise, fetch the lesson data from the server
    } else {
      getLessonByID({
        variables: { id: lessonId },
        onCompleted: (data: { lesson: Lesson }) => {
          setLessonDetails(data.lesson);
          handleSetNewStudentsFromData(data.lesson.students);
        },
      });
    }
  }, [lessonId, getLessonByID, handleSetNewStudentsFromData, lessons]);

  useEffect(() => {
    handleGetLessonByID();
  }, [handleGetLessonByID]);

  const handleUpdateStudents = (_: string, value: string | Date | MultiValue<OptionType>) => {
    setNewStudents(value as MultiValue<OptionType>);
  };

  const handleAddStudentsToLesson = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!newStudents || newStudents?.length === 0) {
      e.preventDefault();
    } else {
      const studentsArray = !newStudents ? [] : newStudents;
      assignStudentsToLesson({
        variables: {
          lessonId,
          students: studentsArray?.map(
            (student: OptionType): string => student.value
          ),
        },
        onCompleted: (data) => {
          const lessonDetails = lessons.find(
            (lesson: Lesson) => data.assignStudentsToLesson.id === lesson.id
          );
          if (lessonDetails) {
            const updatedLessons = lessons.map((lesson: Lesson) => {
              if (lesson.id === data.assignStudentsToLesson.id) {
                return data.assignStudentsToLesson;
              }
              return lesson;
            });
            dispatch(setLessons(updatedLessons));
          } else {
            setLessonDetails(data.assignStudentsToLesson);
          }
        },
      });
    }
  };

  return {
    lessonDetails,
    newStudents,
    handleGetLessonByID,
    handleUpdateStudents,
    handleAddStudentsToLesson,
  };
}
