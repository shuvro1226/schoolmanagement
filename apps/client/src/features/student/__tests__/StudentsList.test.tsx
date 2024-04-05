import { render, screen } from "@testing-library/react";
import StudentsList from "../components/StudentsList";
import { MemoryRouter } from "react-router-dom";
import { mockStudents } from "@/__mocks__/student.mock";

describe("StudentsList", () => {
  it("should check if list of students rendered successfully with all informations", async () => {
    render(
      <MemoryRouter>
        <StudentsList students={mockStudents} caption="" />
      </MemoryRouter>
    );
    // checks if all students are rendered
    expect(screen.getAllByRole("row")).toHaveLength(mockStudents.length + 1);
  });

  it("should check if caption is rendered", async () => {
    render(
      <MemoryRouter>
        <StudentsList
          students={mockStudents}
          caption="This is the best caption ever!"
        />
      </MemoryRouter>
    );
    // checks if caption is rendered
    expect(
      screen.getByText("This is the best caption ever!")
    ).toBeInTheDocument();
  });
});
