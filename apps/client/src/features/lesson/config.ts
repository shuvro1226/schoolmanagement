import { HandleFormDataChange, LessonFormInputType } from "@/features/lesson/types";
import { OptionType } from "@/types/GenericTypes";

export const addLessonFormConfig = (
  lessonData: LessonFormInputType,
  handleFormDataChange: HandleFormDataChange,
  studentOptions: OptionType[]
) => [
  {
    type: "text",
    identifier: "name",
    label: "Name",
    defaultValue: lessonData.name,
    handleChange: handleFormDataChange,
    wrapperClass: "grid grid-cols-4 items-center gap-4",
  },
  {
    type: "date",
    identifier: "startDate",
    label: "Start Date",
    defaultValue: lessonData.startDate,
    handleChange: handleFormDataChange,
    wrapperClass: "grid grid-cols-4 items-center gap-4",
  },
  {
    type: "date",
    identifier: "endDate",
    label: "End Date",
    defaultValue: lessonData.endDate,
    handleChange: handleFormDataChange,
    wrapperClass: "grid grid-cols-4 items-center gap-4",
  },
  {
    type: "multiselect",
    identifier: "students",
    label: "Students",
    defaultValue: lessonData.students,
    handleChange: handleFormDataChange,
    wrapperClass: "grid grid-cols-4 items-center gap-4",
    options: studentOptions,
  },
];
