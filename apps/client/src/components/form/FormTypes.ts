import { HandleFormDataChange } from "@/features/lesson/types";
import { OptionType } from "@/types/GenericTypes";

export type FormRendererConfig = {
    type?: string;
    identifier: string;
    label: string;
    wrapperClass: string;
    handleChange: HandleFormDataChange;
    options?: OptionType[];
    defaultValue: Date | string | OptionType[];
  };