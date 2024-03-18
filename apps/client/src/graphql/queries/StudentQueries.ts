import { gql } from "@apollo/client";

export const getAllStudents = gql`
  query Students {
    students {
      id
      firstName
      lastName
    }
  }
`;
