import useLessons from "@/hooks/useLessons";
import { Lesson as LessonType } from "../../types/LessonTypes";
import Lesson from "./Lesson";
import { Button } from "@/components/ui/button";

export default function Lessons() {
  const { lessons } = useLessons();

  return (
    <div className="container">
      <div className="mb-4 text-left grid grid-cols-2">
        <span className="text-xl">Lessons</span>
        <Button variant="outline" className="w-48">
          Add New Lesson
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {lessons?.map((lesson: LessonType) => {
          return <Lesson key={lesson.id} lesson={lesson} />;
        })}
      </div>
    </div>
  );
}
