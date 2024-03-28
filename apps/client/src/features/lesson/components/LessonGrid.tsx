import { Lesson } from "../LessonTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";

interface Props {
  lesson: Lesson;
}

export default function LessonGrid(props: Props): JSX.Element {
  const { lesson } = props;
  const { name, startDate, endDate } = lesson;
  return (
    <Card className="cursor-pointer hover:border-gray-400">
      <CardHeader>
        <CardTitle className="card-title">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{dayjs(startDate).format("DD/MM/YYYY")}</p>
        <p>{dayjs(endDate).format("DD/MM/YYYY")}</p>
      </CardContent>
    </Card>
  );
}
