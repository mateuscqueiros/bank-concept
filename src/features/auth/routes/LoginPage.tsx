"use client";

import { useTransactions } from "@/features/transactions";
import { useLoginUser, useUser } from "../api";
import { LoginForm } from "../components";
import { storage } from "../lib";
import { LoginFormType } from "../types";

export function LoginPage() {
  const { mutateAsync: loginUser } = useLoginUser();

  const { data: transactions } = useTransactions();
  const { data: users } = useUser();

  console.log("Login transactions: ", transactions);
  console.log("Login user: ", users);

  const onSubmit = (values: LoginFormType) => {
    loginUser(values).then((res) => {
      storage.setToken(res.data.accessToken);
    });
  };

  return (
    <div className="border-2 border-primary p-10 pt-8 rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
