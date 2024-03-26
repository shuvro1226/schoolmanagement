import useLessons from "@/hooks/useLessons";
import AddLesson from "@/features/lesson/components/AddLesson";
import { useEffect } from "react";
import LessonsList from "@/features/lesson/components/LessonsList";

export default function Lessons(): JSX.Element {
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
      <LessonsList lessons={lessons} />
    </div>
  );
}
