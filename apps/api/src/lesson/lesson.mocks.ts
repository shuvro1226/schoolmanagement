import { Lesson } from './lesson.entity';
import { AssignStudentsToLessonInput, CreateLessonInput } from './lesson.input';

export const mockCreateLessonInput: CreateLessonInput = {
  name: 'Test Lesson',
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  students: ['1', '2'],
};

export const mockLessons: Lesson[] = [
  {
    _id: '1',
    id: '1',
    ...mockCreateLessonInput,
  },
  {
    _id: '2',
    id: '2',
    ...mockCreateLessonInput,
  },
];

export const mockAssignStudentsToLesson: AssignStudentsToLessonInput = {
  lessonId: '1',
  studentIds: ['3', '4'],
};
