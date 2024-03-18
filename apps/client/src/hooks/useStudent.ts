import { getAllStudents } from "@/graphql/queries/StudentQueries";
import { Student } from "@/types/StudentTypes";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";

export default function useStudent() {
  const [students, setStudents] = useState<Student[]>([]);
  const [getStudents] = useLazyQuery(getAllStudents);

  const handleGetStudents = () => {
    getStudents({
      onCompleted: (data) => {
        setStudents(data.students);
      },
    });
  };

  return {
    students,
    handleGetStudents
  };
}
