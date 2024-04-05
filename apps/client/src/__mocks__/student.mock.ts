export const mockStudents = [
  { id: "student1", firstName: "John", lastName: "Doe" },
  { id: "student2", firstName: "Jane", lastName: "Doe" },
];

export const mockStudentsHookReturnData = {
  students: mockStudents,
  studentData: { firstName: "John", lastName: "Doe" },
  error: { show: false, message: "" },
  handleAddNewStudent: vi.fn(),
  handleFormDataChange: vi.fn(),
  handleGetStudents: vi.fn(),
  handleCreateStudent: vi.fn(),
};
