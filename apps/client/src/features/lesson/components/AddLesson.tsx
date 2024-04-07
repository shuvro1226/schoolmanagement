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
  StudentHookReturnType,
} from "@/features/student/StudentTypes";
import { LessonHookReturnType } from "@/features/lesson/types";
import { addLessonFormConfig } from "../config";
import FormRenderer from "@/components/form";

export default function AddLesson(props: {
  lessonHookObj: LessonHookReturnType;
  studentsHookObj: StudentHookReturnType;
}): JSX.Element {
  const { lessonHookObj, studentsHookObj } = props;

  const { lessonData, error, handleAddNewLesson, handleFormDataChange } =
    lessonHookObj;
  const { students } = studentsHookObj;

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
