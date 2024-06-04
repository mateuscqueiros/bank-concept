"use client";

import { Button } from "@/components/elements";
import { FormItem, inputStyles } from "@/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterFormType, registerFormSchema } from "../types";
import { DEFAULT_REGISTER_FORM_VALUES } from "../values";

type RegisterFormProps = {
  initialValues?: RegisterFormType;
  onSubmit?: (values: RegisterFormType, reset?: () => void) => void;
};

export function RegisterForm({ initialValues, onSubmit }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: initialValues || DEFAULT_REGISTER_FORM_VALUES,
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        onSubmit && onSubmit(values, reset);
      })}
      className="pt-5 flex flex-col justify-between"
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" className={inputStyles} {...register("name")} />
      </FormItem>
      <FormItem label="Email" error={errors.email}>
        <input type="text" className={inputStyles} {...register("email")} />
      </FormItem>
      <FormItem label="Senha" error={errors.password}>
        <input
          type="password"
          className={inputStyles}
          {...register("password")}
        />
      </FormItem>
      <Button className="btn-primary w-full" type="submit">
        Salvar
      </Button>
      <span className="flex justify-center text-sm mt-3">
        Já tem uma conta?&nbsp;
        <Link href="/login" className="text-primary hover:underline">
          Faça login
        </Link>
      </span>
    </form>
  );
}
