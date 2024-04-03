import dayjs from "dayjs";
import { Lesson } from "@/features/lesson/LessonTypes";

type Props = {
  lessonDetails: Lesson;
};

export default function LessonInfo(props: Props): JSX.Element {
  const { lessonDetails } = props;
  const { name, startDate, endDate } = lessonDetails;
  return (
    <>
      <h4 className="lesson-name">{name}</h4>
      <p className="lesson-start-date">
        Start date:{" "}
        {dayjs(startDate, "YYYY-MM-DDTHH:mm:ssZ").format("DD.MM.YYYY")}
      </p>
      <p>
        End date: {dayjs(endDate, "YYYY-MM-DDTHH:mm:ssZ").format("DD.MM.YYYY")}
      </p>
    </>
  );
}
