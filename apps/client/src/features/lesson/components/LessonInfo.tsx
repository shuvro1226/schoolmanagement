import dayjs from "dayjs";
import { Lesson } from "@/types/LessonTypes";

type Props = {
  lessonDetails: Lesson;
};

export default function LessonInfo(props: Props): JSX.Element {
  const { lessonDetails } = props;
  const { name, startDate, endDate } = lessonDetails;
  return (
    <>
      <span className="lesson-name">{name}</span>
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
