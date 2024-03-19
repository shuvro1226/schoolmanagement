import { useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { getLessonByIDQuery } from "@/graphql/queries/LessonQueries";
import { Lesson, LessonDetailsHookReturnType } from "@/types/LessonTypes";
import { useParams } from "react-router-dom";
import { AssignStudentsToLessonMutation } from "@/graphql/mutations/LessonMutations";
import { OptionType } from "@/types/types";
import { Student } from "@/types/StudentTypes";

export default function useLesson(): LessonDetailsHookReturnType {
  const { lessonId } = useParams();
  const [lessonDetails, setLessonDetails] = useState<Lesson>({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    students: [],
  });
  const [newStudents, setNewStudents] = useState<OptionType[] | null>(null);
  const [assignStudentsToLesson] = useMutation(AssignStudentsToLessonMutation);
  const [getLessonByID] = useLazyQuery(getLessonByIDQuery);

  const handleUpdateStudents = (value: OptionType[] | null) => {
    setNewStudents(value);
  }

  const handleGetLessonByID = () => {
    getLessonByID({
      variables: { id: lessonId },
      onCompleted: (data: { lesson: Lesson }) => {
        setLessonDetails(data.lesson);
        const currentStudents = data.lesson.students?.map(
          (student: Student) => {
            return {
              value: student.id,
              label: student.firstName + student.lastName,
            };
          }
        );
        setNewStudents(currentStudents);
      },
    });
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
          setLessonDetails(data.assignStudentsToLesson);
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
