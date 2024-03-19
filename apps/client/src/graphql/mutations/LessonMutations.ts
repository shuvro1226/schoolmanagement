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

export const AssignStudentsToLessonMutation = gql`
  mutation assignStudentsToLesson($lessonId: ID!, $students: [ID!]!) {
    assignStudentsToLesson(
      assignStudentsToLessonInput: {
        lessonId: $lessonId
        studentIds: $students
      }
    ) {
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
