"use client";

import { Button } from "@/components/elements";
import { Modal } from "@/components/elements/Modal";
import { FormItem, inputStyles } from "@/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TransactionFormType, transactionSchema } from "../../types";
import { use, useEffect } from "react";

export function CreateTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<TransactionFormType>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      title: "Teste",
      value: 123,
      date: new Date("01/01/2024").toLocaleDateString().substring(0, 10),
      type: 0,
      categoryId: 0,
    },
  });

  useEffect(() => {
    setValue("date", getValues("date").toLocaleDateString().substring(0, 10));
  }, [getValues]);

  const onSubmit = (data: TransactionFormType) => console.log(data);
  console.log("error", errors);

  return (
    <Modal title="Transação" name="createTransaction">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-5 flex flex-col justify-between h-full"
      >
        <FormItem label="Nome" error={errors.title}>
          <input type="text" className={inputStyles} {...register("title")} />
        </FormItem>
        <FormItem label="Valor" error={errors.value}>
          <input
            type="number"
            className={inputStyles}
            {...register("value", {
              valueAsNumber: true,
            })}
          />
        </FormItem>
        <div className="flex gap-5">
          <FormItem label="Categoria" error={errors.categoryId}>
            <select
              className={inputStyles}
              {...register("categoryId", {
                valueAsNumber: true,
              })}
            >
              <option value={0}>Categoria 1</option>
              <option value={1}>Categoria 2</option>
              <option value={2}>Categoria 3</option>
            </select>
          </FormItem>
          <FormItem label="Tipo" error={errors.type}>
            <select
              className={inputStyles}
              {...register("type", {
                valueAsNumber: true,
              })}
            >
              <option value={0}>Tipo 1</option>
              <option value={1}>Tipo 2</option>
              <option value={2}>Tipo 3</option>
            </select>
          </FormItem>
        </div>
        <FormItem label="Data" error={errors.date}>
          <input
            type="date"
            // defaultValue={new Date().toISOString().substring(0, 10)}
            className={inputStyles}
            {...register("date", {
              valueAsDate: true,
            })}
          />
        </FormItem>
        <Button className="btn-primary w-full" type="submit">
          Salvar
        </Button>
      </form>
    </Modal>
  );
}
