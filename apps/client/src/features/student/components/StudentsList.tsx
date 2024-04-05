import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Student } from "@/features/student/StudentTypes";

type Props = {
  students: Student[];
  caption?: string;
};

export default function StudentsList(props: Props): JSX.Element {
  const { students, caption = "" } = props;
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students?.map((student: Student) => {
          return (
            <TableRow key={student.id}>
              <TableCell>{student.firstName}</TableCell>
              <TableCell>{student.lastName}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
