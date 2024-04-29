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
import { StudentHookReturnType } from "@/features/student/StudentTypes";
import { TextInput } from "@/components/form";

export default function AddStudent(props: {
  studentHookObj: StudentHookReturnType;
}): JSX.Element {
  const { studentHookObj } = props;
  const { error, studentData, handleFormDataChange, handleAddNewStudent } =
    studentHookObj;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"  className="w-40 justify-self-center md:justify-self-end">
          Add New Student
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-neutral-950">
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
          <TextInput
            config={{
              identifier: "firstName",
              label: "First Name",
              defaultValue: studentData.firstName,
              handleChange: handleFormDataChange,
              wrapperClass: "grid grid-cols-4 items-center gap-4",
            }}
          />
          <TextInput
            config={{
              identifier: "lastName",
              label: "Last Name",
              defaultValue: studentData.lastName,
              handleChange: handleFormDataChange,
              wrapperClass: "grid grid-cols-4 items-center gap-4",
            }}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={(e) => handleAddNewStudent(e)}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
