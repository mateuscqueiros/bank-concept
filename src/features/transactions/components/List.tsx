"use client";
import { useTransactionStore } from "../stores";
import { TransactionItem } from "./Item";
import { useModalStore } from "@/stores";

export type TransactionListProps = {
  title: string;
};

export function TransactionList({ title }: TransactionListProps) {
  const openUpdateModal = useModalStore.use.openUpdate();
  const transactions = useTransactionStore.use.transactions();

  return (
    <div>
      <h3 className="font-bold text-xl mb-5">{title}</h3>
      <ul className="relative flex flex-col gap-5 w-full before:absolute before:content-[''] before:left-[19px] before:my-[16px] before:h-[calc(100%-32px)] before:max-h-full before:w-[2px] before:bg-gray-200">
        {transactions.map((transaction) => (
          <li
            className="cursor-pointer"
            key={`transaction-item-${transaction.id}`}
            onClick={() => openUpdateModal("updateTransaction", transaction.id)}
          >
            <TransactionItem data={transaction} />
          </li>
        ))}
      </ul>
    </div>
  );
}
