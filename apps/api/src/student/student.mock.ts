import { Student } from './student.entity';

export const mockCreateStudentInput = {
  firstName: 'John',
  lastName: 'Doe',
};

export const mockStudents: Student[] = [
  {
    _id: '1',
    id: '1',
    ...mockCreateStudentInput,
  },
  {
    _id: '2',
    id: '2',
    ...mockCreateStudentInput,
  },
];

export const mockStudentIds = ['1', '2'];
