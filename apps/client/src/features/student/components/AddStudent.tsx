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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { StudentHookReturnType } from "@/types/StudentTypes";

export default function AddStudent(props: {
  studentHookObj: StudentHookReturnType;
}): JSX.Element {
  const { studentHookObj } = props;
  const {
    error,
    studentData,
    handleFormDataChange,
    handleAddNewStudent,
  } = studentHookObj;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-40">
          Add New Student
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
            <Label htmlFor="firstName" className="text-right">
              First Name
            </Label>
            <Input
              id="firstName"
              defaultValue={studentData.firstName}
              className="col-span-3"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormDataChange("firstName", e.target.value)
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Name
            </Label>
            <Input
              id="lastName"
              defaultValue={studentData.lastName}
              className="col-span-3"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFormDataChange("lastName", e.target.value)
              }
            />
          </div>
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
