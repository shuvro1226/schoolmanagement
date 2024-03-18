import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Select, { MultiValue } from "react-select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import DatePicker from "react-datepicker";
import { useEffect } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import useStudent from "@/hooks/useStudent";
import { Student } from "@/types/StudentTypes";
import { OptionType } from "@/types/types";
import { LessonHookReturnType } from "@/types/LessonTypes";

export default function AddLesson(props: { lessonHookObj: LessonHookReturnType }) {
  const { lessonHookObj } = props;
  const { students, handleGetStudents } = useStudent();
  const { lessonData, error, handleAddNewLesson, handleFormDataChange } =
    lessonHookObj;

  useEffect(() => {
    handleGetStudents();
  }, []);

  const options = students.map((student: Student) => {
    return { value: student.id, label: student.firstName + student.lastName };
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-40">
          Add New Lesson
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Create new lesson</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {error.show && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={lessonData.name}
              className="col-span-3"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormDataChange("name", e.target.value)
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="startDate" className="text-right">
              Start Date
            </Label>
            <DatePicker
              className="outline outline-1 p-2"
              selected={lessonData.startDate}
              onChange={(date: Date) => handleFormDataChange("startDate", date)}
              dateFormat={"d.MM.yyyy"}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              End Date
            </Label>
            <DatePicker
              className="outline outline-1 p-2"
              selected={lessonData.endDate}
              onChange={(date: Date) => handleFormDataChange("endDate", date)}
              dateFormat={"d.MM.yyyy"}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              Students
            </Label>
            <Select
              className="w-64"
              value={lessonData.students}
              onChange={(value: MultiValue<OptionType | null>) =>
                handleFormDataChange("students", value)
              }
              options={options}
              isMulti={true}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={(e) => handleAddNewLesson(e)}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
