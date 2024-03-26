import { mockLessons } from "@/__mocks__/lesson.mocks";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Lessons from "../Lessons";

const mock = {
  lessons: mockLessons,
  lessonData: {
    ...mockLessons[0],
  },
  error: { show: false, message: "" },
  handleAddNewLesson: vi.fn(),
  handleFormDataChange: vi.fn(),
  handleGetLessons: vi.fn(),
  handleCreateLesson: vi.fn(),
};

vi.mock("@/hooks/useLessons", () => ({
  useLessons: () => {
    return mock;
  },
}));

it('should display the games according to the hooks data', () => {
    render(<Lessons />);
    const loadingElement = screen.queryByText('loading...');
    expect(loadingElement).not.toBeInTheDocument();

    const game1Element = screen.queryByText('name 1');
    expect(game1Element).toBeInTheDocument();

    const game2Element = screen.queryByText('name 2');
    expect(game2Element).toBeInTheDocument();
});