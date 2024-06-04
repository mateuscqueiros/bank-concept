"use client";

import { useTransactions } from "@/features/transactions";
import { useRouter } from "next/navigation";
import { useLoginUser, useUser } from "../api";
import { LoginForm } from "../components";
import { LoginFormType } from "../types";

export function LoginPage() {
  const { mutateAsync: loginUser } = useLoginUser();

  const { data: user } = useUser();

  console.log("Login user: ", user);

  const onSubmit = (values: LoginFormType) => {
    loginUser(values)
      .then((res) => {
        console.log("sucesso", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="border-2 border-primary p-10 pt-8 rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
