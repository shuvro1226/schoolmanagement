import { mockLessonDetailsHookReturnData } from "@/__mocks__/lesson.mocks";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { describe, it, expect, afterAll, vi } from "vitest";
import AddStudentsToLesson from "../components/AddStudentsToLesson";
import { mockStudentsHookReturnData } from "@/__mocks__/student.mock";
import { render } from "@/test/ProviderWrapper";

const user = userEvent.setup();

describe("AddStudentsToLesson", async () => {
  it("should check if add students to lesson modal is triggered and closes on clicking save changes", async () => {
    render(
      <AddStudentsToLesson
        lessonDetailsHookObj={mockLessonDetailsHookReturnData}
        studentsHookObj={mockStudentsHookReturnData}
      />
    );

    const { handleAddStudentsToLesson } = mockLessonDetailsHookReturnData;

    const addStudentsToLessonButton = screen.getByRole("button", {
      name: /Add Students To Lesson/i,
    });
    await user.click(addStudentsToLessonButton);
    // checks if dialog is opened
    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    const saveChangesButton = screen.getByRole("button", {
      name: /Save changes/i,
    });
    await user.click(saveChangesButton);
    // checks if handleAddStudentsToLesson is called once
    expect(handleAddStudentsToLesson).toHaveBeenCalledTimes(1);
    // checks if dialog is closed
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

afterAll(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});
