"use client";

import { useCreateUser } from "../api";
import { RegisterForm } from "../components";
import { storage } from "../lib";
import { RegisterFormType } from "../types";

export function RegisterPage() {
  const { mutateAsync: createUser } = useCreateUser();

  const onSubmit = (values: RegisterFormType) => {
    createUser(values)
      .then((data) => {
        storage.setToken(data.accessToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="border-2 border-primary p-10 pt-8 rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Register</h1>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}
