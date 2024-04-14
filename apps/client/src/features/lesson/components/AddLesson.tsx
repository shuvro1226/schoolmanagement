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

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Student,
} from "@/features/student/StudentTypes";
import { LessonHookReturnType } from "@/features/lesson/types";
import { addLessonFormConfig } from "../config";
import FormRenderer from "@/components/form";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function AddLesson(props: {
  lessonHookObj: LessonHookReturnType;
}): JSX.Element {
  const { lessonHookObj } = props;

  const { lessonData, error, handleAddNewLesson, handleFormDataChange } =
    lessonHookObj;
    const students = useSelector((state: RootState) => state.student.students);

  const options = students.map((student: Student) => {
    return { value: student.id, label: student.firstName + student.lastName };
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-40 justify-self-center md:justify-self-end">
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
          <FormRenderer
            formConfig={addLessonFormConfig(
              lessonData,
              handleFormDataChange,
              options
            )}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={(e) => handleAddNewLesson(e)}>
              Save lesson
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
