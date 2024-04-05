import { useLesson } from "@/features/lesson/hooks";
import AddStudentsToLesson from "@/features/lesson/components/AddStudentsToLesson";
import { useEffect } from "react";
import StudentsList from "@/features/student/components/StudentsList";
import LessonInfo from "@/features/lesson/components/LessonInfo";
import { useStudents } from "@/features/student/hooks";

export default function LessonDetails(): JSX.Element {
  const lessonDetailsHookObj = useLesson();
  const { lessonDetails, handleGetLessonByID } = lessonDetailsHookObj;

  const studentsHookObj = useStudents();

  const { name = "", students = [] } = lessonDetails;

  useEffect(() => {
    handleGetLessonByID();
  }, []);

  return (
    <div className="relative w-full">
      <AddStudentsToLesson
        lessonDetailsHookObj={lessonDetailsHookObj}
        studentsHookObj={studentsHookObj}
      />
      <LessonInfo lessonDetails={lessonDetails} />
      <StudentsList
        students={students}
        caption={`Students enrolled for lesson "${name}".`}
      />
    </div>
  );
}
