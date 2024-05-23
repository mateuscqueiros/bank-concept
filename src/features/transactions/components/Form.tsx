import { Button } from "@/components/elements";
import { FormItem, inputStyles, selectStyles } from "@/components/form";
import { useCategories } from "@/features/categories";
import { PAYMENT_METHODS } from "@/values/data";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { TransactionFormType, transactionSchema } from "../types";
import { DEFAULT_TRANSACTION_FORM_VALUES } from "../values";

type DefaultTransactionFormProps = {
  defaultValues?: TransactionFormType;
  onSubmit?: (values: TransactionFormType) => void;
  modalName?: string;
};

export function DefaultTransactionForm({
  defaultValues,
  onSubmit,
}: DefaultTransactionFormProps) {
  const { data: categories } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<TransactionFormType>({
    resolver: zodResolver(transactionSchema),
    defaultValues: defaultValues || DEFAULT_TRANSACTION_FORM_VALUES,
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        reset();
        onSubmit && onSubmit(values);
      })}
      className="pt-5 flex flex-col justify-between h-full"
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" className={inputStyles} {...register("name")} />
      </FormItem>
      <FormItem label="Valor" error={errors.value}>
        <Controller
          control={control}
          name="value"
          render={({ field: { onChange, value } }) => (
            <NumericFormat
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              className={inputStyles}
              onValueChange={(v) => {
                onChange(Number(v.value));
              }}
              value={value}
            />
          )}
        />
      </FormItem>
      <div className="flex gap-5">
        <FormItem label="Categoria" error={errors.categoryId}>
          <select className={selectStyles} {...register("categoryId")}>
            {categories.map((c) => (
              <option value={c.id} key={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </FormItem>
        <FormItem label="Tipo" error={errors.paymentType}>
          <select className={selectStyles} {...register("paymentType")}>
            {PAYMENT_METHODS.map((p) => (
              <option value={p.value} key={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </FormItem>
      </div>
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <FormItem label="Data" error={errors.date}>
            <ReactDatePicker
              className={selectStyles}
              dateFormat="dd/MM/yyyy"
              placeholderText="Data"
              selected={new Date(field.value)}
              onChange={(date: any) => {
                console.log(typeof date);
                field.onChange(new Date(date));
              }}
            />
          </FormItem>
        )}
      />
      <Button className="btn-primary w-full" type="submit">
        Salvar
      </Button>
    </form>
  );
}
