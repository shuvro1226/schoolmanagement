import AddLesson from "@/features/lesson/components/AddLesson";
import { useEffect } from "react";
import LessonsList from "@/features/lesson/components/LessonsList";
import { useStudents } from "@/features/student/hooks";
import { useLessons } from "@/features/lesson/hooks/index";

export default function Lessons(): JSX.Element {
  const lessonHookObj = useLessons();

  const studentsHookObj = useStudents();
  const { handleGetStudents } = studentsHookObj;

  useEffect(() => {
    handleGetStudents();
  }, []);

  return (
    <div className="container">
      <div className="mb-4 text-center md:text-left grid grid-cols-1 md:grid-cols-2">
        <span className="text-xl mb-3">List of Lessons</span>
        <AddLesson
          lessonHookObj={lessonHookObj}
        />
      </div>
      <LessonsList />
    </div>
  );
}
