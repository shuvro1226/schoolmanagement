import {
  mockCreateLessonInput,
  mockLessons,
  mockLessonsHookReturnData,
} from "@/__mocks__/lesson.mocks";
import LessonGrid from "../components/LessonGrid";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import dayjs from "dayjs";
import LessonInfo from "../components/LessonInfo";
import LessonsList from "../components/LessonsList";
import { MemoryRouter } from "react-router-dom";
import AddLesson from "../components/AddLesson";
import { mockStudentsHookReturnData } from "@/__mocks__/student.mock";

describe("LessonGrid", () => {
  it("should check if single lesson grid rendered successfully with all informations", async () => {
    const { container } = render(<LessonGrid lesson={mockLessons[0]} />);
    expect(await screen.findByText("Test Lesson 1")).toBeInTheDocument();
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      dayjs(mockCreateLessonInput.startDate).format("DD/MM/YYYY")
    );
    expect(container.getElementsByClassName("card-title")[0]).toHaveTextContent(
      "Test Lesson 1"
    );
  });
});

describe("LessonInfo", () => {
  it("should check if lesson information rendered successfully with all informations", async () => {
    const { container } = render(<LessonInfo lessonDetails={mockLessons[0]} />);
    expect(await screen.findByText("Test Lesson 1")).toBeInTheDocument();
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      `Start date: ${dayjs(mockCreateLessonInput.startDate).format("DD.MM.YYYY")}`
    );
    expect(
      container.getElementsByClassName("lesson-name")[0]
    ).toHaveTextContent("Test Lesson 1");
  });
});

describe("LessonsList", () => {
  it("should check if list of lessons rendered successfully with all informations", async () => {
    const { container } = render(
      <MemoryRouter>
        <LessonsList lessons={mockLessons} />
      </MemoryRouter>
    );
    expect(await screen.findByText("Test Lesson 1")).toBeInTheDocument();
    expect(container.getElementsByClassName("lesson-link").length).toEqual(
      mockLessons.length
    );
  });
});

describe("AddLesson", async () => {
  it("should check if add lesson modal is triggered and create lesson works", async () => {
    const { container } = render(
      <AddLesson
        lessonHookObj={mockLessonsHookReturnData}
        studentsHookObj={mockStudentsHookReturnData}
      />
    );
    const { handleAddNewLesson } = mockLessonsHookReturnData;

    // checks if create modal is opened when button is clicked
    const addNewLessonButton = container.getElementsByTagName("button")[0];
    fireEvent.click(addNewLessonButton);
    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    const createLessonButton = screen.getByRole("create-lesson");
    const lessonNameInput = screen.getByRole("name");
    waitFor(() => expect(lessonNameInput).toBeInTheDocument());
    fireEvent.change(lessonNameInput, { target: { value: "" } });
    fireEvent.click(createLessonButton);
    expect(handleAddNewLesson).toHaveBeenCalled();
  });
});

afterAll(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});
