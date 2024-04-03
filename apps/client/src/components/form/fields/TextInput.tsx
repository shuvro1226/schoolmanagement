import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormRendererConfig } from "../FormTypes";

type Props = {
  config: FormRendererConfig;
};

export default function TextInput(props: Props) {
  const { config } = props;
  const { identifier, label, defaultValue, handleChange, wrapperClass } =
    config;
  return (
    <div className={wrapperClass}>
      <Label htmlFor={identifier} className="text-right">
        {label}
      </Label>
      <Input
        id={identifier}
        defaultValue={defaultValue}
        className="col-span-3"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(identifier, e.target.value)
        }
      />
    </div>
  );
}
