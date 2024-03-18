import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { getLessonByID } from "@/graphql/queries/LessonQueries";
import { Lesson } from "@/types/LessonTypes";
import { useParams } from "react-router-dom";

export default function useLesson() {
  const { lessonId } = useParams();
  const [lessonDetails, setLessonDetails] = useState<Lesson>({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    students: [],
  });
  const [handleGetLessonByID] = useLazyQuery(getLessonByID);

  useEffect(() => {
    handleGetLessonByID({
      variables: { id: lessonId },
      onCompleted: (data) => {
        setLessonDetails(data.lesson);
      },
    });
  }, []);

  return {
    lessonDetails,
  };
}
