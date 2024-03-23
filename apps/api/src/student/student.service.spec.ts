import { Repository } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import {
  mockCreateStudentInput,
  mockStudentIds,
  mockStudents,
} from './student.mock';

describe('StudentService', () => {
  let studentService: StudentService;
  let mockRepository: jest.Mocked<Repository<Student>>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: getRepositoryToken(Student),
          useFactory: () => ({
            findOneBy: jest.fn(),
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          }),
        },
      ],
    }).compile();

    studentService = module.get(StudentService);
    mockRepository = module.get(getRepositoryToken(Student));
  });

  it('should be defined', () => {
    expect(studentService).toBeDefined();
  });

  it('should fetch all students', async () => {
    mockRepository.find.mockResolvedValue(mockStudents);
    const result = await studentService.getAllStudents();
    expect(result).toEqual(mockStudents);
  });

  it('should fetch student by ID', async () => {
    mockRepository.findOneBy.mockResolvedValue(mockStudents[0]);
    const result = await studentService.getStudent('1');
    expect(result).toEqual(mockStudents[0]);
    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: '1' });
  });

  it('should create a new student', async () => {
    mockRepository.create.mockReturnValue(mockStudents[0]);
    mockRepository.save.mockResolvedValue(mockStudents[0]);

    const result = await studentService.createStudent(mockCreateStudentInput);
    expect(result).toEqual(mockStudents[0]);
    expect(mockRepository.create).toHaveBeenCalledWith({
      id: expect.any(String),
      ...mockCreateStudentInput,
    });
    expect(mockRepository.save).toHaveBeenCalledWith(mockStudents[0]);
  });

  it('should fetch multiple students by ID', async () => {
    mockRepository.find.mockResolvedValue(mockStudents);
    const result = await studentService.getManyStudents(mockStudentIds);
    expect(result).toEqual(mockStudents);
    expect(mockRepository.find).toHaveBeenCalledWith({
      where: {
        id: {
          $in: mockStudentIds,
        } as any,
      },
    });
  });
});
