import { cn } from "@/lib/utils";

export type InputProps = {
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type FormItemProps = {
  name: string;
  label?: string;
  error?: boolean;
} & React.PropsWithChildren;

export const inputStyles =
  "input w-full border-2 border-primary bg-transparent text-primary rounded-full placeholder:text-primary";

export function FormItem({ error, label, children }: FormItemProps) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
      <label className="label">
        {error && (
          <span className="label-text-alt">Este campo é obrigatório</span>
        )}
      </label>
    </label>
  );
}
