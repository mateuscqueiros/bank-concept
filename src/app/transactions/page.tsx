"use client";

import { AddCategory } from "@/features/categories";
import { CategoriesProgress } from "@/features/categories/components";
import { TransactionList } from "@/features/transactions";
import { AddTransaction } from "@/features/transactions/actions/Add";
import { CreateTransactionModal } from "@/features/transactions/components/modals/CreateTransaction";
import { isToday, isYesterday } from "date-fns";
import { useContext, useState } from "react";

export default function Transactions() {
  const [createOpen, setCreateOpen] = useState(false);
  const transactions: any[] = [];
  console.log("transactions render");

  const totalExpenses = transactions.reduce(
    (acc, transaction) => transaction.value + acc,
    0,
  );

  const today = transactions.filter((transaction) => isToday(transaction.date));
  const yesterday = transactions.filter((transaction) =>
    isYesterday(transaction.date),
  );
  const previous = transactions.filter(
    (transaction) =>
      !isYesterday(transaction.date) && !isToday(transaction.date),
  );

  return (
    <div className="flex flex-col p-6 pt-10">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-3xl mb-5">Transações</h1>
        <div className="flex flex-row gap-5">
          <AddCategory />
          <AddTransaction />
          <button className="btn" onClick={() => setCreateOpen(true)}>
            Abrir
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-x-[300px] gap-y-10 justify-center w-full p-12 bg-contrast rounded-xl mb-10">
        <div className="flex flex-col justify-center text-primary">
          <span className="font-medium">
            Total de gastos:{" "}
            <b>
              {totalExpenses.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </b>
          </span>
        </div>
        <CategoriesProgress className="justify-center max-w-[400px] flex-wrap gap-x-20 gap-y-10" />
      </div>
      <div className="flex flex-col max-w-[600px] w-full mx-auto gap-10">
        {today.length > 0 && <TransactionList title="Hoje" items={today} />}
        {yesterday.length > 0 && (
          <TransactionList title="Ontem" items={yesterday} />
        )}
        {previous.length > 0 && (
          <TransactionList
            title={(today || yesterday) && "Anterior"}
            items={previous}
          />
        )}
      </div>
      <CreateTransactionModal open={createOpen} setOpen={setCreateOpen} />
    </div>
  );
}
