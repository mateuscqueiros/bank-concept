import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem, inputStyles, selectStyles } from "@/components/form";
import { NumericFormat } from "react-number-format";
import ReactDatePicker from "react-datepicker";
import { Button } from "@/components/elements";
import {
  DEFAULT_TRANSACTION_FORM_VALUES,
  PAYMENT_METHODS,
} from "@/values/data";
import { TransactionFormType, transactionSchema } from "../types";
import { useCategoryStore } from "@/stores";

type DefaultTransactionFormProps = {
  defaultValues?: TransactionFormType;
  onSubmit: (values: TransactionFormType) => void;
  modalName?: string;
};

export function DefaultTransactionForm({
  defaultValues,
  onSubmit,
}: DefaultTransactionFormProps) {
  const categories = useCategoryStore.use.categories();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<TransactionFormType>({
    resolver: zodResolver(transactionSchema),
    defaultValues: defaultValues || DEFAULT_TRANSACTION_FORM_VALUES,
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        reset();
        onSubmit(values);
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
          <select
            className={selectStyles}
            {...register("categoryId", {
              valueAsNumber: true,
            })}
          >
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
              selected={field.value}
              onChange={(date: any) => field.onChange(date)}
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
