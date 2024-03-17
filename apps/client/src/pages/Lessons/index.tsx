import { useCallback, useEffect, useState } from "react";
import { Lesson as LessonType } from "../../types/LessonTypes";
import Lesson from "./Lesson";

export default function Lessons() {
  const [lessons, setLessons] = useState<LessonType[]>([]);
  const handleFetchGreeting = useCallback(() => {
    fetch(`http://${import.meta.env.VITE_BACKEND_HOST}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "query Lessons { lessons { id name startDate endDate } }",
      }),
    })
      .then((response) => response.json())
      .then((data: { data: { lessons: LessonType[] } }) => {
        setLessons(data.data.lessons);
      });
  }, []);

  useEffect(() => {
    handleFetchGreeting();
  }, [handleFetchGreeting]);

  return (
    <div className="container">
      <h2 className="text-xl mb-4">Lessons</h2>
      <div className="grid grid-cols-3 gap-8">
        {lessons?.map((lesson: LessonType) => {
          return <Lesson key={lesson.id} lesson={lesson} />;
        })}
      </div>
    </div>
  );
}
