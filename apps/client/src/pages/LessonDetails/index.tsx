import dayjs from "dayjs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Student } from "@/types/StudentTypes";
import useLesson from "@/hooks/useLesson";
import AddStudentsToLesson from "@/features/Lesson/AddStudentsToLesson";
import { useEffect } from "react";

export default function LessonDetails() {
  const lessonDetailsHookObj = useLesson();
  const { lessonDetails, handleGetLessonByID } = lessonDetailsHookObj;

  const {
    name = "",
    startDate = "",
    endDate = "",
    students = [],
  } = lessonDetails;

  useEffect(() => {
    handleGetLessonByID();
  }, [])

  return (
    <div className="relative w-full">
      <AddStudentsToLesson lessonDetailsHookObj={lessonDetailsHookObj} />
      <span className="">{name}</span>
      <p>
        Start date:{" "}
        {dayjs(startDate, "YYYY-MM-DDTHH:mm:ssZ").format("DD.MM.YYYY")}
      </p>
      <p>
        End date: {dayjs(endDate, "YYYY-MM-DDTHH:mm:ssZ").format("DD.MM.YYYY")}
      </p>
      <Table>
        <TableCaption>Students enrolled for lesson "{name}".</TableCaption>
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
    </div>
  );
}
