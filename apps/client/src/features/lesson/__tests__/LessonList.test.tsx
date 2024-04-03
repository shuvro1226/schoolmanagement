import { mockLessons } from "@/__mocks__/lesson.mocks";
import { render, screen } from "@testing-library/react";
import LessonsList from "../components/LessonsList";
import { MemoryRouter } from "react-router-dom";

describe("LessonsList", () => {
  it("should check if list of lessons rendered successfully with all informations", async () => {
    render(
      <MemoryRouter>
        <LessonsList lessons={mockLessons} />
      </MemoryRouter>
    );
    // checks if all lessons are rendered
    expect(screen.getAllByRole("link")).toHaveLength(mockLessons.length);
  });
});
