import { mockCreateLessonInput, mockLessons } from "@/__mocks__/lesson.mocks";
import Lesson from "../components/LessonGrid";
import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";

describe("Lesson grid component", () => {
  it("should check if single lesson grid rendered successfully with all informations", async () => {
    const { container } = render(<Lesson lesson={mockLessons[0]} />);
    expect(await screen.findByText("Test Lesson")).toBeInTheDocument();
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      dayjs(mockCreateLessonInput.startDate).format("DD/MM/YYYY")
    );
    expect(container.getElementsByClassName("card-title")[0]).toHaveTextContent(
      "Test Lesson"
    );
  });
});

afterAll(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});
