import { cn } from "@/lib/utils";
import { FormItem, InputProps, inputStyles } from "./FormItem";

export type TextInputProps = {
  label: string;
} & InputProps;

export function TextInput({
  label,
  value,
  className,
  name,
  ...rest
}: TextInputProps) {
  return (
    <FormItem name={name} label={label}>
      <input
        type="text"
        defaultValue={value}
        className={cn([inputStyles, className])}
        {...rest}
      />
    </FormItem>
  );
}
