import { Link } from "react-router-dom";
import { Lesson as LessonType } from "../../types/LessonTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  lesson: LessonType;
}

export default function Lesson(props: Props) {
  const { lesson } = props;
  const { id, name, startDate, endDate } = lesson;
  return (
    <Link to={`/lesson/${id}`}>
      <Card className="cursor-pointer hover:border-gray-400">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{startDate}</p>
          <p>{endDate}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
