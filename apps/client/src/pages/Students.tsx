import AddStudent from "@/features/student/components/AddStudent";
import StudentsList from "@/features/student/components/StudentsList";
import { useStudents } from "@/features/student/hooks";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function Students(): JSX.Element {
  const studentHookObj = useStudents();
  const students = useSelector((state: RootState) => state.student.students);

  return (
    <>
      <h2>Students</h2>
      <AddStudent studentHookObj={studentHookObj} />
      <StudentsList students={students} />
    </>
  );
}
