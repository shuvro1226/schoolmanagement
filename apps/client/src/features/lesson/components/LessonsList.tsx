import { Lesson as LessonType } from "@/features/lesson/types";
import Lesson from "./LessonGrid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function LessonsList(): JSX.Element {
  const lessons = useSelector((state: RootState) => state.lesson.lessons);
  return (
    <div id="lessons_wrapper" className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
      {lessons?.map((lesson: LessonType) => {
        return (
          <Link
            key={lesson.id}
            to={`/lesson/${lesson.id}`}
            className="lesson-link text-black hover:text-gray-800"
          >
            <Lesson lesson={lesson} />
          </Link>
        );
      })}
    </div>
  );
}
