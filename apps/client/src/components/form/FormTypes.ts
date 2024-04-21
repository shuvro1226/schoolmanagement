import { HandleFormDataChange } from "@/features/lesson/types";
import { OptionType } from "@/types/GenericTypes";
import { MultiValue } from "react-select";

export type FormRendererConfig = {
  type?: string;
  identifier: string;
  label: string;
  wrapperClass: string;
  handleChange: HandleFormDataChange;
  options?: MultiValue<OptionType>;
  defaultValue: Date | string | MultiValue<OptionType>;
};
