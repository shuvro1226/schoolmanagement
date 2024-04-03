import {
    mockCreateLessonInput,
    mockLessons,
  } from "@/__mocks__/lesson.mocks";
  import LessonGrid from "../components/LessonGrid";
  import { render, screen } from "@testing-library/react";
  import dayjs from "dayjs";

describe("LessonGrid", () => {
  it("should check if single lesson grid rendered successfully with all informations", async () => {
    render(<LessonGrid lesson={mockLessons[0]} />);
    // checks if lesson name is rendered
    expect(screen.getByRole("heading")).toHaveTextContent("Test Lesson 1");
    // checks if start date is rendered
    expect(
      screen.getByText(
        dayjs(mockCreateLessonInput.startDate).format("DD/MM/YYYY")
      )
    ).toBeInTheDocument();
    // checks if end date is rendered
    expect(
      screen.getByText(
        dayjs(mockCreateLessonInput.endDate).format("DD/MM/YYYY")
      )
    ).toBeInTheDocument();
  });
});
