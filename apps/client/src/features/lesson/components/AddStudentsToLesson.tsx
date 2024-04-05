import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

import { Student, StudentHookReturnType } from "@/features/student/StudentTypes";
import { LessonDetailsHookReturnType } from "@/features/lesson/LessonTypes";
import { MultiSelectInput } from "@/components/form";

export default function AddStudentsToLesson(props: {
  lessonDetailsHookObj: LessonDetailsHookReturnType;
  studentsHookObj: StudentHookReturnType;
}): JSX.Element {
  const { lessonDetailsHookObj, studentsHookObj } = props;
  const { students, handleGetStudents } = studentsHookObj;
  const { newStudents, handleUpdateStudents, handleAddStudentsToLesson } =
    lessonDetailsHookObj;

  useEffect(() => {
    handleGetStudents();
  }, []);

  const options = students.map((student: Student) => {
    return { value: student.id, label: student.firstName + student.lastName };
  });

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <Button variant="outline" className="w-50 flex mb-4">
          Add Students To Lesson
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Create new lesson</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <MultiSelectInput
            config={{
              identifier: "students",
              label: "Students",
              defaultValue: newStudents,
              handleChange: handleUpdateStudents,
              wrapperClass: "grid grid-cols-4 items-center gap-4",
              options,
            }}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              onClick={(e) => handleAddStudentsToLesson(e)}
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
