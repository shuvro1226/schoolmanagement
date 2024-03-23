import { Test, TestingModule } from '@nestjs/testing';
import { LessonService } from './lesson.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {
  mockAssignStudentsToLesson,
  mockCreateLessonInput,
  mockLessons,
} from './lesson.mocks';

describe('LessonService', () => {
  let service: LessonService;
  let mockRepository: jest.Mocked<Repository<Lesson>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LessonService,
        {
          provide: getRepositoryToken(Lesson),
          useFactory: () => ({
            findOneBy: jest.fn(),
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          }),
        },
      ],
    }).compile();

    service = module.get<LessonService>(LessonService);
    mockRepository = module.get(getRepositoryToken(Lesson));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a lesson by id', async () => {
    mockRepository.findOneBy.mockResolvedValue(mockLessons[0]);
    const result = await service.getLesson('1');
    expect(result).toEqual(mockLessons[0]);
    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: '1' });
  });

  it('should get a list of lessons', async () => {
    mockRepository.find.mockResolvedValue(mockLessons);
    const lessons = await service.getAllLessons();
    expect(lessons).toEqual(mockLessons);
  });

  it('should create a new lesson', async () => {
    mockRepository.create.mockReturnValue(mockLessons[0]);
    mockRepository.save.mockResolvedValue(mockLessons[0]);

    const response = await service.createLesson(mockCreateLessonInput);
    expect(response).toEqual(mockLessons[0]);
    expect(mockRepository.create).toHaveBeenCalledWith({
      id: expect.any(String), // Ensure that a UUID is generated for the ID
      ...mockCreateLessonInput,
    });
    expect(mockRepository.save).toHaveBeenCalledWith(mockLessons[0]);
  });

  it('should assign students to a lesson', async () => {
    mockRepository.save.mockResolvedValue(mockLessons[0]);
    mockRepository.findOneBy.mockResolvedValue(mockLessons[0]);

    const response = await service.assignStudentsToLesson(
      mockAssignStudentsToLesson,
    );

    expect(response).toEqual(mockLessons[0]);
    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: '1' });
    expect(mockLessons[0].students).toEqual(
      mockAssignStudentsToLesson.studentIds,
    );
    expect(mockRepository.save).toHaveBeenCalledWith(mockLessons[0]);
  });
});
