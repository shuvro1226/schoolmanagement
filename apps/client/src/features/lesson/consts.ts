import dayjs from "dayjs";
import { ErrorType } from "@/types/GenericTypes";
import { LessonFormInputType } from "./types";

export const lessonDataDefaultValue: LessonFormInputType = {
  name: "",
  startDate: dayjs().toDate().toISOString(),
  endDate: dayjs().add(7, "day").toDate().toISOString(),
  students: null,
};
export const errorDefaultValue: ErrorType = {
  show: false,
  message: "",
};
