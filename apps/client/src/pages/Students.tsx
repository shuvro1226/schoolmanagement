import AddStudent from "@/features/student/components/AddStudent";
import StudentsList from "@/features/student/components/StudentsList";
import { useStudents } from "@/features/student/hooks";
import { useEffect } from "react";

export default function Students(): JSX.Element {
  const studentHookObj = useStudents();
  const { students, handleGetStudents } = studentHookObj;

  useEffect(() => {
    handleGetStudents();
  }, []);

  return (
    <>
      <h2>Students</h2>
      <AddStudent studentHookObj={studentHookObj} />
      <StudentsList students={students} />
    </>
  );
}
