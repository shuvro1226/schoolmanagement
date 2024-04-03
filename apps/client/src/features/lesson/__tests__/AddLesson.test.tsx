import { mockLessonsHookReturnData } from "@/__mocks__/lesson.mocks";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import AddLesson from "../components/AddLesson";
import { mockStudentsHookReturnData } from "@/__mocks__/student.mock";

const user = userEvent.setup();

describe("AddLesson", async () => {
  it("should check if add lesson modal is triggered and create lesson works", async () => {
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
    const lessonNameInput = screen.getByRole("textbox", { name: /name/i });
    expect(lessonNameInput).toBeInTheDocument();
    await user.type(lessonNameInput, "{tab}");
    await user.click(createLessonButton);
    expect(handleAddNewLesson).toHaveBeenCalled();
    // expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

afterAll(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});
