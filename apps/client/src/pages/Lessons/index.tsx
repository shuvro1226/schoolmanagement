import useLessons from "@/hooks/useLessons";
import { Lesson as LessonType } from "../../types/LessonTypes";
import Lesson from "./Lesson";
import AddLesson from "@/features/Lesson/AddLesson";
import { useEffect } from "react";

export default function Lessons() {
  const lessonHookObj = useLessons();
  const { lessons, handleGetLessons } = lessonHookObj;

  useEffect(() => {
    handleGetLessons();
  }, []);

  return (
    <div className="container">
      <div className="mb-4 text-left grid grid-cols-2">
        <span className="text-xl">Lessons</span>
        <AddLesson lessonHookObj={lessonHookObj} />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {lessons?.map((lesson: LessonType) => {
          return <Lesson key={lesson.id} lesson={lesson} />;
        })}
      </div>
    </div>
  );
}
