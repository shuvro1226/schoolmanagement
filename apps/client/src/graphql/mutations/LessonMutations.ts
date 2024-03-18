import { gql } from "@apollo/client";

export const CreateLessonMutation = gql`
  mutation CreateLesson($createLessonInput: CreateLessonInput!) {
    createLesson(createLessonInput: $createLessonInput) {
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
