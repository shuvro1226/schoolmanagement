import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddStudent from "@/features/Student/AddStudent";
import useStudent from "@/hooks/useStudent";
import { Student } from "@/types/StudentTypes";
import { useEffect } from "react";

export default function Students() {
  const studentHookObj = useStudent();
  const { students, handleGetStudents } = studentHookObj;

  useEffect(() => {
    handleGetStudents();
  }, [])
  
  return (
    <>
      <h2>Students</h2>
      <AddStudent studentHookObj={studentHookObj} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students?.map((student: Student) => {
            return (
              <TableRow>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
