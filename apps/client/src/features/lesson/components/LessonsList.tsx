import { Lesson as LessonType } from "@/features/lesson/LessonTypes";
import Lesson from "./LessonGrid";
import { Link } from "react-router-dom";

type Props = {
  lessons: LessonType[];
};

export default function LessonsList(props: Props): JSX.Element {
  const { lessons } = props;
  return (
    <div id="lessoos_wrapper" className="grid grid-cols-3 gap-8">
      {lessons?.map((lesson: LessonType) => {
        return (
          <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="lesson-link">
            <Lesson lesson={lesson} />
          </Link>
        );
      })}
    </div>
  );
}
