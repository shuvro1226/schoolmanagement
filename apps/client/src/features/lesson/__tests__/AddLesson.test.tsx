import { mockLessonsHookReturnData } from "@/__mocks__/lesson.mocks";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import AddLesson from "../components/AddLesson";
import { mockStudentsHookReturnData } from "@/__mocks__/student.mock";
import { describe, it, expect, afterAll, vi } from "vitest";
import { LessonHookReturnType } from "../types";
import { render } from "@/test/ProviderWrapper";

const user = userEvent.setup();

describe("AddLesson", async () => {
  it("should check if add lesson modal is triggered on clicking add new lesson and closing on clicking save lesson", async () => {
    render(
      <AddLesson
        lessonHookObj={mockLessonsHookReturnData}
        studentsHookObj={mockStudentsHookReturnData}
      />
    );

    const { handleAddNewLesson } = mockLessonsHookReturnData;

    // checks if create modal is opened when button is clicked
    const addNewLessonButton = screen.getByRole("button", {
      name: /add new lesson/i,
    });
    await user.click(addNewLessonButton);
    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    const createLessonButton = screen.getByRole("button", {
      name: /save lesson/i,
    });
    await user.click(createLessonButton);
    expect(handleAddNewLesson).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should check if alert is triggered if form is submitted with an empty name", async () => {
    const updatedmockLessonsHookReturnData: LessonHookReturnType = {
      ...mockLessonsHookReturnData,
      error: { show: true, message: "Name can not be empty!" },
      handleAddNewLesson: vi.fn((e) => e.preventDefault()),
    }; 
    render(
      <AddLesson
        lessonHookObj={updatedmockLessonsHookReturnData}
        studentsHookObj={mockStudentsHookReturnData}
      />
    );

    // checks if create modal is opened when button is clicked
    const addNewLessonButton = screen.getByRole("button", {
      name: /add new lesson/i,
    });
    await user.click(addNewLessonButton);

    const createLessonButton = screen.getByRole("button", {
      name: /save lesson/i,
    });
    await user.click(createLessonButton);
    // checks if alert is triggered
    expect(screen.getByText("Name can not be empty!")).toBeInTheDocument();
  });

  it("should check if formDataChange is called on field value is changed", async () => {
    render(
      <AddLesson
        lessonHookObj={mockLessonsHookReturnData}
        studentsHookObj={mockStudentsHookReturnData}
      />
    );

    const { handleFormDataChange } = mockLessonsHookReturnData;

    const addNewLessonButton = screen.getByRole("button", {
      name: /add new lesson/i,
    });
    await user.click(addNewLessonButton);

    const lessonNameInput = screen.getByRole("textbox", { name: /name/i });
    // checks if input is present
    expect(lessonNameInput).toBeInTheDocument();
    await user.type(lessonNameInput, "Test Lesson");
    // checks if handleFormDataChange is called 11 times
    expect(handleFormDataChange).toHaveBeenCalledTimes(11);
  });
});

afterAll(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});
