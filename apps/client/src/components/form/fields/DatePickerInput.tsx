import { Label } from "@/components/ui/label";
import DatePicker from "react-datepicker";
import { FormRendererConfig } from "../FormTypes";

type Props = {
  config: FormRendererConfig;
};

export default function DatePickerInput(props: Props) {
  const { config } = props;
  const { identifier, label, defaultValue, handleChange, wrapperClass } = config;

  return (
    <div className={wrapperClass}>
      <Label htmlFor={identifier} className="text-right">
        {label}
      </Label>
      <DatePicker
        className="outline outline-1 p-2"
        selected={defaultValue as Date}
        onChange={(date: Date) => handleChange(identifier, date.toISOString())}
        dateFormat={"dd.MM.yyyy"}
      />
    </div>
  );
}
