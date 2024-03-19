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

export const getLessonByIDQuery = gql`
  query getLessonByID($id: String!) {
    lesson(id: $id) {
      id
      name
      startDate
      endDate
      students {
        id
        firstName
        lastName
      }
    }
  }
`;
