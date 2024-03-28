import { Label } from "@/components/ui/label";
import Select, { MultiValue } from "react-select";
import { OptionType } from "@/types/GenericTypes";
import { FormRendererConfig } from "../FormTypes";

type Props = {
  config: FormRendererConfig;
};

export default function MultiSelectInput(props: Props) {
  const { config } = props;
  const { identifier, label, defaultValue, handleChange, options, wrapperClass } = config;
  return (
    <div className={wrapperClass}>
      <Label htmlFor="endDate" className="text-right">
        {label}
      </Label>
      <Select
        className="w-64"
        value={defaultValue}
        onChange={(value: MultiValue<OptionType | null>) =>
          handleChange(identifier, value)
        }
        options={options}
        isMulti={true}
      />
    </div>
  );
}
