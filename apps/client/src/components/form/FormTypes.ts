import { OptionType } from "@/types/GenericTypes";

export type FormRendererConfig = {
    type?: string;
    identifier: string;
    label: string;
    wrapperClass: string;
    handleChange: any;
    options?: OptionType[];
    defaultValue: any;
  };