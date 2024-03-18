import { gql } from "@apollo/client";

export const CreateStudentMutation = gql`
  mutation createStudent($createStudentInput: CreateStudentInput!) {
    createStudent(createStudentInput: $createStudentInput) {
      id
      firstName
      lastName
    }
  }
`;
