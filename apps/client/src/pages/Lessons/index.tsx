import { useCallback, useEffect, useState } from "react";
import { Lesson } from "../../types/LessonTypes";
export default function Lessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
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
      .then((data: { data: { lessons: Lesson[] } }) => {
        setLessons(data.data.lessons);
      });
  }, []);

  useEffect(() => {
    handleFetchGreeting();
  }, [handleFetchGreeting]);

  return (
    <>
      {lessons?.map((lesson: Lesson) => {
        return (
          <div key={lesson.id}>
            <h3>{lesson.name}</h3>
          </div>
        );
      })}
    </>
  );
}
