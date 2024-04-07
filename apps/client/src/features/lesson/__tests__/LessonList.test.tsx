import { screen } from "@testing-library/react";
import LessonsList from "../components/LessonsList";
import { MemoryRouter } from "react-router-dom";
import { store } from "@/state/store";
import { act } from "react-dom/test-utils";
import { lessonsSlice } from "@/state/lesson/lessonsSlice";
import { mockLessons } from "@/__mocks__/lesson.mocks";
import { render } from "@/test/ProviderWrapper";

describe("LessonsList", () => {
  it("should check if list of lessons rendered successfully with all informations", async () => {
    render(
      <MemoryRouter>
        <LessonsList />
      </MemoryRouter>
    );
    act(() => {
      store.dispatch(lessonsSlice.actions.setLessons(mockLessons));
    });
    // checks if all lessons are rendered
    expect(screen.queryAllByRole("link")).toHaveLength(2);
  });
});
