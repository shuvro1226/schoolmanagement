import { Label } from "@/components/ui/label";
import Select, { MultiValue } from "react-select";
import { OptionType } from "@/types/GenericTypes";
import { FormRendererConfig } from "../FormTypes";

type Props = {
  config: FormRendererConfig;
};

export default function MultiSelectInput(props: Props) {
  const { config } = props;
  const customStyles: any = {
    option: (provided: any) => ({
      ...provided,
      color: "#242424",
      padding: 10,
    }),
  };
  const {
    identifier,
    label,
    defaultValue,
    handleChange,
    options,
    wrapperClass,
  } = config;
  return (
    <div className={wrapperClass}>
      <Label htmlFor={identifier} className="text-right">
        {label}
      </Label>
      <Select
        className="w-64"
        value={defaultValue as MultiValue<OptionType>}
        onChange={(value: MultiValue<OptionType>) =>
          handleChange(identifier, value)
        }
        options={options}
        isMulti={true}
        classNames={{
          control: (state) =>
            state.isFocused
              ? "text-black dark:text-black"
              : "text-black dark:text-black",
        }}
        styles={customStyles}
      />
    </div>
  );
}
