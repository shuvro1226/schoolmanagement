import { mockCreateLessonInput, mockLessons } from "@/__mocks__/lesson.mocks";
import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import LessonInfo from "../components/LessonInfo";

describe("LessonInfo", () => {
  it("should check if lesson information rendered successfully with all informations", async () => {
    render(<LessonInfo lessonDetails={mockLessons[0]} />);
    // checks if lesson name is rendered
    expect(screen.getByRole("heading")).toHaveTextContent("Test Lesson 1");
    // checks if start date is rendered
    expect(
      screen.getByText(
        `Start date: ${dayjs(mockCreateLessonInput.startDate).format("DD.MM.YYYY")}`
      )
    ).toBeInTheDocument();
    // checks if end date is rendered
    expect(
      screen.getByText(
        `End date: ${dayjs(mockCreateLessonInput.endDate).format("DD.MM.YYYY")}`
      )
    ).toBeInTheDocument();
  });
});
