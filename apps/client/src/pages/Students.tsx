import AddStudent from "@/features/student/components/AddStudent";
import StudentsList from "@/features/student/components/StudentsList";
import { useStudents } from "@/features/student/hooks";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function Students(): JSX.Element {
  const studentHookObj = useStudents();
  const students = useSelector((state: RootState) => state.student.students);

  return (
    <div className="container">
      <div className="mb-4 text-center md:text-left grid grid-cols-1 md:grid-cols-2">
        <span className="text-xl mb-3">Students</span>
        <AddStudent studentHookObj={studentHookObj} />
      </div>
      <StudentsList students={students} />
    </div>
  );
}
