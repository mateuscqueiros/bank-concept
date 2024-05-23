"use client";

import { useLoginUser, useUser } from "../api";
import { LoginForm } from "../components";
import { LoginFormType } from "../types";

export function LoginPage() {
  const { mutate: loginUser } = useLoginUser();
  const { data: user } = useUser();
  console.log(user);

  const onSubmit = (values: LoginFormType) => {
    loginUser(values);
  };

  return (
    <div className="border-2 border-primary p-10 pt-8 rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
