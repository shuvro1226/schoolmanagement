import { CreateLessonInput, Lesson } from "@/types/LessonTypes";

export const mockCreateLessonInput: CreateLessonInput = {
  name: "Test Lesson",
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  students: ["1", "2"],
};

export const mockLessons: Lesson[] = [
  {
    ...mockCreateLessonInput,
    id: "1",
    students: [
      { id: "student1", firstName: "John", lastName: "Doe" },
      { id: "student2", firstName: "Jane", lastName: "Doe" },
    ],
  },
  {
    ...mockCreateLessonInput,
    id: "2",
    students: [
      { id: "student1", firstName: "John", lastName: "Doe" },
      { id: "student2", firstName: "Jane", lastName: "Doe" },
    ],
  },
];
