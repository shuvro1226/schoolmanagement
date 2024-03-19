import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Select from "react-select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

import useStudent from "@/hooks/useStudent";
import { Student } from "@/types/StudentTypes";
import { LessonDetailsHookReturnType } from "@/types/LessonTypes";

export default function AddStudentsToLesson(props: {
  lessonDetailsHookObj: LessonDetailsHookReturnType;
}) {
  const { lessonDetailsHookObj } = props;
  const { students, handleGetStudents } = useStudent();
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              Students
            </Label>
            <Select
              className="w-64"
              value={newStudents}
              onChange={(value: any) =>
                handleUpdateStudents(value)
              }
              options={options}
              isMulti={true}
            />
          </div>
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
