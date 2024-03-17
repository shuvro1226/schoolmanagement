import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { getAllLessons } from "@/graphql/queries/LessonQueries";
import { Lesson } from "@/types/LessonTypes";

export default function useLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [handleGetLessons] = useLazyQuery(getAllLessons);

  useEffect(() => {
    handleGetLessons({
      onCompleted: (data) => {
        setLessons(data.lessons);
      },
    });
  }, []);

  return {
    lessons
  }
}
