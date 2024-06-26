import { FormRendererConfig } from "./FormTypes";
import DatePickerInput from "./fields/DatePickerInput";
import MultiSelectInput from "./fields/MultiSelectInput";
import TextInput from "./fields/TextInput";

type Props = {
  formConfig: FormRendererConfig[];
};

export default function FormRenderer(props: Props) {
  const { formConfig } = props;

  const formFields = formConfig.map((config) => {
    let field;
    if (config.type === "text") {
      field = <TextInput config={config} key={config.identifier} />;
    }
    if (config.type === "date") {
      field = <DatePickerInput config={config} key={config.identifier} />;
    }
    if (config.type === "multiselect") {
      field = <MultiSelectInput config={config} key={config.identifier} />;
    }
    return field;
  });

  return formFields;
}
