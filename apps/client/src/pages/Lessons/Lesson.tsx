import { NavLink } from "react-router-dom";
import { Lesson as LessonType } from "../../types/LessonTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  lesson: LessonType;
}

export default function Lesson(props: Props) {
  const { lesson } = props;
  const { id, name, startDate, endDate } = lesson;
  return (
    <NavLink to={`/lesson/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{startDate}</p>
          <p>{endDate}</p>
        </CardContent>
      </Card>
    </NavLink>
  );
}
