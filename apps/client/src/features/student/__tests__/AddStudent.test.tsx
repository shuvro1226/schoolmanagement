import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import AddStudent from "../components/AddStudent";
import { mockStudentsHookReturnData } from "@/__mocks__/student.mock";
import { describe, it, expect, afterAll, vi } from "vitest";
import { StudentHookReturnType } from "../StudentTypes";

const user = userEvent.setup();

describe("AddStudent", async () => {
  it("should check if add Student modal is triggered on clicking add new Student and closes on clicking save changes", async () => {
    render(<AddStudent studentHookObj={mockStudentsHookReturnData} />);

    const { handleAddNewStudent } = mockStudentsHookReturnData;

    // checks if create modal is opened when button is clicked
    const addNewStudentButton = screen.getByRole("button", {
      name: /add new Student/i,
    });
    await user.click(addNewStudentButton);
    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    const createStudentButton = screen.getByRole("button", {
      name: /save changes/i,
    });
    await user.click(createStudentButton);
    expect(handleAddNewStudent).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should check if alert is triggered if form is submitted with empty first name", async () => {
    const updatedmockStudentsHookReturnData: StudentHookReturnType = {
      ...mockStudentsHookReturnData,
      error: { show: true, message: "Names can not be empty!" },
      handleAddNewStudent: vi.fn((e) => e.preventDefault()),
    };
    render(<AddStudent studentHookObj={updatedmockStudentsHookReturnData} />);

    // checks if create modal is opened when button is clicked
    const addNewStudentButton = screen.getByRole("button", {
      name: /add new Student/i,
    });
    await user.click(addNewStudentButton);

    const createStudentButton = screen.getByRole("button", {
      name: /save changes/i,
    });
    await user.click(createStudentButton);
    // checks if alert is triggered
    expect(screen.getByText("Names can not be empty!")).toBeInTheDocument();
  });

  it("should check if formDataChange is called on field value is changed", async () => {
    render(<AddStudent studentHookObj={mockStudentsHookReturnData} />);

    const { handleFormDataChange } = mockStudentsHookReturnData;

    const addNewStudentButton = screen.getByRole("button", {
      name: /add new Student/i,
    });
    await user.click(addNewStudentButton);

    const FirstNameInput = screen.getByRole("textbox", { name: /first name/i });
    // checks if input is present
    expect(FirstNameInput).toBeInTheDocument();
    await user.type(FirstNameInput, "Student");
    // checks if handleFormDataChange is called 7 times
    expect(handleFormDataChange).toHaveBeenCalledTimes(7);
  });
});

afterAll(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});
