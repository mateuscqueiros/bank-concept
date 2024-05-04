import { cn } from "@/lib/utils";
import { FormItem, InputProps, inputStyles } from "./FormItem";

export type NumberInputProps = {
  label: string;
} & InputProps;

export function NumberInput({
  label,
  value,
  className,
  name,
  ...rest
}: NumberInputProps) {
  return (
    <FormItem name={name} label={label}>
      <input
        type="number"
        defaultValue={value}
        className={cn([inputStyles, className])}
        {...rest}
      />
    </FormItem>
  );
}
