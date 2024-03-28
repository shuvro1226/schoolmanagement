import AddLesson from "@/features/lesson/components/AddLesson";
import { useEffect } from "react";
import LessonsList from "@/features/lesson/components/LessonsList";
import { useStudents } from "@/features/student/hooks";
import { useLessons } from "@/features/lesson/hooks/index";

export default function Lessons(): JSX.Element {
  const lessonHookObj = useLessons();
  const { lessons, handleGetLessons } = lessonHookObj;

  const studentsHookObj = useStudents();
  const { handleGetStudents } = studentsHookObj;

  useEffect(() => {
    handleGetLessons();
    handleGetStudents();
  }, []);

  return (
    <div className="container">
      <div className="mb-4 text-left grid grid-cols-2">
        <span className="text-xl">Lessons</span>
        <AddLesson
          lessonHookObj={lessonHookObj}
          studentsHookObj={studentsHookObj}
        />
      </div>
      <LessonsList lessons={lessons} />
    </div>
  );
}
