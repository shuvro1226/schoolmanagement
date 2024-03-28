import { HandleFormDataChange } from "@/features/lesson/LessonTypes";
import { OptionType } from "@/types/GenericTypes";

export type FormRendererConfig = {
    type?: string;
    identifier: string;
    label: string;
    wrapperClass: string;
    handleChange: HandleFormDataChange;
    options?: OptionType[];
    defaultValue: any;
  };