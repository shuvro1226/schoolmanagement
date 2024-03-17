import { gql } from "@apollo/client";

export const getAllLessons = gql`
  query Lessons {
    lessons {
      id
      name
      startDate
      endDate
    }
  }
`;

export const getLessonByID = gql`
  query getLessonByID($id: String!) {
    lesson(id: $id) {
      id
      name
      startDate
      endDate
      students {
        firstName
        lastName
      }
    }
  }
`;
