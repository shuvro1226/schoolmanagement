import { CreateLessonInput, Lesson } from "@/features/lesson/LessonTypes";
import dayjs from "dayjs";

export const mockCreateLessonInput: CreateLessonInput = {
  name: "",
  startDate: dayjs().toISOString(),
  endDate: dayjs().add(7, "day").toISOString(),
  students: ["1", "2"],
};

export const mockLessonDetail = {
  id: "1",
  name: "Test Lesson 1",
  startDate: new Date(),
  endDate: new Date(),
  students: [
    { label: "John Doe", value: "1" },
    { label: "Jane Doe", value: "2" },
  ],
};

export const mockLessons: Lesson[] = [
  {
    ...mockCreateLessonInput,
    id: "1",
    name: "Test Lesson 1",
    students: [
      { id: "student1", firstName: "John", lastName: "Doe" },
      { id: "student2", firstName: "Jane", lastName: "Doe" },
    ],
  },
  {
    ...mockCreateLessonInput,
    id: "2",
    name: "Test Lesson 2",
    students: [
      { id: "student1", firstName: "John", lastName: "Doe" },
      { id: "student2", firstName: "Jane", lastName: "Doe" },
    ],
  },
];

export const mockLessonsHookReturnData = {
  lessons: mockLessons,
  lessonData: mockLessonDetail,
  error: { show: false, message: "" },
  handleAddNewLesson: vi.fn(),
  handleFormDataChange: vi.fn(),
  handleGetLessons: vi.fn(),
  handleCreateLesson: vi.fn(),
};
